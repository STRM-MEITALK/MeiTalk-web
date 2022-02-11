import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RootState } from '@src/stores/index';
import { handleAccessDenyModal } from '@slice/globalModalSlice';
import WarningImg from '@images/verify-pc.png';

import * as STC from './EmailVerifyPage.style';

const EmailVerifyPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector(({ auth }: RootState) => ({
    userData: auth.loginInfo.data,
  }));

  useEffect(() => {
    navigate('/', { replace: true });
    dispatch(handleAccessDenyModal(true));
  }, []);

  return (
    <STC.Container>
      <STC.ContentsWrapper>
        <STC.TopWrapper>
          <STC.WarningIcon src={WarningImg} />

          <STC.Title>{t('email_verify_title')}</STC.Title>
        </STC.TopWrapper>

        <STC.Contents>
          {t('email_verify_contents')}
          {sessionStorage.getItem('mailId') ?? userData.mailId}
          {t('email_verify_contents2')}
        </STC.Contents>

        <STC.Contents>
          <STC.HighLightContents onClick={() => window.open('https://telegram.org', '_blank')}>
            {t('email_verify_click')}
          </STC.HighLightContents>
          {t('email_verify_contents3')}
        </STC.Contents>

        <STC.ButtonWrapper>
          <Link to="/">
            <STC.Button>{t('common_home')}</STC.Button>
          </Link>
        </STC.ButtonWrapper>
      </STC.ContentsWrapper>
    </STC.Container>
  );
};

export default EmailVerifyPage;
