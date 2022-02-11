import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/stores';
import { handleCaptionLang, handleSpeed, handleUseCaption, handleQuality } from '@slice/playerSlice';
import { ICaptionLang } from '@type/playerType';
import { sizes } from '@src/assets/styles/media';

const useSettingMobileModal = ({
  isLive,
  isShowSetting,
  setIsShowSetting,
  setIsShow,
}: {
  isLive: boolean;
  isShowSetting: boolean;
  setIsShowSetting: (_: boolean) => void;
  setIsShow: (_: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const speedOption = [
    {
      value: 0.25,
      label: 'x0.25',
    },
    {
      value: 0.5,
      label: 'x0.5',
    },
    {
      value: 0.75,
      label: 'x0.75',
    },
    {
      value: 1,
      label: 'x1.0',
    },
    {
      value: 1.25,
      label: 'x1.25',
    },
    {
      value: 1.5,
      label: 'x1.5',
    },
    {
      value: 1.75,
      label: 'x1.75',
    },
    {
      value: 2,
      label: 'x2',
    },
  ];

  const captionOption = [
    {
      value: null,
      label: 'OFF',
    },
    {
      value: 'EN',
      label: 'English',
    },
    {
      value: 'KO',
      label: '한국어',
    },
    {
      value: 'JA',
      label: '日本語',
    },
    {
      value: 'ZH',
      label: '中文',
    },
    {
      value: 'RU',
      label: 'Русский',
    },
    {
      value: 'ID',
      label: 'Indonesia',
    },
  ];

  const { speed, useCaption, captionLang, replayVodUrls, liveVodUrls, scrollY, language } = useSelector(
    ({ player, replayView, liveView, globalModal, language }: RootState) => ({
      speed: player.speed,
      useCaption: player.useCaption,
      captionLang: player.captionLang,
      replayVodUrls: replayView.replayViewInfo.data.vodUrls,
      liveVodUrls: liveView.liveViewInfo.data.vodUrls,
      scrollY: globalModal.scrollY,
      language: language.language,
    }),
  );

  const [speedTemp, setSpeedTemp] = useState<number>(speed);
  const [qualityTemp, setQualityTemp] = useState<string>('auto');
  const [captionTemp, setCaptionTemp] = useState<ICaptionLang>(null);
  const [qualityOptions, setQualityOptions] = useState<{ value: string; label: string }[]>([]);

  const onHandleSpeed = (num: number) => {
    setSpeedTemp(num);
  };

  const onHandleQuality = (str: string) => {
    setQualityTemp(str);
  };

  const onHandleCaption = (lang: ICaptionLang) => {
    setCaptionTemp(lang);
  };

  const onSaveSetting = () => {
    dispatch(handleSpeed(speedTemp));
    dispatch(handleQuality(qualityTemp));

    if (captionTemp) {
      dispatch(handleUseCaption(true));
      dispatch(handleCaptionLang(captionTemp));
      localStorage.setItem('useCaption', 'true');
    } else {
      dispatch(handleUseCaption(false));
      dispatch(handleCaptionLang(null));
      localStorage.setItem('useCaption', 'false');
    }

    setIsShow(false);
    setIsShowSetting(false);
  };

  useEffect(() => {
    setCaptionTemp(useCaption ? captionLang : null);
  }, [useCaption, captionLang]);

  useEffect(() => {
    const lUseCaption = localStorage.getItem('useCaption');
    const lUaptionLang = localStorage.getItem('captionLang');
    if (lUseCaption === 'true') {
      dispatch(handleUseCaption(lUseCaption === 'true'));
      dispatch(handleCaptionLang(lUaptionLang ?? language.toUpperCase()));
    }
  }, [language]);

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
    if (window.innerWidth <= sizes.tablet && isShowSetting) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isShowSetting]);

  return {
    speedOption,
    speedTemp,
    qualityTemp,
    captionOption,
    captionTemp,
    qualityOptions,
    onHandleSpeed,
    onHandleQuality,
    onHandleCaption,
    onSaveSetting,
  };
};

export default useSettingMobileModal;
