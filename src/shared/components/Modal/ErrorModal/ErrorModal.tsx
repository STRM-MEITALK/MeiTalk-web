import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@components/Button';
import { PAGE_URL } from '@path';
import WarningImg from '@images/verify-pc.png';

import * as STC from './ErrorModal.style';
import useErrorModal from './useErrorModal';

const ErrorModal = () => {
  const { t } = useTranslation();
  const { isShow } = useErrorModal();

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.TopWrapper>
          <STC.WarningIcon src={WarningImg} />
          <STC.Title>{t('error_modal_title')}</STC.Title>
        </STC.TopWrapper>
        <STC.ContentsWrapper>
          <STC.Contents>{t('error_modal_contents')}</STC.Contents>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button
            content={t('common_home')}
            type="primary"
            disable={false}
            handleClick={() => {
              window.location.href = PAGE_URL.MAIN;
            }}
          />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default ErrorModal;
