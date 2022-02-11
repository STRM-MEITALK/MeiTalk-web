import React from 'react';
import Button from '@components/Button';
import { useTranslation } from 'react-i18next';
import * as STC from './BanModal.style';
import useBanModal from './useBanModal';

const OneBtnModal = () => {
  const { t } = useTranslation();
  const { isShow, handleHideBanModal } = useBanModal();

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.TopWrapper>
          <STC.Text>
            {`${t('cannot_watch_title_1')} `}
            {t('ban_message_title')}
          </STC.Text>
        </STC.TopWrapper>
        <STC.ContentsWrapper>
          <STC.Text02>{t('ban_messages')}</STC.Text02>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button content={t('common_ok')} type="primary" disable={false} handleClick={handleHideBanModal} />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default OneBtnModal;
