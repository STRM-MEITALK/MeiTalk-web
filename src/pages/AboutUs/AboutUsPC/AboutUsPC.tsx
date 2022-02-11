import React from 'react';
import { useTranslation } from 'react-i18next';
import aboutUs from '@images/about-us.png';
import aboutBackground from '@images/about_background.png';
import Title from '../components/Title';
import { IFeatures } from '../AboutUsType';
import * as STC from './AboutUsPC.style';
import Feature from '../components/Feature';
import VisionContent from '../components/VisionContent';

const AboutUs = ({ features }: IFeatures) => {
  const { t } = useTranslation();

  return (
    <STC.Container>
      <STC.InnerContainer>
        <STC.Icon src={aboutUs} />

        <STC.TextWrapper>
          <Title title={t('title01')} shadowTitle={t('shadow_title01')} left={5} />
          <STC.Description>{t('about_meitalk_des_pc')}</STC.Description>
        </STC.TextWrapper>

        <STC.BackgroundImage src={aboutBackground} />
      </STC.InnerContainer>

      <STC.InnerContainer2>
        <Title title={t('title02')} shadowTitle={t('shadow_title02')} left={-70} />

        <VisionContent />
      </STC.InnerContainer2>

      <STC.InnerContainer2>
        <Title title={t('title03')} shadowTitle={t('shadow_title03')} left={-60} />
        <STC.BlankDiv />
        {features.map((el, idx) => (
          <Feature key={el.title} title={el.title} des={el.des} img={el.img} index={idx} />
        ))}
      </STC.InnerContainer2>
    </STC.Container>
  );
};

export default AboutUs;
