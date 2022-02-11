import React, { useRef } from 'react';
import { FullScreen } from 'react-full-screen';
import ReactPlayer from 'react-player';
import usePlayer from './usePlayer';
import Controls from './Controls';
import * as STC from './Player.style';

const Player = ({ showChat }: { showChat: boolean }) => {
  const {
    playerWrapperRef,
    handle,
    url,
    ref,
    isPlay,
    volume,
    muted,
    speed,
    isBuffer,
    isFullScreen,
    onProgress,
    onDuration,
    onEnded,
    onStart,
    onPause,
    onBuffer,
    onBufferEnd,
    onCanPlay,
    onChangeFullScreen,
  } = usePlayer();

  return (
    <FullScreen className="fullscreen" handle={handle} onChange={onChangeFullScreen}>
      <STC.PlayerWrapper ref={playerWrapperRef} isFullScreen={isFullScreen} showChat={showChat}>
        <ReactPlayer
          ref={ref}
          url={url}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, transition: '0.6s', background: 'black' }}
          onProgress={onProgress}
          onDuration={onDuration}
          onEnded={onEnded}
          onStart={onStart}
          onPause={onPause}
          onBuffer={onBuffer}
          onBufferEnd={onBufferEnd}
          onCanPlay={onCanPlay}
          autoPlay={true}
          playing={isPlay}
          muted={muted}
          volume={volume}
          playbackRate={speed}
          playsinline
        />
        <Controls playerWrapperRef={playerWrapperRef} player={ref} handle={handle} />
        {isBuffer && isPlay && <STC.Buffer />}
      </STC.PlayerWrapper>
    </FullScreen>
  );
};

export default Player;
