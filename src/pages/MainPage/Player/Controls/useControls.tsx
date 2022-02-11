import { useState, useRef, useEffect, useCallback } from 'react';
import ReactPlayer from 'react-player';
import { FullScreenHandle } from 'react-full-screen';
import { useDispatch, useSelector } from 'react-redux';
import useInnerWidth from '@hooks/useInnerWidth';
import { RootState } from '@src/stores';
import { handleMuted, handlePlayed, handleSeeking, handleVolume } from '@slice/playerSlice';
import { sizes } from '@styles/media';

const useControls = ({
  player,
  handle,
  visible,
  setVisibleLiveList,
}: {
  player: React.RefObject<ReactPlayer>;
  handle: FullScreenHandle;
  visible: boolean;
  setVisibleLiveList: (_: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const { innerWidth } = useInnerWidth();
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowVolume, setIsShowVolume] = useState(false);

  const time = useRef(0);
  const settingBtnRef = useRef<HTMLImageElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const volumeMobileRef = useRef<HTMLDivElement>(null);
  const volumeBtnRef = useRef<HTMLImageElement>(null);

  const { isPlay, played, volume, muted, isFullScreen } = useSelector(({ player }: RootState) => ({
    isPlay: player.isPlay,
    played: player.played,
    volume: player.volume,
    muted: player.muted,
    isFullScreen: player.isFullScreen,
  }));

  const handleSeekMouseDown = useCallback(
    (e: any) => {
      if (visible) {
        dispatch(handleSeeking(true));
      }
    },
    [visible],
  );

  const handleSeekMouseUp = useCallback(
    (e: any) => {
      if (visible) {
        if (player.current) {
          cancelHidden(true);
          dispatch(handleSeeking(false));
          player.current.seekTo(parseFloat(e.target.value));
        }
      }
    },
    [visible, player],
  );

  const handleSeekChange = useCallback(
    (e: any) => {
      if (visible) {
        dispatch(handlePlayed(e.target.value));
      }
    },
    [visible],
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

  const onClickSetting = useCallback(() => {
    cancelHidden();
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);

  const changeScreen = useCallback(() => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
  }, [isFullScreen]);

  const setHiddenTime = () => {
    if (innerWidth <= sizes.tablet) {
      if (visible) {
        time.current = window.setTimeout(() => {
          setIsShowVolume(false);
          setVisibleLiveList(false);
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
    function handleClickOutside(e: MouseEvent): void {
      if (innerWidth <= sizes.tablet) {
        if (!volumeMobileRef.current?.contains(e.target as Node)) {
          setIsShowVolume(false);
        }
      } else {
        if (!volumeRef.current?.contains(e.target as Node) && !volumeBtnRef.current?.contains(e.target as Node)) {
          setIsShowVolume(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [volumeRef]);

  useEffect(() => {
    setHiddenTime();

    return () => {
      clearInterval(time.current);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      setIsShowSetting(false);
    }
  }, [visible]);

  return {
    settingBtnRef,
    volumeRef,
    volumeBtnRef,
    volumeMobileRef,
    isShowSetting,
    played,
    volume,
    muted,
    isShowVolume,
    isFullScreen,
    onClickSetting,
    changeScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    handleVolumeChange,
    handleToogleMuted,
    setIsShowSetting,
  };
};

export default useControls;
