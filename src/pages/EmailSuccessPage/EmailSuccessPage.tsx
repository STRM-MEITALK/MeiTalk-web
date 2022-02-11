import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import emailVerify from '@lib/emailVerify';
import { handleAccessDenyModal } from '@slice/globalModalSlice';
import WarningImg from '@images/successful-pc.png';

import * as STC from './EmailSuccessPage.style';

const EmailSuccessPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = window.location.search.substring(6);

  useEffect(() => {
    if (token) {
      emailVerify(token);
    } else {
      navigate('/', { replace: true });
      dispatch(handleAccessDenyModal(true));
    }
  }, []);

  return (
    <STC.Container>
      <STC.ContentsWrapper>
        <STC.TopWrapper>
          <STC.WarningIcon src={WarningImg} />

          <STC.Title>{t('email_success_title')}</STC.Title>
        </STC.TopWrapper>

        <STC.Contents>{t('email_success_contents')}</STC.Contents>

        <STC.ButtonWrapper>
          <Link to="/login">
            <STC.Button>{t('login_sign_in')}</STC.Button>
          </Link>
        </STC.ButtonWrapper>
      </STC.ContentsWrapper>
    </STC.Container>
  );
};

export default EmailSuccessPage;
