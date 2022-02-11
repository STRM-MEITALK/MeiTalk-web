import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';

import { IBannerModal } from './BannerModalType';
import * as STC from './BannerModal.style';
import useBannerModal from './useBannerModal';

const BannerModal = ({ isShow, handleBtn, setIsShow, fileRef }: IBannerModal) => {
  const { t } = useTranslation();
  useBannerModal({ isShow });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.ContentsWrapper>
          <STC.Title>{t('channel_image')}</STC.Title>
          <STC.Description>
            <STC.DescriptionWrapper>
              <STC.DescriptionTitle>{t('banner_format_title')}&nbsp;</STC.DescriptionTitle>
              <STC.DescriptionDetail>{t('banner_format_content')}</STC.DescriptionDetail>
            </STC.DescriptionWrapper>
            <STC.DescriptionWrapper>
              <STC.DescriptionTitle>{t('banner_capacity_title')}&nbsp;</STC.DescriptionTitle>
              <STC.DescriptionDetail>6MB</STC.DescriptionDetail>
            </STC.DescriptionWrapper>
            <STC.DescriptionWrapper>
              <STC.DescriptionTitle>{t('banner_size_title')}&nbsp;</STC.DescriptionTitle>
              <STC.DescriptionDetail>{t('banner_size_content')}</STC.DescriptionDetail>
            </STC.DescriptionWrapper>
            <STC.DescriptionWrapper>
              <STC.DescriptionAdditionalTitle>{t('banner_safe_title')}&nbsp;</STC.DescriptionAdditionalTitle>
              <STC.DescriptionAdditionalDetail>{t('banner_safe_content')}</STC.DescriptionAdditionalDetail>
            </STC.DescriptionWrapper>
          </STC.Description>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <STC.Label htmlFor="input-file">
            <Button content={t('ok')} type="primary" disable={false} handleClick={() => setIsShow(false)} />
            <input ref={fileRef} type="file" id="input-file" onChange={handleBtn} style={{ display: 'none' }} />
          </STC.Label>
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default BannerModal;
