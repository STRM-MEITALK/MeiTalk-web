import React from 'react';
import Button from '@components/Button';
import IndicatorImage from '@images/loadingSpinner.png';

import { ITwoBtnModal } from './TwoBtnWaitModalType';
import * as STC from './TwoBtnWaitModal.style';
import useTwoBtnWaitModal from './useTwoBtnWaitModal';

const TwoBtnWaitModal = ({
  isShow,
  setIsShow,
  wait,
  setWait,
  handleLeftBtn,
  handleRightBtn,
  btnLeftContent,
  btnRightContent,
  content,
  waitContent,
}: ITwoBtnModal) => {
  const { scrollY } = useTwoBtnWaitModal({ isShow });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow} scrollY={scrollY}>
        {wait ? (
          <STC.ContentsWrapper>
            <STC.Contetns>{waitContent}</STC.Contetns>
            <STC.Indicator src={IndicatorImage} />
          </STC.ContentsWrapper>
        ) : (
          <>
            <STC.ContentsWrapper>
              <STC.Contetns>{content}</STC.Contetns>
            </STC.ContentsWrapper>
            <STC.BtnWrapper>
              <Button content={btnLeftContent} type="gray" disable={false} handleClick={handleLeftBtn} width="45%" />
              <Button
                content={btnRightContent}
                type="primary"
                disable={false}
                handleClick={handleRightBtn}
                width="45%"
              />
            </STC.BtnWrapper>
          </>
        )}
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default TwoBtnWaitModal;
