import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import DropdownPicker from '@components/DropdownPicker';
import micImage from '@images/mic-mb-pc.png';
import { IAudioSettingProps } from './AudioSettingType';
import * as STC from './AudioSetting.style';

const AudioSetting = ({ handleSelect, setStep, audioOptions, audioValue }: IAudioSettingProps) => {
  const { t } = useTranslation();
  return (
    <STC.Wrapper>
      <STC.Title>{t('microphone')}</STC.Title>
      <STC.Container>
        <STC.ContentWrapper>
          <DropdownPicker
            options={audioOptions}
            value={audioValue}
            handleValue={(value) => {
              if (value) {
                handleSelect({ name: 'audioDeviceId', value });
              }
            }}
            controllerColor="fc01"
            optionColor="fc01"
          />
          <STC.MicImage src={micImage} />
          <STC.ButtonContainer>
            <STC.ButtonWrapper>
              <Button type="secondary" content={t('prev')} handleClick={() => setStep('camera')} />
            </STC.ButtonWrapper>
            <STC.ButtonWrapper>
              <Button type="primary" content={t('next')} handleClick={() => setStep('detail')} />
            </STC.ButtonWrapper>
          </STC.ButtonContainer>
        </STC.ContentWrapper>
      </STC.Container>
    </STC.Wrapper>
  );
};

export default AudioSetting;
