import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import * as STC from './StreamPlayer.style';

const StreamPlayer = ({
  url,
  thumbnail,
  isMouseOver,
}: {
  url: string;
  thumbnail: string | null;
  isMouseOver: boolean;
}) => {
  const [isReady, setIsReady] = useState(false);
  const [light, setLight] = useState<boolean | string>(true);
  const ref = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (isMouseOver) {
      setLight(false);
    } else {
      setLight(thumbnail === null ? true : thumbnail);

      if (isReady && ref.current) {
        ref.current.seekTo(0);
      }
    }
  }, [isMouseOver]);

  return (
    <STC.Container thumbnail={thumbnail}>
      <ReactPlayer
        ref={ref}
        url={url}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls={false}
        playing={isMouseOver}
        volume={0}
        onReady={() => setIsReady(true)}
        light={light}
        playIcon={<span />}
        fallback={thumbnail !== null ? <img src={thumbnail} alt="" /> : <span />}
        playsinline
      />
    </STC.Container>
  );
};

export default StreamPlayer;
