import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import preImg from '@images/pre.png';
import useSettingModal from './useSettingModal';
import * as STC from './SettingModal.style';

const SettingModal = ({
  settingBtnRef,
  isShowSetting,
  setIsShowSetting,
  isLive,
}: {
  settingBtnRef: RefObject<HTMLImageElement>;
  isShowSetting: boolean;
  setIsShowSetting: (_: boolean) => void;
  isLive: boolean;
}) => {
  const { t } = useTranslation();
  const {
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
  } = useSettingModal({
    settingBtnRef,
    isShowSetting,
    isLive,
    setIsShowSetting,
  });

  return (
    <STC.SettingModal ref={settingRef}>
      {selected === null && (
        <STC.SettingWrapepr>
          <div className="row" onClick={() => onHandleSelected('SPEED')}>
            <p className="title">{t('player_speed')}</p>
            <p className="type">x{speed}</p>
          </div>
          <div className="row" onClick={() => onHandleSelected('QUALITY')}>
            <p className="title">{t('player_quality')}</p>
            <p className="type">{quality === 'auto' ? quality : `${quality.replace('_', '').split('p')[0]}p`}</p>
          </div>
          {isLive && (
            <div className="row" onClick={() => onHandleSelected('CAPTION')}>
              <p className="title">{t('player_caption')}</p>
              <p className="type">{useCaption ? t('common_on') : t('common_off')}</p>
            </div>
          )}
        </STC.SettingWrapepr>
      )}
      {selected === 'SPEED' && (
        <STC.SpeedSetting>
          <div className="row">
            <p className="title" onClick={() => onHandleSelected(null)}>
              <img src={preImg} alt="" />
              {t('player_speed')}
            </p>
          </div>
          <div className="row">
            <p className={speed === 0.25 ? 'selected' : ''} onClick={() => onHandleSpeed(0.25)}>
              0.25
            </p>
            <p className={speed === 0.5 ? 'selected tc' : 'tc'} onClick={() => onHandleSpeed(0.5)}>
              0.5
            </p>
            <p className={speed === 0.75 ? 'selected tr' : 'tr'} onClick={() => onHandleSpeed(0.75)}>
              0.75
            </p>
          </div>
          <div className="row">
            <p className={speed === 1 ? 'selected ' : ''} onClick={() => onHandleSpeed(1)}>
              1
            </p>
            <p className={speed === 1.25 ? 'selected tc' : 'tc'} onClick={() => onHandleSpeed(1.25)}>
              1.25
            </p>
            <p className={speed === 1.5 ? 'selected tr' : 'tr'} onClick={() => onHandleSpeed(1.5)}>
              1.5
            </p>
          </div>
          <div className="row">
            <p className={speed === 1.75 ? 'selected' : ''} onClick={() => onHandleSpeed(1.75)}>
              1.75
            </p>
            <p className={speed === 2 ? 'selected tc' : 'tc'} onClick={() => onHandleSpeed(2)}>
              2
            </p>
          </div>
        </STC.SpeedSetting>
      )}
      {selected === 'QUALITY' && (
        <STC.QualitySetting>
          <div className="row">
            <p className="title" onClick={() => onHandleSelected(null)}>
              <img src={preImg} alt="" />
              {t('player_quality')}
            </p>
          </div>
          {qualityOptions?.map((item, idx) => {
            let textAlign = '';
            if (idx % 3 === 1) {
              textAlign = 'tc';
            } else if (idx % 3 === 2) {
              textAlign = 'tr';
            }

            return (
              <STC.OptionItem
                key={item.value}
                className={quality === item.value ? `selected ${textAlign}` : `${textAlign}`}
                onClick={() => onHandleQuality(item.value)}
              >
                {item.label}
              </STC.OptionItem>
            );
          })}
        </STC.QualitySetting>
      )}
      {isLive && selected === 'CAPTION' && (
        <STC.CaptionSetting>
          <div className="row">
            <p className="title" onClick={() => onHandleSelected(null)}>
              <img src={preImg} alt="" />
              {t('player_caption')}
            </p>
            <p onClick={() => onInitLang()} className={useCaption ? 'selected' : ''}>
              {useCaption ? t('common_on') : t('common_off')}
            </p>
          </div>
          <div className="row">
            <p className={captionLang === 'JA' ? 'selected' : ''} onClick={() => onHandleCaptionLang('JA')}>
              日本語
            </p>
            <p className={captionLang === 'EN' ? 'selected' : ''} onClick={() => onHandleCaptionLang('EN')}>
              English
            </p>
            <p className={captionLang === 'RU' ? 'selected' : ''} onClick={() => onHandleCaptionLang('RU')}>
              Русский
            </p>
          </div>
          <div className="row">
            <p className={captionLang === 'KO' ? 'selected' : ''} onClick={() => onHandleCaptionLang('KO')}>
              한국어
            </p>
            <p className={captionLang === 'ZH' ? 'selected' : ''} onClick={() => onHandleCaptionLang('ZH')}>
              中文
            </p>
            <p className={captionLang === 'ID' ? 'selected' : ''} onClick={() => onHandleCaptionLang('ID')}>
              Indonesia
            </p>
          </div>
        </STC.CaptionSetting>
      )}
    </STC.SettingModal>
  );
};

export default SettingModal;
