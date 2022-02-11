import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomOptions from '@components/CustomOptions';
import Button from '@components/Button';
import useSettingMobileModal from './useSettingMobileModal';
import * as STC from './SettingMobileModal.style';

const SettingMobileModal = ({
  isShowSetting,
  setIsShowSetting,
  setIsShow,
  isLive,
}: {
  isShowSetting: boolean;
  setIsShowSetting: (_: boolean) => void;
  setIsShow: (_: boolean) => void;
  isLive: boolean;
}) => {
  const { t } = useTranslation();
  const {
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
  } = useSettingMobileModal({
    isLive,
    isShowSetting,
    setIsShowSetting,
    setIsShow,
  });

  return (
    <STC.SettingModal>
      <STC.Modal>
        <STC.Title>{t('player_settings')}</STC.Title>
        <STC.Content>
          <STC.OptionWrapper>
            <STC.OptionTitle>{t('player_speed')}</STC.OptionTitle>
            <CustomOptions options={speedOption} selected={speedTemp} onClick={(value) => onHandleSpeed(value)} />
          </STC.OptionWrapper>
          <STC.OptionWrapper>
            <STC.OptionTitle>{t('player_quality')}</STC.OptionTitle>
            <CustomOptions
              options={qualityOptions}
              selected={qualityTemp}
              onClick={(value) => onHandleQuality(value)}
            />
          </STC.OptionWrapper>
          {isLive && (
            <STC.OptionWrapper>
              <STC.OptionTitle>{t('player_caption')}</STC.OptionTitle>
              <CustomOptions
                options={captionOption}
                selected={captionTemp}
                onClick={(value) => onHandleCaption(value)}
              />
            </STC.OptionWrapper>
          )}
        </STC.Content>
        <Button content={t('common_ok')} handleClick={onSaveSetting} />
      </STC.Modal>
    </STC.SettingModal>
  );
};

export default SettingMobileModal;
