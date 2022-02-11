import React, { useEffect, useState } from 'react';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { IStreamListType } from '@type/streamType';
import userProfileImg from '@images/userProfile.png';
import useLiveFrameItem from './useLiveFrameItem';
import * as STC from './LiveFrameItem.style';

const LiveFrameItem = ({
  item,
  setCurrentStreamUrl,
  currentStreamUrl,
  onClickLive,
}: {
  item: IStreamListType;
  setCurrentStreamUrl: any;
  currentStreamUrl: string;
  onClickLive: (_: number) => void;
}) => {
  const [currentCheck, setCurrentCheck] = useState(false);
  const { handleOnClick } = useLiveFrameItem(item.vodId);

  return (
    <STC.Container
      onClick={() => {
        setCurrentStreamUrl(setPlaybackUrl(item.playbackUrl, item.playToken));
        handleOnClick();
        onClickLive(item.vodId);
      }}
    >
      <STC.ProfileImgDiv currentCheck={currentCheck}>
        <STC.ProfileImg src={item.profile === null ? userProfileImg : item.profile} />
      </STC.ProfileImgDiv>
      <STC.LiveDiv>
        <STC.LiveCircel />
        <STC.LiveTextDiv>LIVE</STC.LiveTextDiv>
      </STC.LiveDiv>
    </STC.Container>
  );
};

export default LiveFrameItem;
