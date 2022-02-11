import React from 'react';
import { ITitle } from '../../AboutUsType';
import * as STC from './Title.style';

const Title = ({ title, shadowTitle, left }: ITitle) => {
  return (
    <STC.Container>
      <STC.ShadowTitleContainer left={left}>
        <STC.ShadowTitle>{shadowTitle}</STC.ShadowTitle>
      </STC.ShadowTitleContainer>
      <STC.Title>{title}</STC.Title>
    </STC.Container>
  );
};

export default Title;
