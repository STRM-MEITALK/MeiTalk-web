import React, { useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import useStreamPlayer from './useStreamPlayer';
import Controls from './Controls';
import * as STC from './StreamPlayer.style';

const StreamPlayer = function () {
  const {
    url,
    isPlay,
    played,
    ref,
    playback,
    handlePlay,
    onDuration,
    setPlayed,
    handleProgress,
    handleReadyPlay,
    onCanPlay,
  } = useStreamPlayer();
  return (
    <STC.PlayerWrapper isFullScreen={false}>
      <ReactPlayer
        ref={ref}
        url={playback}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, transition: '0.6s', background: 'black' }}
        onReady={() => {
          handlePlay();
        }}
        onProgress={handleProgress}
        onDuration={onDuration}
        onStart={() => {
          if (ref.current) {
            handleReadyPlay();
          }
        }}
        onCanPlay={onCanPlay}
        autoPlay={true}
        muted={true}
        playing={isPlay}
      />
    </STC.PlayerWrapper>
  );
};

export default StreamPlayer;
