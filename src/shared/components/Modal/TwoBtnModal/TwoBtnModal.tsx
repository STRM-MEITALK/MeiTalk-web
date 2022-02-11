import React from 'react';
import Button from '@components/Button';

import { ITwoBtnModal } from './TwoBtnModalType';
import * as STC from './TwoBtnModal.style';
import useTwoBtnModal from './useTwoBtnModal';

const TwoBtnModal = ({
  isShow,
  handleLeftBtn,
  handleRightBtn,
  btnLeftContent,
  btnRightContent,
  content,
}: ITwoBtnModal) => {
  useTwoBtnModal({ isShow });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.ContentsWrapper>
          <STC.Contetns>{content}</STC.Contetns>
        </STC.ContentsWrapper>
        <STC.BtnWrapper>
          <Button content={btnLeftContent} type="gray" disable={false} handleClick={handleLeftBtn} width="45%" />
          <Button content={btnRightContent} type="primary" disable={false} handleClick={handleRightBtn} width="45%" />
        </STC.BtnWrapper>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default TwoBtnModal;
