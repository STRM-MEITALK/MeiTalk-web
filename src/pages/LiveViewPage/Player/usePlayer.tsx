import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFullScreenHandle } from 'react-full-screen';
import moment from 'moment';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { setTimeZone } from '@lib/setTimeZone';
import { RootState } from '@src/stores';
import {
  handleIsStart,
  handleDuration,
  handleIsPlay,
  handlePlayed,
  handleIsFullScreen,
  handleIsBuffer,
  handleMuted,
  handleVolume,
} from '@slice/playerSlice';

const usePlayer = () => {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  let load = false;
  const [url, setUrl] = useState<string>('');
  const [diffSecond, setDiffSecond] = useState<number | null>(null);
  const ref = useRef<any>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

  const { liveViewInfo, isFullScreen, isStart, isPlay, seeking, volume, muted, speed, isBuffer } = useSelector(
    ({ liveView, player }: RootState) => ({
      liveViewInfo: liveView.liveViewInfo.data,
      isFullScreen: player.isFullScreen,
      isStart: player.isStart,
      isPlay: player.isPlay,
      seeking: player.seeking,
      volume: player.volume,
      muted: player.muted,
      speed: player.speed,
      isBuffer: player.isBuffer,
    }),
  );

  const onProgress = useCallback(
    (e) => {
      if (!seeking) {
        if (!isStart || e.played === 0) {
          dispatch(handleIsPlay(false));
        }

        dispatch(handlePlayed(e.played));
      }
    },
    [seeking, isStart],
  );

  const onStart = useCallback(() => {
    dispatch(handleIsStart(true));
    dispatch(handleIsPlay(true));
    generateDiffSecond();
  }, [isPlay, liveViewInfo.streamTime]);

  const onPause = useCallback(() => {
    dispatch(handleIsStart(false));
    dispatch(handleIsPlay(false));
  }, [isPlay]);

  const onDuration = useCallback((duration) => {
    dispatch(handleDuration(duration));
  }, []);

  const onEnded = useCallback(() => {
    dispatch(handleIsPlay(false));
  }, []);

  const onChangeFullScreen = useCallback((state) => {
    dispatch(handleIsFullScreen(state));
  }, []);

  const onBuffer = useCallback(() => {
    dispatch(handleIsBuffer(true));
  }, []);

  const onBufferEnd = useCallback(() => {
    dispatch(handleIsBuffer(false));
  }, []);

  const onCanPlay = useCallback(() => {
    if (!load) {
      load = true;
      ref.current?.seekTo(0.8);
    }
  }, []);

  const generateDiffSecond = () => {
    const diff = moment.duration(setTimeZone(new Date()).diff(setTimeZone(liveViewInfo.streamTime ?? '')));
    setDiffSecond(diff.asSeconds());
  };

  useEffect(() => {
    setUrl(setPlaybackUrl(liveViewInfo.playbackUrl, liveViewInfo.playToken));
  }, [liveViewInfo.playbackUrl, liveViewInfo.playToken]);

  useEffect(() => {
    if (ref?.current && diffSecond) {
      if (diffSecond < 40) {
        setTimeout(() => {
          ref?.current?.player.player.hls.recoverMediaError();
        }, 5000);
      }
    }
  }, [diffSecond]);

  useEffect(() => {
    let myVolume: number = parseFloat(localStorage.getItem('volume') ?? '0.5');
    myVolume = myVolume === 0 ? 0.5 : myVolume;
    dispatch(handleMuted(false));
    dispatch(handleVolume(myVolume));
  }, []);

  return {
    playerWrapperRef,
    handle,
    url,
    ref,
    isStart,
    isPlay,
    volume,
    muted,
    speed,
    isFullScreen,
    isBuffer,
    onProgress,
    onDuration,
    onEnded,
    onStart,
    onPause,
    onBuffer,
    onBufferEnd,
    onCanPlay,
    onChangeFullScreen,
  };
};

export default usePlayer;
