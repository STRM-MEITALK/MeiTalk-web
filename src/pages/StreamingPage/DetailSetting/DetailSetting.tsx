import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import DropdownPicker from '@components/DropdownPicker';
import Toggle from '@components/Toggle';
import closeButton from '@images/closeButton.png';
import BroadcastCamera from '../BroadcastCamera';
import { IDetailSettingProps } from './DetailSettingType';
import * as STC from './DetailSetting.style';

const DetailSetting = ({
  viewRef,
  setStep,
  vodCategoryOptions,
  broadCategory,
  broadDetail,
  broadTitle,
  detailDisable,
  titlePlaceholder,
  multiRtmpDestination,
  externalTriggerFalse,
  handleMultiRtmpDestination,
  handleBroadCategory,
  handleBroadDetail,
  handleBroadTitle,
  handleAddRtmp,
  handleRemoveRtmp,
  handleMultiStreamToggle,
}: IDetailSettingProps) => {
  const { t } = useTranslation();
  return (
    <STC.Wrapper>
      <STC.Title>{t('almost_ready_now')}</STC.Title>
      <STC.Container>
        <STC.ContentWrapper>
          <STC.SectionWrapper>
            <STC.ContentTitle>{t('category')}</STC.ContentTitle>
            <STC.CategoryWrapper>
              <DropdownPicker
                options={vodCategoryOptions}
                value={broadCategory}
                handleValue={(value) => {
                  if (value) {
                    handleBroadCategory(value);
                  }
                }}
                controllerColor="fc01"
                optionColor="fc01"
              />
            </STC.CategoryWrapper>
            <BroadcastCamera viewRef={viewRef} />
          </STC.SectionWrapper>
          <STC.SectionWrapper>
            <STC.ContentTitle>
              {t('title')} ({broadTitle?.length}/100) <STC.Point>*</STC.Point>
              <STC.RequireText>({t('required')})</STC.RequireText>
            </STC.ContentTitle>
            <STC.TitleInput type="text" value={broadTitle} placeholder={titlePlaceholder} onChange={handleBroadTitle} />
            <STC.ContentTitle>
              {t('description')} ({broadDetail?.length}/5000)
            </STC.ContentTitle>
            <STC.DetailInput onChange={handleBroadDetail} maxLength={5000} value={broadDetail} />
          </STC.SectionWrapper>
        </STC.ContentWrapper>
        <STC.MultiStreamWrapper>
          <STC.MultiStreamTitleWrapper>
            <STC.MultiStreamWrapperTitle>{t('multi_stream')}</STC.MultiStreamWrapperTitle>
            <Toggle
              type="multiStream"
              trueText="ON"
              falseText="OFF"
              handleToggleTrue={() => handleMultiStreamToggle(true)}
              handleToggleFalse={() => handleMultiStreamToggle(false)}
              defaultToggle={false}
              externalTriggerFalse={externalTriggerFalse}
            />
          </STC.MultiStreamTitleWrapper>

          {multiRtmpDestination.map((rtmp, index) => {
            return (
              <STC.MultiStreamInputWrapper>
                <STC.RemoveButtonWrapper onClick={() => handleRemoveRtmp(index)}>
                  <STC.RemoveButton src={closeButton} alt="" />
                </STC.RemoveButtonWrapper>
                <STC.MultiStreamInputRow>
                  <STC.MultiStreamTitle>{t('external_onboarding_server')}</STC.MultiStreamTitle>
                  <STC.MultiStreamInput
                    type="text"
                    value={rtmp.mediaServer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMultiRtmpDestination(e, index, 'mediaServer')
                    }
                  />
                </STC.MultiStreamInputRow>
                <STC.MultiStreamInputRow>
                  <STC.MultiStreamTitle>{t('external_onboarding_streamkey')}</STC.MultiStreamTitle>
                  <STC.MultiStreamInput
                    type="text"
                    value={rtmp.streamKey}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleMultiRtmpDestination(e, index, 'streamKey')
                    }
                  />
                </STC.MultiStreamInputRow>
              </STC.MultiStreamInputWrapper>
            );
          })}
          {multiRtmpDestination.length === 1 && (
            <STC.AddMultiWrapper onClick={handleAddRtmp}>
              <STC.AddMultiText>+ {t('add')}</STC.AddMultiText>
            </STC.AddMultiWrapper>
          )}
        </STC.MultiStreamWrapper>

        <STC.ButtonContainer>
          <STC.ButtonWrapper>
            <Button type="secondary" content={t('prev')} handleClick={() => setStep('audio')} />
          </STC.ButtonWrapper>
          <STC.ButtonWrapper>
            <Button
              type="primary"
              disable={detailDisable}
              content={t('finish')}
              handleClick={() => setStep('broadcast')}
            />
          </STC.ButtonWrapper>
        </STC.ButtonContainer>
      </STC.Container>
    </STC.Wrapper>
  );
};

export default DetailSetting;
