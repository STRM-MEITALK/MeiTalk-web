import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomOptions from '@components/CustomOptions';
import Button from '@components/Button';
import useFilterModal from './useFilterModal';
import * as STC from './FilterModal.style';
import { IFilterModalProps } from './FilterModalType';

const FilterModal = ({ type, isShowSetting, setIsShowSetting, searchValue, channelId }: IFilterModalProps) => {
  const { t } = useTranslation();
  const { onSaveSetting, categoryOptions, onHandleCategory, categoryTemp, publicOptions, publicTemp, onHandlePublic } =
    useFilterModal({
      type,
      isShowSetting,
      setIsShowSetting,
      searchValue,
      channelId,
    });

  return (
    <STC.SettingModal isShowSetting={isShowSetting}>
      <STC.Modal>
        <STC.Title>{t('filter_modal_title')}</STC.Title>
        {type === 'studio' && (
          <STC.OptionWrapper>
            <STC.OptionTitle>{t('filter_modal_visibility')}</STC.OptionTitle>
            <CustomOptions options={publicOptions} selected={publicTemp} onClick={(value) => onHandlePublic(value)} />
          </STC.OptionWrapper>
        )}
        <STC.OptionWrapper>
          {type === 'studio' && <STC.OptionTitle>{t('filter_modal_alignment')}</STC.OptionTitle>}
          <CustomOptions
            options={categoryOptions}
            selected={categoryTemp}
            onClick={(value) => onHandleCategory(value)}
          />
        </STC.OptionWrapper>

        <Button content={t('common_ok')} handleClick={onSaveSetting} />
      </STC.Modal>
    </STC.SettingModal>
  );
};

export default FilterModal;
