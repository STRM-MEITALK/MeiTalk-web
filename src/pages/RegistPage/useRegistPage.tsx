import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { PAGE_URL } from '@path';
import { RootState } from '@src/stores/index';
import RequestStatus from '@src/shared/lib/RequestStatus';

import { postRegist, resetRegistResult } from '@slice/authSlice';
import { getCountry, getEmailVerification } from '@slice/utilSlice';
import { handleErrorModal } from '@slice/globalModalSlice';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import countryImgName from '@lib/countryImgName';

import * as STC from './RegistPage.style';

const useRegistPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { countryData, registResult, registStatus, emailVerifyResult, emailStatus, language } = useSelector(
    ({ util, auth, language }: RootState) => ({
      countryData: util.countryCode.data,
      registResult: auth.registPost.response.output,
      registStatus: auth.registPost.status,
      emailVerifyResult: util.emailVerify.response.output,
      emailStatus: util.emailVerify.status,
      language: language.language,
    }),
  );

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [nameFirst, setNameFirst] = useState('');
  const [nameLast, setNameLast] = useState('');
  const [country, setCountry] = useState<IOptionType>();
  const [phone, setPhone] = useState('');
  const [check, setCheck] = useState(false);

  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);

  const [nameWarn, setNameWarn] = useState('');
  const [phoneWarn, setPhoneWarn] = useState('');
  const [idWarn, setIdWarn] = useState('');
  const [pwWarn, setPwWarn] = useState('');
  const [pwConfirmWarn, setPwConfirmWarn] = useState('');

  const [countryValue, setCountryValue] = useState<IOptionType[]>();

  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const [isShowTBM, setIsShowTBM] = useState(false);
  const [isShowOM, setIsShowOM] = useState(false);
  const [isShowTM, setIsShowTM] = useState(false);

  const [lang, setLang] = useState('en');

  useEffect(() => {
    const tempCountryOptions: IOptionType[] = countryData.map((data, idx) => {
      const key = `${idx}`;
      return {
        value: data.countryPhone,
        label: (
          <div key={data.countryCd + key} style={{ display: 'flex' }}>
            <STC.CountryImg src={countryImgName(data.countryCd)} alt={data.countryName} /> {data.countryName}(
            {data.countryPhone})
          </div>
        ),
      };
    });
    setCountryValue(tempCountryOptions);
    setCountry(tempCountryOptions[0]);
  }, [countryData]);

  const handleSelect = useCallback((value) => {
    setCountry(value);
  }, []);

  const handleChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const handleChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }, []);

  const handleChangePwConfirm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPwConfirm(e.target.value);
  }, []);

  const handleChangeNameFirst = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFirst(e.target.value);
  }, []);

  const handleChangeNameLast = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNameLast(e.target.value);
  }, []);

  const handleChangePhone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }, []);

  const EmailValidation = (text: string) => {
    const strongRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    return strongRegex.test(text);
  };

  const PwValidation = (text: string) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,30}/;
    return strongRegex.test(text);
  };

  const checkName = useCallback(() => {
    if (nameFirst === '' || nameLast === '') {
      setNameWarn(t('regist_name_warn'));
    } else {
      setNameWarn('');
    }
  }, [nameFirst, nameLast]);

  const checkPhone = useCallback(() => {
    if (phone === '') {
      setPhoneWarn(t('regist_phone_warn'));
    } else {
      setPhoneWarn('');
    }
  }, [phone]);

  const checkId = useCallback(() => {
    if (id === '') {
      setIdWarn(t('regist_email_warn'));
    } else if (!EmailValidation(id)) {
      setIdWarn(t('login_id_warning_format'));
    } else {
      setIdWarn('');
    }
  }, [id]);

  const checkPw = useCallback(() => {
    if (pw === '') {
      setPwWarn(t('regist_pw_warn'));
    } else if (!PwValidation(pw)) {
      setPwWarn(t('regist_pw_warn_invalid'));
    } else {
      setPwWarn('');
    }
  }, [pw]);

  const checkPwConfirm = useCallback(() => {
    if (pwConfirm === '') {
      setPwConfirmWarn(t('regist_pw_confirm_warn'));
    } else if (!PwValidation(pwConfirm)) {
      setPwConfirmWarn(t('regist_pw_confirm_warn_invalid'));
    } else if (pwConfirm !== pw) {
      setPwConfirmWarn(t('regist_pw_confirm_warn'));
    } else {
      setPwConfirmWarn('');
    }
  }, [pw, pwConfirm]);

  const handleClickRegist = useCallback(() => {
    checkName();
    checkPhone();
    checkId();
    checkPw();
    checkPwConfirm();

    if (!check) {
      setIsShowOM(!isShowOM);
    } else if (idWarn === '' && pwWarn === '' && pwConfirmWarn === '' && nameWarn === '' && phoneWarn === '') {
      dispatch(
        postRegist({
          mailId: id,
          userPw: pw,
          userName: nameFirst + nameLast,
          countryPhone: country?.value ?? '+376',
          phoneNum: phone,
          privacyAgree: check ? 'Y' : 'N',
        }),
      );
    }
  }, [
    id,
    pw,
    pwConfirm,
    nameFirst,
    nameLast,
    country,
    phone,
    check,
    idWarn,
    pwWarn,
    pwConfirmWarn,
    nameWarn,
    phoneWarn,
  ]);

  useEffect(() => {
    dispatch(getCountry());
    setLang(language);
  }, []);

  const onToggleCheck = useCallback(() => {
    setCheck(!check);
  }, [check]);

  const onToggleShowPw = useCallback(() => {
    setShowPw(!showPw);
  }, [showPw]);

  const onToggleShowPwConfirm = useCallback(() => {
    setShowPwConfirm(!showPwConfirm);
  }, [showPwConfirm]);

  useEffect(() => {
    if (registStatus === RequestStatus.SUCCESS) {
      if (registResult === 0) {
        dispatch(getEmailVerification({ userMail: id }));
      } else if (registResult === -1) {
        setIsShowTBM(true);
      } else if (registResult !== 999 && registResult < -1) {
        dispatch(handleErrorModal(true));
      }
    } else if (registStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [registResult, registStatus]);

  useEffect(() => {
    if (emailStatus === RequestStatus.SUCCESS) {
      if (emailVerifyResult === 0) {
        window.location.href = PAGE_URL.EMAIL_VERIFY;
      } else if (emailVerifyResult === -2) {
        window.location.href = PAGE_URL.LOGIN;
      } else if (emailVerifyResult !== 999 && emailVerifyResult < -2) {
        dispatch(handleErrorModal(true));
      }
    } else if (emailStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [emailVerifyResult, emailStatus]);

  const handlePopupLeftBtn = useCallback(() => {
    setIsShowTBM(false);
    dispatch(resetRegistResult());
  }, []);

  const handlePopupRightBtn = useCallback(() => {
    window.location.href = PAGE_URL.LOGIN;
  }, []);

  const handleClickTerms = useCallback(() => {
    setIsShowTM(true);
    setModalTitle(t('regist_terms2'));
    setModalContent(t('regist_terms_contents'));
  }, []);

  const handleClickPolicy = useCallback(() => {
    setIsShowTM(true);
    setModalTitle(t('regist_terms4'));
    setModalContent(t('regist_policy_contents'));
  }, []);

  useEffect(() => {
    setLang(language);
  }, [language]);

  return {
    id,
    pw,
    pwConfirm,
    nameFirst,
    nameLast,
    country,
    phone,
    countryData,
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
  };
};

export default useRegistPage;
