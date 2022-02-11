import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ShowImg from '@images/input-view.png';
import HideImg from '@images/input-view-x.png';
import CheckInImg from '@images/checkbox.png';
import CheckOutImg from '@images/checkOut.png';
import WarningImg from '@images/226.png';

import DropdownPicker from '@components/DropdownPicker';

import OneBtnModal from '@components/Modal/OneBtnModal';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import TermsModal from '@components/Modal/TermsModal';

import * as STC from './RegistPage.style';
import useRegistPage from './useRegistPage';

const RegistPage = () => {
  const { t } = useTranslation();
  const {
    id,
    pw,
    pwConfirm,
    nameFirst,
    nameLast,
    country,
    phone,
    check,
    showPw,
    showPwConfirm,
    onToggleCheck,
    handleChangeId,
    handleChangePw,
    handleChangePwConfirm,
    handleChangeNameFirst,
    handleChangeNameLast,
    handleChangePhone,
    handleClickRegist,
    onToggleShowPw,
    onToggleShowPwConfirm,
    nameWarn,
    phoneWarn,
    idWarn,
    pwWarn,
    pwConfirmWarn,
    checkName,
    checkPhone,
    checkId,
    checkPw,
    checkPwConfirm,
    countryValue,
    handleSelect,
    handlePopupLeftBtn,
    handlePopupRightBtn,
    isShowTBM,
    setIsShowTBM,
    handleClickTerms,
    handleClickPolicy,
    modalTitle,
    modalContent,
    isShowTM,
    setIsShowTM,
    isShowOM,
    setIsShowOM,
    lang,
  } = useRegistPage();

  return (
    <STC.Container>
      <OneBtnModal
        isShow={isShowOM}
        content={t('regist_terms_check_modal')}
        btnContent={t('common_ok')}
        handleBtn={() => setIsShowOM(false)}
      />

      <TwoBtnModal
        isShow={isShowTBM}
        setIsShow={() => setIsShowTBM(!isShowTBM)}
        content={t('regist_email_modal')}
        btnLeftContent={t('common_close')}
        btnRightContent={t('login_sign_in')}
        handleLeftBtn={() => handlePopupLeftBtn()}
        handleRightBtn={() => handlePopupRightBtn()}
      />

      <TermsModal
        isShow={isShowTM}
        setIsShow={() => setIsShowTM(!isShowTM)}
        content={modalContent}
        title={modalTitle}
      />
      <STC.Title>{t('regist_title')}</STC.Title>

      <STC.BottomWrapper>
        <STC.InputContainer>
          <STC.InputTitle>{t('regist_name_title')}</STC.InputTitle>
          <STC.NameContainer>
            <STC.InputName
              placeholder={t('regist_name_placeholder')}
              value={nameFirst}
              onChange={handleChangeNameFirst}
              onBlur={() => checkName()}
              checkName={nameWarn}
            />

            <STC.InputName
              placeholder={t('regist_name_placeholder2')}
              value={nameLast}
              onChange={handleChangeNameLast}
              onBlur={() => checkName()}
              checkName={nameWarn}
            />
          </STC.NameContainer>
          <STC.Warning>
            {nameWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {nameWarn}
          </STC.Warning>
        </STC.InputContainer>

        <STC.InputContainer>
          <STC.InputTitle>{t('regist_phone_title')}</STC.InputTitle>

          <DropdownPicker
            options={countryValue}
            value={country}
            handleValue={(value) => {
              if (value) {
                handleSelect(value);
              }
            }}
            controllerColor="fc01"
            optionColor="fc01"
          />
          <div style={{ paddingBottom: 10 }}> </div>
          <STC.Input
            placeholder={t('regist_phone_placeholder')}
            value={phone}
            onChange={handleChangePhone}
            onBlur={() => checkPhone()}
            checkPhone={phoneWarn}
            type="number"
          />
          <STC.Warning>
            {phoneWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {phoneWarn}
          </STC.Warning>
        </STC.InputContainer>

        <STC.InputContainer>
          <STC.InputTitle>{t('login_id_title')}</STC.InputTitle>
          <STC.Input
            placeholder={t('login_id_placeholder')}
            value={id}
            onChange={handleChangeId}
            onBlur={() => checkId()}
            checkPhone={idWarn}
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
              type={showPw ? 'text' : 'password'}
              onBlur={() => {
                checkPw();
                checkPwConfirm();
              }}
            />
            <STC.PwIcon src={showPw ? ShowImg : HideImg} onClick={onToggleShowPw} />
          </STC.PwWrapper>

          <STC.Warning>
            {pwWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {pwWarn}
          </STC.Warning>
        </STC.InputContainer>

        <STC.InputContainer>
          <STC.InputTitle>{t('regist_pw_confirm_title')}</STC.InputTitle>
          <STC.PwWrapper checkPw={pwConfirmWarn}>
            <STC.PwInput
              placeholder={t('login_pw_placeholder')}
              value={pwConfirm}
              onChange={handleChangePwConfirm}
              type={showPwConfirm ? 'text' : 'password'}
              onBlur={() => checkPwConfirm()}
            />
            <STC.PwIcon src={showPwConfirm ? ShowImg : HideImg} onClick={onToggleShowPwConfirm} />
          </STC.PwWrapper>

          <STC.Warning>
            {pwConfirmWarn !== '' && <STC.WarningIcon src={WarningImg} />}
            {pwConfirmWarn}
          </STC.Warning>
        </STC.InputContainer>

        <STC.GuideWrapper>
          <STC.GuideTitle>{t('regist_guide_title')}</STC.GuideTitle>

          <STC.GuideInfoWrapper>
            <STC.GuideInfoTab>- </STC.GuideInfoTab>
            <STC.GuideInfo>{t('regist_guide_info')}</STC.GuideInfo>
          </STC.GuideInfoWrapper>

          <STC.GuideInfoWrapper>
            <STC.GuideInfoTab>- </STC.GuideInfoTab>
            <STC.GuideInfo>{t('regist_guide_info2')}</STC.GuideInfo>
          </STC.GuideInfoWrapper>
        </STC.GuideWrapper>

        <STC.TermsWrapper>
          <STC.CheckIcon src={check ? CheckInImg : CheckOutImg} onClick={onToggleCheck} />
          <STC.TermsInfoWrapper>
            {lang === 'en' && (
              <>
                <STC.TermsInfo>{t('regist_terms1')}</STC.TermsInfo>
                <STC.TermsInfoPoint onClick={() => handleClickTerms()}>{t('regist_terms2')}</STC.TermsInfoPoint>
                <STC.TermsInfo> {t('regist_terms3')} </STC.TermsInfo>
                <STC.TermsInfoPoint onClick={() => handleClickPolicy()}>{t('regist_terms4')}</STC.TermsInfoPoint>{' '}
              </>
            )}

            {lang === 'ko' && (
              <>
                <STC.TermsInfoPoint onClick={() => handleClickTerms()}>{t('regist_terms2')}</STC.TermsInfoPoint>
                <STC.TermsInfo> {t('regist_terms3')} </STC.TermsInfo>
                <STC.TermsInfoPoint onClick={() => handleClickPolicy()}>{t('regist_terms4')}</STC.TermsInfoPoint>{' '}
                <STC.TermsInfo>{t('regist_terms1_ko')}</STC.TermsInfo>
              </>
            )}
          </STC.TermsInfoWrapper>
        </STC.TermsWrapper>

        <STC.ButtonWrapper>
          <STC.Button onClick={handleClickRegist}>{t('regist_sign_up')}</STC.Button>
          <Link to="/login">
            <STC.ButtonSignIn>{t('login_sign_in')}</STC.ButtonSignIn>
          </Link>
        </STC.ButtonWrapper>
      </STC.BottomWrapper>
    </STC.Container>
  );
};

export default RegistPage;
