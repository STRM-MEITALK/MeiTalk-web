import React from 'react';

import { useTranslation } from 'react-i18next';

import EditImg from '@images/channel-edit.png';

import * as STC from './About.style';
import useAbout from './useAbout';

const About = () => {
  const { t } = useTranslation();

  const {
    channelInfo,
    description,
    inputShow,
    btnDisable,
    handleDescription,
    handleEditBtn,
    handleCancel,
    handleSave,
  } = useAbout();

  return (
    <STC.Container>
      <STC.Header>{t('common_about')}</STC.Header>
      <STC.Block>
        <STC.Title>{t('about_joined')}</STC.Title>
        <STC.Content>{channelInfo.userProfile.userCreateTime}</STC.Content>
      </STC.Block>

      <STC.Block>
        <STC.Title>{t('about_views')}</STC.Title>
        <STC.Content>
          {channelInfo.views} {t('about_views_down')}
        </STC.Content>
      </STC.Block>

      <STC.Block>
        {channelInfo.isMe === 'Y' ? (
          <STC.DescriptionBlock>
            <STC.EditBlock>
              <STC.Title>{t('description')}</STC.Title>
              {!inputShow && <STC.EditBtn onClick={handleEditBtn} src={EditImg} />}
            </STC.EditBlock>
            {inputShow ? (
              <>
                <STC.DescriptionInput
                  value={description}
                  placeholder={t('about_description')}
                  onChange={handleDescription}
                  maxLength={5000}
                />
                <STC.BtnWrapper>
                  <STC.Button type="secondary" onClick={handleCancel}>
                    <STC.BtnText>{t('common_cancel')}</STC.BtnText>
                  </STC.Button>

                  <STC.Button type="primary" onClick={handleSave} disable={btnDisable}>
                    <STC.BtnText>{t('common_save')}</STC.BtnText>
                  </STC.Button>
                </STC.BtnWrapper>
              </>
            ) : (
              description !== null && (
                <STC.Description
                  dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;') }}
                />
              )
            )}
          </STC.DescriptionBlock>
        ) : (
          <STC.DescriptionBlock>
            {channelInfo.description !== null && channelInfo.description !== '' && (
              <>
                <STC.Title>{t('description')}</STC.Title>
                <STC.Description
                  dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;') }}
                />
              </>
            )}
          </STC.DescriptionBlock>
        )}
      </STC.Block>
    </STC.Container>
  );
};

export default About;
