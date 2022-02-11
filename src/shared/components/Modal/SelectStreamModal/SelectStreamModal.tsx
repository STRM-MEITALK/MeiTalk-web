import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import closeButton from '@images/closeButton.png';
import liveView from '@images/liveview.png';
import obs from '@images/obs.png';
import { ISelectStreamModalModal } from './SelectStreamModalType';
import useSelectStreamModal from './useSelectStreamModal';
import * as STC from './SelectStreamModal.style';

const SelectStreamModal = ({ isShow, setIsShow, setTrigger }: ISelectStreamModalModal) => {
  const { t } = useTranslation();

  const { scrollY, type, setType, handleNext } = useSelectStreamModal({ isShow, setIsShow, setTrigger });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow} scrollY={scrollY}>
        <STC.CloaseWrapper>
          <STC.CloseBtn src={closeButton} onClick={() => setIsShow(false)} />
        </STC.CloaseWrapper>
        <STC.ModalHeader>
          <STC.Title>{t('how_to_live_stream')}</STC.Title>
        </STC.ModalHeader>
        <STC.SelectButtonWrapper>
          <STC.SelectButton onClick={() => setType('external')} isSelected={type === 'external'}>
            <STC.SelectButtonImage src={obs} />
            <STC.SelectButtonText isSelected={type === 'external'}>OBS</STC.SelectButtonText>
          </STC.SelectButton>
          <STC.SelectButton onClick={() => setType('Liveview')} isSelected={type === 'Liveview'}>
            <STC.SelectButtonImage src={liveView} />
            <STC.SelectButtonText isSelected={type === 'Liveview'}>MeiTalk Studio</STC.SelectButtonText>
          </STC.SelectButton>
        </STC.SelectButtonWrapper>
        <Button content={t('next')} type="primary" disable={false} handleClick={handleNext} />
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default SelectStreamModal;
