import React from 'react';
import { useTranslation } from 'react-i18next';

import WarningImg from '@images/expired-pc.png';

import * as STC from './EmailFailPage.style';
import useEmailFailPage from './useEmailFailPage';

const EmailFailPage = () => {
  const { t } = useTranslation();
  const { user, handleClickResend } = useEmailFailPage();

  return (
    <STC.Container>
      <STC.ContentsWrapper>
        <STC.TopWrapper>
          <STC.WarningIcon src={WarningImg} />

          <STC.Title>{t('email_fail_title')}</STC.Title>
        </STC.TopWrapper>

        <STC.Contents>{t('email_fail_contents')}</STC.Contents>

        <STC.ButtonWrapper>
          <STC.Button onClick={handleClickResend}>{t('email_fail_btn')}</STC.Button>
        </STC.ButtonWrapper>
      </STC.ContentsWrapper>
    </STC.Container>
  );
};

export default EmailFailPage;
