import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { IStreamListType } from '@type/streamType';
import detectMobile from '@lib/detectMobile';
import MainListItemInfo from '@components/MainListItemInfo';
import StreamMainPlayer from '@components/StreamMainPlayer';
import StretchIcon from '@components/StretchIcon';
import * as STC from './MainListItem.style';
import useMainListItem from './useMainListItem';

const MainListItem = ({
  item,
  link,
  setIsShowSM,
  setLink,
  setTitle,
}: {
  item: IStreamListType;
  link: string;
  setIsShowSM: (_: boolean) => void;
  setLink: (_: string) => void;
  setTitle: (_: string) => void;
}) => {
  const { t } = useTranslation();
  const { onClick } = useMainListItem();
  const [isMouseOver, setIsMouseOver] = useState(false);

  const streamRef = useRef<HTMLDivElement>(null);

  const onClickVod = useCallback(() => {
    if (item.isLive) {
      onClick(item.chatKey, `${item.vodId}`);
    } else {
      window.location.href = `${window.location.origin}${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`;
    }
  }, [link]);

  const onHandleShareModal = useCallback(() => {
    setIsShowSM(true);
    setTitle(item.title);
    if (item.isLive) {
      setLink(`${window.location.origin}${PAGE_URL.LIVE_DETAIL}/${item.vodId}`);
    } else {
      setLink(`${window.location.origin}${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`);
    }
  }, []);

  useEffect(() => {
    function handleStreamOver(e: MouseEvent): void {
      if (streamRef.current?.contains(e.target as Node) && !detectMobile()) {
        setIsMouseOver(true);
      } else {
        setIsMouseOver(false);
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
          <StreamMainPlayer
            url={setPlaybackUrl(item.playbackUrl, item.playToken)}
            thumbnail={item.thumbnail}
            isMouseOver={isMouseOver}
          />
          {!item.isLive && <STC.SmallTime isMouseOver={isMouseOver}>{item.streamLen}</STC.SmallTime>}
          <MainListItemInfo item={item} isMouseOver={isMouseOver} />
        </STC.StreamInnerWrapper>
        {item.isLive && <STC.SmallLiveTag>{t('common_live')}</STC.SmallLiveTag>}
      </STC.StreamWrapper>
    </STC.StreamItem>
  );
};

export default MainListItem;
