import { useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFullScreenHandle } from 'react-full-screen';
import ReactPlayer from 'react-player';
import { RootState } from '@src/stores';
import { handleDuration, handleIsPlay, handlePlayed, handleIsFullScreen } from '@slice/playerSlice';

const usePlayer = () => {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  let load = false;
  const [isShowChat, setIsShowChat] = useState(true);
  const ref = useRef<ReactPlayer>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

  const { isPlay, seeking, volume, muted, speed } = useSelector(({ player }: RootState) => ({
    isPlay: player.isPlay,
    seeking: player.seeking,
    volume: player.volume,
    muted: player.muted,
    speed: player.speed,
  }));

  const onProgress = useCallback(
    (e) => {
      if (!seeking) {
        if (e.played === 0) {
          dispatch(handleIsPlay(false));
        }

        dispatch(handlePlayed(e.played));
      }
    },
    [seeking],
  );

  const onCanPlay = useCallback(() => {
    if (!load) {
      load = true;
      ref.current?.seekTo(0.9);
    }
  }, []);

  const onDuration = useCallback((duration) => {
    dispatch(handleDuration(duration));
  }, []);

  const onEnded = useCallback(() => {
    dispatch(handleIsPlay(false));
  }, []);

  const onChangeFullScreen = useCallback((state) => {
    dispatch(handleIsFullScreen(state));
  }, []);

  return {
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
  };
};

export default usePlayer;
