import React from 'react';
import { IStreamListType } from '@type/streamType';
import mainMoreImg from '@images/mainMore.png';
import useLiveFrame from './useLiveFrame';
import LiveFrameItem from './LiveFrameItem';
import * as STC from './LiveFrame.style';

interface ILiveFrame {
  isMobile: boolean;
  visibleLiveList: boolean;
  currentStreamUrl: string;
  setCurrentStreamUrl: (_: string) => void;
  onClickLive: (_: number) => void;
  liveTabScroll: () => void;
}

const LiveFrame = ({
  isMobile,
  visibleLiveList,
  currentStreamUrl,
  setCurrentStreamUrl,
  onClickLive,
  liveTabScroll,
}: ILiveFrame) => {
  const { liveFrameList } = useLiveFrame();

  return (
    <STC.LiveFrameWrapper visibleLiveList={visibleLiveList || isMobile}>
      {liveFrameList.map((item: IStreamListType, i) => {
        if (isMobile) {
          return (
            <LiveFrameItem
              key={`frame_${item.vodId}`}
              item={item}
              setCurrentStreamUrl={setCurrentStreamUrl}
              currentStreamUrl={currentStreamUrl}
              onClickLive={onClickLive}
            />
          );
        } else {
          return (
            i < 8 && (
              <LiveFrameItem
                key={`frame_${item.vodId}`}
                item={item}
                setCurrentStreamUrl={setCurrentStreamUrl}
                currentStreamUrl={currentStreamUrl}
                onClickLive={onClickLive}
              />
            )
          );
        }
      })}
      {liveFrameList.length >= 8 && (
        <STC.MoreDiv
          onClick={() => {
            liveTabScroll();
          }}
        >
          <STC.MoreImg src={mainMoreImg} />
        </STC.MoreDiv>
      )}
    </STC.LiveFrameWrapper>
  );
};

export default LiveFrame;
