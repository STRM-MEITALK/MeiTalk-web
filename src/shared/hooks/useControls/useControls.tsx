import { useState, useRef, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { FullScreenHandle } from 'react-full-screen';
import { useDispatch, useSelector } from 'react-redux';
import useInnerWidth from '@hooks/useInnerWidth';
import { RootState } from '@src/stores';
import {
  handleCaptionLang,
  handleIsPlay,
  handleIsStart,
  handleMuted,
  handlePlayed,
  handleSeeking,
  handleUseCaption,
  handleVolume,
} from '@slice/playerSlice';
import { sizes } from '@styles/media';

const useControls = ({
  playerWrapperRef,
  player,
  handle,
}: {
  playerWrapperRef: React.RefObject<HTMLDivElement>;
  player: React.RefObject<ReactPlayer>;
  handle: FullScreenHandle;
}) => {
  const dispatch = useDispatch();
  const { innerWidth } = useInnerWidth();

  const [isShow, setIsShow] = useState(false);
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowVolume, setIsShowVolume] = useState(false);
  const [captionArr, setCaptionArr] = useState<
    {
      timeStamp: string;
      JA: string;
      EN: string;
      RU: string;
      KO: string;
      ZH: string;
      ID: string;
    }[]
  >([]);

  const time = useRef(0);

  const settingBtnRef = useRef<HTMLImageElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const volumeMobileRef = useRef<HTMLDivElement>(null);
  const volumeBtnRef = useRef<HTMLImageElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const captionListRef = useRef<HTMLDivElement>(null);

  const { isStart, isPlay, played, duration, volume, muted, isFullScreen, useCaption, captionLang, caption, language } =
    useSelector(({ player, language }: RootState) => ({
      isStart: player.isStart,
      isPlay: player.isPlay,
      played: player.played,
      duration: player.duration,
      volume: player.volume,
      muted: player.muted,
      isFullScreen: player.isFullScreen,
      useCaption: player.useCaption,
      captionLang: player.captionLang,
      caption: player.caption,
      language: language.language,
    }));

  const handleSeekMouseDown = useCallback(
    (e: any) => {
      if (isShow) {
        dispatch(handleSeeking(true));
      }
    },
    [isShow],
  );

  const handleSeekMouseUp = useCallback(
    (e: any) => {
      if (isShow) {
        if (player.current) {
          cancelHidden(true);
          dispatch(handleSeeking(false));
          player.current.seekTo(parseFloat(e.target.value));
        }
      }
    },
    [isShow, player],
  );

  const handleSeekChange = useCallback(
    (e: any) => {
      if (isShow) {
        dispatch(handlePlayed(e.target.value));
        if (player.current) {
          player.current.seekTo(parseFloat(e.target.value));
        }
      }
    },
    [player, isShow],
  );

  const handlePause = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isShow) {
        if (isStart) {
          cancelHidden();
        } else {
          cancelHidden(true);
        }
        dispatch(handleIsPlay(!isStart));
        dispatch(handleIsStart(!isStart));
      }
    },
    [isShow, isStart],
  );

  const handleVolumeChange = useCallback((e: any) => {
    if (parseFloat(e.target.value) > 0) {
      dispatch(handleMuted(false));
    } else if (parseFloat(e.target.value) === 0) {
      dispatch(handleMuted(true));
    }

    localStorage.setItem('volume', e.target.value);
    dispatch(handleVolume(parseFloat(e.target.value)));
  }, []);

  const handleToogleMuted = useCallback(() => {
    if (isPlay) {
      cancelHidden(true);
    }

    if (isShowVolume) {
      if (muted) {
        let myVolume: number = parseFloat(localStorage.getItem('volume') ?? '0.5');
        myVolume = myVolume === 0 ? 0.5 : myVolume;
        dispatch(handleVolume(myVolume));
        dispatch(handleMuted(false));
      } else {
        dispatch(handleVolume(0));
        dispatch(handleMuted(true));
      }
    } else {
      setIsShowVolume(true);
    }
  }, [isPlay, isShowVolume, muted]);

  const handleSeekPre = useCallback(() => {
    if (isShow) {
      if (player.current) {
        if (isPlay) {
          cancelHidden(true);
        }
        const move = 1 / (duration / (duration * played - 10));
        player.current.seekTo(move < 0 ? 0 : move);
      }
    }
  }, [player, isShow, isPlay, duration, played]);

  const handleSeekNext = useCallback(() => {
    if (isShow) {
      if (player.current) {
        if (isPlay) {
          cancelHidden(true);
        }
        const move = 1 / (duration / (duration * played + 10));
        player.current.seekTo(move >= 1 ? 0.999999 : move);
      }
    }
  }, [player, isShow, isPlay, duration, played]);

  const onClickSetting = useCallback(() => {
    cancelHidden();
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);

  const onClickScreen = useCallback(() => {
    setIsShow(true);
  }, []);

  const onLeaveScreen = useCallback(() => {
    if (!isShowSetting && isPlay) {
      setIsShow(false);
      setIsShowVolume(false);
    }
  }, [isShowSetting, isPlay]);

  const changeScreen = useCallback(() => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const playerRef = player;
      const HTML5VideoElement = playerRef.current?.getInternalPlayer();

      if (
        HTML5VideoElement?.webkitSupportsPresentationMode &&
        typeof HTML5VideoElement.webkitSetPresentationMode === 'function'
      ) {
        HTML5VideoElement.webkitSetPresentationMode(
          HTML5VideoElement.webkitPresentationMode === 'fullscreen' ? 'inline' : 'fullscreen',
        );
      }
    } else {
      if (isFullScreen) {
        handle.exit();
      } else {
        handle.enter();
        if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          screen.orientation.lock('landscape');
        }
      }
    }
  }, [isFullScreen]);

  const setHiddenTime = () => {
    if (innerWidth <= sizes.tablet || isFullScreen) {
      if (isShow) {
        time.current = window.setTimeout(() => {
          setIsShowVolume(false);
          setIsShow(false);
        }, 5000);
      }
    }
  };

  const cancelHidden = (resetAgain?: boolean) => {
    clearTimeout(time.current);

    if (resetAgain) {
      setHiddenTime();
    }
  };

  useEffect(() => {
    if (captionArr.length > 0 && useCaption) {
      if (captionRef.current) {
        captionRef.current.scrollTop = 0;
      }
    }
  }, [captionArr, useCaption]);

  useEffect(() => {
    if (captionLang) {
      localStorage.setItem('captionLang', captionLang);
    }
  }, [captionLang]);

  useEffect(() => {
    const lUseCaption = localStorage.getItem('useCaption');
    const lUaptionLang = localStorage.getItem('captionLang');
    if (lUseCaption === 'true') {
      dispatch(handleUseCaption(lUseCaption === 'true'));
      dispatch(handleCaptionLang(lUaptionLang ?? language.toUpperCase()));
    }
  }, [language]);

  useEffect(() => {
    if (caption) {
      const newArr = [];
      const keys = Object.keys(caption);
      for (let i = 0; i < keys.length; i += 1) {
        newArr.push({
          timeStamp: keys[i],
          ...caption[keys[i]],
        });
      }
      setCaptionArr(newArr);
    }
  }, [caption]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (innerWidth <= sizes.tablet) {
        if (!volumeMobileRef.current?.contains(e.target as Node)) {
          setIsShowVolume(false);
        }
      } else {
        if (!playerWrapperRef?.current?.contains(e.target as Node)) {
          setIsShowSetting(false);
          if (isPlay) {
            setIsShow(false);
          }
        }

        if (!volumeRef.current?.contains(e.target as Node) && !volumeBtnRef.current?.contains(e.target as Node)) {
          setIsShowVolume(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPlay, volumeRef, playerWrapperRef]);

  useEffect(() => {
    if (!isPlay) {
      setIsShow(true);
    }
  }, [isPlay]);

  useEffect(() => {
    setHiddenTime();

    return () => {
      clearInterval(time.current);
    };
  }, [isShow, isFullScreen]);

  return {
    settingBtnRef,
    volumeRef,
    volumeBtnRef,
    volumeMobileRef,
    captionRef,
    captionListRef,
    isStart,
    isShow,
    isShowSetting,
    isPlay,
    played,
    duration,
    volume,
    muted,
    isShowVolume,
    isFullScreen,
    useCaption,
    captionLang,
    captionArr,
    onClickScreen,
    onClickSetting,
    onLeaveScreen,
    changeScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    handlePause,
    handleVolumeChange,
    handleSeekPre,
    handleSeekNext,
    handleToogleMuted,
    setIsShowSetting,
    setIsShow,
  };
};

export default useControls;
