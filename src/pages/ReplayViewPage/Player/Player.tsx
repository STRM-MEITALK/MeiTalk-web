import React from 'react';
import ReactPlayer from 'react-player';
import { FullScreen } from 'react-full-screen';
import usePlayer from './usePlayer';
import Controls from './Controls';
import * as STC from './Player.style';

const Player = ({ showComment }: { showComment: boolean }) => {
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
    captionObj,
    onProgress,
    onDuration,
    onEnded,
    onStart,
    onPause,
    onBuffer,
    onBufferEnd,
    onChangeFullScreen,
  } = usePlayer();

  return (
    <FullScreen className="fullscreen" handle={handle} onChange={onChangeFullScreen}>
      <STC.PlayerWrapper showComment={showComment} isFullScreen={isFullScreen} ref={playerWrapperRef}>
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
          autoPlay={true}
          playing={isPlay}
          muted={muted}
          volume={volume}
          playbackRate={speed}
          playsinline
        />
        <Controls playerWrapperRef={playerWrapperRef} player={ref} handle={handle} captionObj={captionObj} />
        {isBuffer && isPlay && <STC.Buffer />}
      </STC.PlayerWrapper>
    </FullScreen>
  );
};

export default Player;
