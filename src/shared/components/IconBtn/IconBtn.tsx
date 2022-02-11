import React from 'react';
import * as STC from './IconBtn.style';
import { IIconBtn } from './IconBtnType';

const IconBtn = ({ src, text, onClick }: IIconBtn) => {
  return (
    <STC.Wrapper onClick={(e?: any) => onClick(e)}>
      <STC.Icon src={src} />
      <STC.Text>{text}</STC.Text>
    </STC.Wrapper>
  );
};

export default IconBtn;
