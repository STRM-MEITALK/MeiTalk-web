import React from 'react';
import { useTranslation } from 'react-i18next';
import { IFeatureProps } from '../../AboutUsType';
import * as STC from './Feature.style';
import useFeature from './useFeature';

const Feature = ({ title, des, img, index }: IFeatureProps) => {
  const { animation } = useFeature(index);
  const { t } = useTranslation();

  return (
    <STC.Container animation={animation}>
      <STC.InnerContainer direction={!(index % 2)}>
        <STC.ContentsContainer>
          <STC.TopContainer>
            <STC.FeatureIcon src={img} />

            <STC.TextContainer>
              <STC.Title>{t(`${title}`)}</STC.Title>
              <STC.Description>{t(`${des}`)}</STC.Description>
            </STC.TextContainer>
          </STC.TopContainer>

          <STC.UnderLine />
        </STC.ContentsContainer>
      </STC.InnerContainer>
    </STC.Container>
  );
};

export default Feature;
