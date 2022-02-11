import React from 'react';
import Button from '@components/Button';

import { IOneBtnModal } from './OneBtnModalType';
import * as STC from './OneBtnModal.style';
import useOneBtnModal from './useOneBtnModal';

const OneBtnModal = ({ isShow, btnContent, handleBtn, content }: IOneBtnModal) => {
  useOneBtnModal({ isShow });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.ContentsWrapper>
          <STC.Contetns>{content}</STC.Contetns>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button content={btnContent} type="primary" disable={false} handleClick={handleBtn} />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default OneBtnModal;
