import React, { useEffect, useRef, useState, RefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInnerWidth from '@hooks/useInnerWidth';
import { RootState } from '@src/stores';
import { handleCaptionLang, handleQuality, handleSpeed, handleUseCaption, updateCaption } from '@slice/playerSlice';
import { ICaptionLang } from '@type/playerType';
import { sizes } from '@styles/media';

const useSettingModal = ({
  settingBtnRef,
  isShowSetting,
  isLive,
  setIsShowSetting,
}: {
  settingBtnRef: RefObject<HTMLImageElement>;
  isShowSetting: boolean;
  isLive: boolean;
  setIsShowSetting: (_: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const { innerWidth } = useInnerWidth();
  const [selected, setSelected] = useState<string | null>(null);
  const [qualityOptions, setQualityOptions] = useState<{ value: string; label: string }[]>([]);

  const settingRef = useRef<HTMLDivElement>(null);

  const { speed, quality, useCaption, captionLang, replayVodUrls, liveVodUrls, language } = useSelector(
    ({ player, replayView, liveView, language }: RootState) => ({
      speed: player.speed,
      quality: player.quality,
      useCaption: player.useCaption,
      captionLang: player.captionLang,
      replayVodUrls: replayView.replayViewInfo.data.vodUrls,
      liveVodUrls: liveView.liveViewInfo.data.vodUrls,
      language: language.language,
    }),
  );

  const onHandleSelected = (text: string | null) => {
    setSelected(text);
  };

  const onHandleCaptionLang = (text: ICaptionLang) => {
    dispatch(handleUseCaption(true));
    dispatch(handleCaptionLang(text));

    localStorage.setItem('useCaption', 'true');
  };

  const onHandleSpeed = (num: number) => {
    dispatch(handleSpeed(num));
  };

  const onHandleQuality = (url: string) => {
    dispatch(handleQuality(url));
  };

  const onInitLang = () => {
    if (useCaption) {
      dispatch(handleCaptionLang(null));
    } else {
      const lCaptionLang = localStorage.getItem('captionLang');
      dispatch(handleCaptionLang(lCaptionLang ?? language.toUpperCase()));
    }

    dispatch(handleUseCaption(!useCaption));
    localStorage.setItem('useCaption', (!useCaption).toString());
  };

  useEffect(() => {
    if (isLive) {
      const qualityArr = Object.entries(liveVodUrls)
        .map((url) => {
          const label = url[0].replace('_', '').split('p')[0];
          return {
            value: url[0],
            label: label === 'auto' ? label : `${label}p`,
          };
        })
        .sort((a, b) => {
          return a > b ? 1 : -1;
        });

      setQualityOptions(qualityArr);
    } else {
      const qualityArr = Object.entries(replayVodUrls)
        .map((url) => {
          const label = url[0].replace('_', '').split('p')[0];
          return {
            value: url[0],
            label: label === 'auto' ? label : `${label}p`,
          };
        })
        .sort((a, b) => {
          return a > b ? 1 : -1;
        });

      setQualityOptions(qualityArr);
    }
  }, [replayVodUrls, liveVodUrls, isLive]);

  useEffect(() => {
    if (!isShowSetting) {
      setSelected(null);
    }
  }, [isShowSetting]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (innerWidth > sizes.tablet) {
        if (!settingRef.current?.contains(e.target as Node) && !settingBtnRef.current?.contains(e.target as Node)) {
          setIsShowSetting(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingRef, settingBtnRef]);

  return {
    settingRef,
    selected,
    speed,
    quality,
    useCaption,
    captionLang,
    qualityOptions,
    onHandleSelected,
    onHandleCaptionLang,
    onHandleSpeed,
    onInitLang,
    onHandleQuality,
  };
};

export default useSettingModal;
