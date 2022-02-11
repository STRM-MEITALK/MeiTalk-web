import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import DropdownPicker from '@components/DropdownPicker';
import BroadcastCamera from '../BroadcastCamera';
import { CameraSettingProps } from './CameraSettingType';
import * as STC from './CameraSetting.style';

const CameraSetting = ({ viewRef, handleSelect, setStep, cameraOptions, cameraValue }: CameraSettingProps) => {
  const { t } = useTranslation();
  return (
    <STC.Wrapper>
      <STC.Title>{t('camera')}</STC.Title>
      <STC.Container>
        <STC.ContentWrapper>
          <STC.SelectWrapper>
            <DropdownPicker
              options={cameraOptions}
              value={cameraValue}
              handleValue={(value) => {
                if (value) {
                  handleSelect({ name: 'videoDeviceId', value });
                }
              }}
              controllerColor="fc01"
              optionColor="fc01"
            />
          </STC.SelectWrapper>
          <BroadcastCamera viewRef={viewRef} />
          <STC.ButtonWrapper>
            <Button type="primary" content={t('next')} handleClick={() => setStep('audio')} />
          </STC.ButtonWrapper>
        </STC.ContentWrapper>
      </STC.Container>
    </STC.Wrapper>
  );
};

export default CameraSetting;
