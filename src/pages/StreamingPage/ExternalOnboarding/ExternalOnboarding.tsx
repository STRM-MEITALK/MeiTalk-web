import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import CopyItem from '@images/copy-pc.png';
import InputViewAble from '@images/input-view.png';
import InputViewDisable from '@images/input-view-x.png';
import OBSImage1 from '@images/obs-img-1.png';
import OBSImage2 from '@images/obs-img-2.png';
import * as STC from './ExternalOnboarding.style';
import useExternalOnboarding from './useExternalOnboarding';
import { IExternalOnboardingProps } from './ExternalOnboardingType';

const ExternalOnboarding = ({ handleClick }: IExternalOnboardingProps) => {
  const { t } = useTranslation();
  const { channel, streamKey, toggle, onCopied, handleStreamKey } = useExternalOnboarding();
  return (
    <>
      <STC.Wrapper>
        <STC.DataWrapper>
          <STC.DataTextWrapper>
            <STC.DataTitle>{t('external_onboarding_server')}</STC.DataTitle>
            <STC.Flex>
              <STC.DataContentWrapper>
                <STC.DataContent>{channel.rtmpUrl}</STC.DataContent>
              </STC.DataContentWrapper>
              <CopyToClipboard text={channel.rtmpUrl} onCopy={onCopied}>
                <STC.CopyImgWrapper>
                  <STC.CopyItem src={CopyItem} />
                </STC.CopyImgWrapper>
              </CopyToClipboard>
            </STC.Flex>
          </STC.DataTextWrapper>
          <STC.DataTextWrapper isBottom={true}>
            <STC.DataTitle>{t('external_onboarding_streamkey')}</STC.DataTitle>
            <STC.Flex>
              <STC.DataContentWrapper>
                <STC.DataContent>{streamKey}</STC.DataContent>
                <STC.VisibleIcon
                  src={toggle ? InputViewDisable : InputViewAble}
                  onClick={() => handleStreamKey(toggle)}
                />
              </STC.DataContentWrapper>
              <CopyToClipboard text={channel.streamValue} onCopy={onCopied}>
                <STC.CopyImgWrapper>
                  <STC.CopyItem src={CopyItem} />
                </STC.CopyImgWrapper>
              </CopyToClipboard>
            </STC.Flex>
          </STC.DataTextWrapper>
        </STC.DataWrapper>
        <STC.ContentContainer>
          <STC.ContentTitle>{t('onboarding_title')}</STC.ContentTitle>
        </STC.ContentContainer>
        <STC.ContentWrapper>
          <STC.ExplanationText>
            {t('onboarding_explanation_1')}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://obsproject.com/download" target="blank">
              https://obsproject.com/download
            </a>
          </STC.ExplanationText>
          <STC.ExplanationText>{t('onboarding_explanation_2')}</STC.ExplanationText>
          <STC.ExplanationText>{t('onboarding_explanation_3')}</STC.ExplanationText>
          <STC.ExplanationImg src={OBSImage1} />
          <STC.ExplanationText>{t('onboarding_explanation_4')}</STC.ExplanationText>
          <STC.ExplanationText>{t('onboarding_explanation_5')}</STC.ExplanationText>
          <STC.ExplanationImg src={OBSImage2} />
          <STC.ExplanationText>{t('onboarding_explanation_6')}</STC.ExplanationText>
        </STC.ContentWrapper>
      </STC.Wrapper>
      <STC.ButtonWrapper onClick={handleClick}>{t('next')}</STC.ButtonWrapper>
    </>
  );
};

export default ExternalOnboarding;
