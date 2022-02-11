/* eslint-disable import/newline-after-import */

import React from 'react';
import ReactPlayer from 'react-player';
import { FullScreen } from 'react-full-screen';
import motionVideo from '../motionVideo.mp4';
import usePlayer from './usePlayer';
import useMainPage from '../useMainPage';
import Chatting from '../Chatting';
import * as STC from './Player.style';
import { IPlayerProps } from '../MainType';
const Player = ({ currentStreamUrl, clickMainLive, visibleLiveList, setVisibleLiveList }: IPlayerProps) => {
  const {
    playerWrapperRef,
    handle,
    ref,
    isPlay,
    volume,
    muted,
    speed,
    isShowChat,
    onProgress,
    onCanPlay,
    onDuration,
    onEnded,
    onChangeFullScreen,
  } = usePlayer();
  const { isLiveFinish } = useMainPage();

  return (
    <FullScreen handle={handle} onChange={onChangeFullScreen}>
      <STC.PlayerWrapper>
        <ReactPlayer
          ref={ref}
          url={currentStreamUrl}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: isLiveFinish || currentStreamUrl === motionVideo ? '-10%' : 0,
            left: 0,
            transition: '0.6s',
            background: 'black',
          }}
          onProgress={onProgress}
          onCanPlay={onCanPlay}
          onDuration={onDuration}
          onEnded={onEnded}
          autoPlay={true}
          playing={isPlay}
          muted={muted}
          volume={volume}
          playbackRate={speed}
          playsinline
          loop
        />
        {clickMainLive && <Chatting isShowChat={isShowChat} />}
      </STC.PlayerWrapper>
    </FullScreen>
  );
};

export default Player;
