import React from 'react';
import closeButton from '@images/closeButton.png';

import { IOneBtnModal } from './TermsModalType';
import useTermsModal from './useTermsModal';
import * as STC from './TermsModal.style';

const TermsModal = ({ isShow, setIsShow, title, content }: IOneBtnModal) => {
  const { scrollY } = useTermsModal({ isShow });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow} scrollY={scrollY}>
        <STC.CloaseWrapper>
          <STC.CloseBtn src={closeButton} onClick={() => setIsShow(false)} />
        </STC.CloaseWrapper>
        <STC.ModalHeader>
          <STC.Title>{title}</STC.Title>
        </STC.ModalHeader>
        <STC.ContentsWrapper>
          <STC.Contents>{content}</STC.Contents>
        </STC.ContentsWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default TermsModal;
