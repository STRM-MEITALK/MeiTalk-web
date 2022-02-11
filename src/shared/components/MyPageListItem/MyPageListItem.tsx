import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { IMyPageListItemProps } from '@type/studioType';
import detectMobile from '@lib/detectMobile';
import MyPageItemInfo from '@components/MyPageItemInfo';
import MyStudioItemInfo from '@components/MyStudioItemInfo';
import MyChannelItemInfo from '@components/MyChannelItemInfo';
import StreamPlayer from '@components/StreamPlayer';
import NoVideoIcon from '@images/no-video-pc.png';
import { sizes } from '@styles/media';
import * as STC from './MyPageListItem.style';

const MyPageListItem = ({ item, activeTab, type }: IMyPageListItemProps) => {
  const { t } = useTranslation();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [link, setLink] = useState('');
  const streamRef = useRef<HTMLDivElement>(null);

  const onClickVod = useCallback(() => {
    window.location.href = link;
  }, [link]);

  useEffect(() => {
    if (type === 'mypage' || type === 'channel' || type === 'channeltop') {
      if (item.isLive) {
        setLink(`${window.location.origin}${PAGE_URL.LIVE_DETAIL}/${item.vodId}`);
      } else {
        setLink(`${window.location.origin}${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`);
      }
    } else if (type === 'mystudio') {
      setLink(`${window.location.origin}${PAGE_URL.MY_STUDIO_EDIT}/${item.vodId}`);
    }
  }, [item]);

  useEffect(() => {
    function handleStreamOver(e: MouseEvent): void {
      if (window.innerWidth > sizes.tablet) {
        if (streamRef.current?.contains(e.target as Node) && !detectMobile()) {
          setIsMouseOver(true);
        } else {
          setIsMouseOver(false);
        }
      }
    }
    document.addEventListener('mouseover', handleStreamOver);
    return () => {
      document.removeEventListener('mouseover', handleStreamOver);
    };
  }, [streamRef]);

  return (
    <STC.StreamItem>
      {item.displayFlag === 'N' && !item.isLive && type === 'mypage' && (
        <STC.StreamWrapper>
          <STC.StreamInnerWrapperNoVideo>
            <STC.NoVideo>
              <STC.NoVideoIcon src={NoVideoIcon} alt="novideo" />
            </STC.NoVideo>
            <MyPageItemInfo item={item} activeTab={activeTab} />
          </STC.StreamInnerWrapperNoVideo>
        </STC.StreamWrapper>
      )}

      {item.displayFlag === 'N' && item.isLive && type === 'mypage' && (
        <STC.StreamWrapper>
          <STC.StreamInnerWrapper onClick={() => onClickVod()} ref={streamRef}>
            <StreamPlayer
              url={setPlaybackUrl(item.playbackUrl, item.playToken)}
              thumbnail={item.thumbnail}
              isMouseOver={isMouseOver}
            />

            <MyPageItemInfo item={item} activeTab={activeTab} />
          </STC.StreamInnerWrapper>
        </STC.StreamWrapper>
      )}

      {item.displayFlag === 'N' && type === 'mystudio' && (
        <STC.StreamWrapper>
          <STC.StreamInnerWrapper onClick={() => onClickVod()} ref={streamRef}>
            <StreamPlayer
              url={setPlaybackUrl(item.playbackUrl, item.playToken)}
              thumbnail={item.thumbnail}
              isMouseOver={isMouseOver}
            />

            {!item.isLive && <STC.StreamTime isMouseOver={!isMouseOver}>{item.streamLen}</STC.StreamTime>}
          </STC.StreamInnerWrapper>
          {type === 'mystudio' && <MyStudioItemInfo item={item} />}
        </STC.StreamWrapper>
      )}
      {item.displayFlag === 'Y' && type !== 'channeltop' && (
        <STC.StreamWrapper>
          <STC.StreamInnerWrapper onClick={() => onClickVod()} ref={streamRef}>
            <StreamPlayer
              url={setPlaybackUrl(item.playbackUrl, item.playToken)}
              thumbnail={item.thumbnail}
              isMouseOver={isMouseOver}
            />

            {!item.isLive && <STC.StreamTime isMouseOver={!isMouseOver}>{item.streamLen}</STC.StreamTime>}
          </STC.StreamInnerWrapper>

          {type === 'mypage' && <MyPageItemInfo item={item} activeTab={activeTab} />}
          {type === 'mystudio' && <MyStudioItemInfo item={item} />}
          {type === 'channel' && <MyChannelItemInfo item={item} />}
        </STC.StreamWrapper>
      )}

      {type === 'channeltop' && (
        <STC.StreamWrapper>
          <STC.StreamInnerWrapper onClick={() => onClickVod()} ref={streamRef}>
            <StreamPlayer
              url={setPlaybackUrl(item.playbackUrl, item.playToken)}
              thumbnail={item.thumbnail}
              isMouseOver={isMouseOver}
            />

            {!item.isLive && <STC.StreamTime isMouseOver={!isMouseOver}>{item.streamLen}</STC.StreamTime>}
          </STC.StreamInnerWrapper>
        </STC.StreamWrapper>
      )}
    </STC.StreamItem>
  );
};

export default MyPageListItem;
