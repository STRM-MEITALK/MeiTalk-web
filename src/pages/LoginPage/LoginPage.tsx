import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ShowImg from '@images/input-view.png';
import HideImg from '@images/input-view-x.png';

import GoogleImg from '@images/google-ico.png';
import AppleImg from '@images/apple.png';
import LineImg from '@images/line.png';
import FaceImg from '@images/facebook.png';
import WarningImg from '@images/226.png';

import OneBtnModal from '@components/Modal/OneBtnModal';

import * as STC from './LoginPage.style';
import useLoginPage from './useLoginPage';

const LoginPage = () => {
  const { t } = useTranslation();

  const {
    id,
    pw,
    show,
    handleChangeId,
    handleChangePw,
    handleClickLogin,
    handleClickRegist,
    onToggleShow,
    handleClickGoogle,
    handleClickApple,
    handleClickLine,
    handleClickFace,
    handleEnter,
    checkId,
    checkPw,
    idWarn,
    pwWarn,
    isShowOM,
    setIsShowOM,
    modalContent,
  } = useLoginPage();

  return (
    <STC.Container>
      <OneBtnModal
        isShow={isShowOM}
        content={modalContent}
        btnContent={t('common_ok')}
        handleBtn={() => setIsShowOM(false)}
      />

      <STC.Title>{t('login_title')}</STC.Title>

      <STC.BottomWrapper>
        <STC.InputContainer>
          <STC.InputTitle>{t('login_id_title')}</STC.InputTitle>
          <STC.Input
            placeholder={t('login_id_placeholder')}
            value={id}
            onChange={handleChangeId}
            onBlur={() => checkId()}
            checkId={idWarn}
          />
          <STC.Warning>
            {idWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {idWarn}
          </STC.Warning>
        </STC.InputContainer>

        <STC.InputContainer>
          <STC.InputTitle>{t('login_pw_title')}</STC.InputTitle>
          <STC.PwWrapper checkPw={pwWarn}>
            <STC.PwInput
              placeholder={t('login_pw_placeholder')}
              value={pw}
              onChange={handleChangePw}
              onBlur={() => checkPw()}
              onKeyPress={handleEnter}
              type={show ? 'text' : 'password'}
            />
            <STC.PwIcon src={show ? ShowImg : HideImg} onClick={onToggleShow} />
          </STC.PwWrapper>

          <STC.Warning>
            {pwWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {pwWarn}
          </STC.Warning>
        </STC.InputContainer>
        <STC.ButtonWrapper>
          <STC.Button onClick={handleClickLogin}>{t('login_sign_in')}</STC.Button>
          <STC.SignupBtn onClick={handleClickRegist}>{t('login_regist')}</STC.SignupBtn>
        </STC.ButtonWrapper>

        <STC.SocialBtnTitle>{t('login_social_option')}</STC.SocialBtnTitle>
        <STC.SocialBtnWrapper>
          <STC.Icon src={GoogleImg} onClick={handleClickGoogle} />
          <STC.Icon src={AppleImg} onClick={handleClickApple} />
          <STC.Icon src={FaceImg} onClick={handleClickFace} />
        </STC.SocialBtnWrapper>
      </STC.BottomWrapper>
    </STC.Container>
  );
};

export default LoginPage;
