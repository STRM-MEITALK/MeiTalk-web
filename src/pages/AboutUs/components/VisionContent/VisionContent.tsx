import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import num1 from '@images/feature01.png';
import num2 from '@images/feature02.png';
import num3 from '@images/feature03.png';
import * as STC from './VisionContent.style';
import useVisionContent from './useVisionContent';

const VisionContent = () => {
  const { t } = useTranslation();
  const { animation } = useVisionContent();

  return (
    <STC.Container animation={animation}>
      <STC.DesWrapper>
        <STC.NumIcon src={num1} />
        <STC.Description>
          {t('vision01').split('"')[0]}
          <STC.DescriptionYellow>{t('vision01').split('"')[1]}</STC.DescriptionYellow>
          {t('vision01').split('"')[2]}
        </STC.Description>
      </STC.DesWrapper>

      <STC.DesWrapper>
        <STC.NumIcon src={num2} />
        <STC.Description>
          {t('vision02').split('"')[0]}
          <STC.DescriptionYellow>{t('vision02').split('"')[1]}</STC.DescriptionYellow>
          {t('vision02').split('"')[2]}
        </STC.Description>
      </STC.DesWrapper>

      <STC.DesWrapper>
        <STC.NumIcon src={num3} />
        <STC.Description>
          {t('vision03').split('"')[0]}
          <STC.DescriptionYellow>{t('vision03').split('"')[1]}</STC.DescriptionYellow>
          {t('vision03').split('"')[2]}
        </STC.Description>
      </STC.DesWrapper>
    </STC.Container>
  );
};

export default VisionContent;
