import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import useInnerWidth from '@hooks/useInnerWidth';
import detectMobile from '@lib/detectMobile';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { IStreamListType } from '@type/streamType';
import ShareModal from '@components/Modal/ShareModal';
import StreamInfo from '@components/StreamInfo';
import StreamPlayer from '@components/StreamPlayer';
import StretchIcon from '@components/StretchIcon';
import { sizes } from '@styles/media';
import * as STC from './StreamItem.style';
import useStreamItem from './useStreamItem';

const StreamItem = ({ item }: { item: IStreamListType }) => {
  const { t } = useTranslation();
  const { onClick } = useStreamItem();
  const { innerWidth } = useInnerWidth();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [link, setLink] = useState('');
  const [isShowSM, setIsShowSM] = useState(false);

  const streamRef = useRef<HTMLDivElement>(null);

  const onClickVod = useCallback(() => {
    if (item.isLive) {
      onClick(item.chatKey, `${item.vodId}`);
    } else {
      window.location.href = link;
    }
  }, [link]);

  const onHandleShareModal = useCallback(() => {
    setIsShowSM(true);
  }, []);

  useEffect(() => {
    if (item.isLive) {
      setLink(`${window.location.origin}${PAGE_URL.LIVE_DETAIL}/${item.vodId}`);
    } else {
      setLink(`${window.location.origin}${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`);
    }
  }, [item]);

  useEffect(() => {
    function handleStreamOver(e: MouseEvent): void {
      if (innerWidth > sizes.tablet) {
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
      <STC.StreamWrapper onClick={() => onClickVod()}>
        <STC.StreamInnerWrapper ref={streamRef}>
          <StretchIcon isShow={isMouseOver} vodId={item.vodId} onHandleShareModal={onHandleShareModal} />
          <StreamPlayer
            url={setPlaybackUrl(item.playbackUrl, item.playToken)}
            thumbnail={item.thumbnail}
            isMouseOver={isMouseOver}
          />
          {!item.isLive && <STC.StreamTime isMouseOver={isMouseOver}>{item.streamLen}</STC.StreamTime>}
        </STC.StreamInnerWrapper>
        <StreamInfo item={item} />
        {item.isLive && <STC.SmallLiveTag>{t('common_live')}</STC.SmallLiveTag>}
      </STC.StreamWrapper>
      <ShareModal title={item.title} isShow={isShowSM} setIsShow={() => setIsShowSM(!isShowSM)} link={link} />
    </STC.StreamItem>
  );
};

export default StreamItem;
