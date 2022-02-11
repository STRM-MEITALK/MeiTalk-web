import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import ClockImg from '@images/clock.png';

import * as STC from './PreparingModal.style';
import usePreparingModal from './usePreparingModal';

const PreparingModal = () => {
  const { t } = useTranslation();
  const { isShow, onClose } = usePreparingModal();

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.ContentsWrapper>
          <STC.Image src={ClockImg} alt="" />
          <STC.Contetns>{t('preparing_modal_title')}</STC.Contetns>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button content={t('common_ok')} type="primary" disable={false} handleClick={onClose} />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default PreparingModal;
