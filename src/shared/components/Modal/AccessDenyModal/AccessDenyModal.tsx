import React from 'react';
import Button from '@components/Button';
import DenyIcon from '@images/expired.png';
import { useTranslation } from 'react-i18next';
import * as STC from './AccessDenyModal.style';
import useAccessDenyModal from './useAccessDenyModal';

const AccessDenyModal = () => {
  const { t } = useTranslation();
  const { isShow, handleHideAccessDenyModal } = useAccessDenyModal();

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.TopWrapper>
          <STC.WarningIcon src={DenyIcon} />
          <STC.Title>{t('cannot_watch_title_1')}</STC.Title>
          <STC.Title>{t('cannot_watch_title_2')}</STC.Title>
        </STC.TopWrapper>
        <STC.ContentsWrapper>
          <STC.Contetns>{t('cannot_watch_msg')}</STC.Contetns>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button content={t('common_ok')} type="primary" disable={false} handleClick={handleHideAccessDenyModal} />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default AccessDenyModal;
