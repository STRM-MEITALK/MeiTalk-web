import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFullScreenHandle } from 'react-full-screen';
import ReactPlayer from 'react-player';
import axios from 'axios';
import { RootState } from '@src/stores';
import {
  handleIsStart,
  handleDuration,
  handleIsPlay,
  handlePlayed,
  handleIsFullScreen,
  handleMuted,
  handleVolume,
  handleIsBuffer,
} from '@slice/playerSlice';

const usePlayer = function () {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();
  const [url, setUrl] = useState<string>('');
  const [playedTemp, setPlayedTemp] = useState(0);
  const [reload, setReload] = useState(false);
  const [captionObj, setCaptionObj] = useState<Record<string, { text: string; timeStamp: string }[]> | null>(null);

  const ref = useRef<ReactPlayer>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

  const { isPlay, seeking, volume, muted, speed, isBuffer, quality, played, isFullScreen, captionLang, getVideoInfo } =
    useSelector(({ player, studio }: RootState) => ({
      isPlay: player.isPlay,
      seeking: player.seeking,
      volume: player.volume,
      muted: player.muted,
      speed: player.speed,
      isBuffer: player.isBuffer,
      quality: player.quality,
      played: player.played,
      isFullScreen: player.isFullScreen,
      captionLang: player.captionLang,
      getVideoInfo: studio.getVideoInfo.data,
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

  const onStart = useCallback(() => {
    dispatch(handleIsStart(true));
    dispatch(handleIsPlay(true));
  }, [isPlay]);

  const onPause = useCallback(() => {
    dispatch(handleIsStart(false));
    dispatch(handleIsPlay(false));
  }, [isPlay]);

  const onDuration = useCallback(
    (duration) => {
      dispatch(handleDuration(duration));
      setReload(!reload);
    },
    [reload],
  );

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

  useEffect(() => {
    if (getVideoInfo.captions && captionLang && getVideoInfo.captions[captionLang]) {
      if (captionObj === null || !captionObj[captionLang]) {
        axios
          .get(getVideoInfo.captions[captionLang])
          .then((res) => {
            if (res.status === 200) {
              setCaptionObj({ ...captionObj, [captionLang]: res.data });
            }
          })
          .catch((e) => {
          });
      }
    }
  }, [getVideoInfo.captions, captionLang]);

  useEffect(() => {
    if (playedTemp !== 0) {
      ref.current?.seekTo(playedTemp);
      setPlayedTemp(0);
    }
  }, [reload]);

  useEffect(() => {
    setPlayedTemp(played);
    setUrl(getVideoInfo.vodUrls[quality]);
  }, [getVideoInfo.vodUrls, quality]);

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
  };
};

export default usePlayer;
