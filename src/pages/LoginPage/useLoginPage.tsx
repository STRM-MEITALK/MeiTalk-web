import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { RootState } from '@src/stores/index';
import RequestStatus from '@src/shared/lib/RequestStatus';
import { resetLoginResult, postLogin } from '@slice/authSlice';
import { handleErrorModal } from '@src/stores/slice/globalModalSlice';

const useLoginPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const [isShowOM, setIsShowOM] = useState(false);

  const [idWarn, setIdWarn] = useState('');
  const [pwWarn, setPwWarn] = useState('');

  const [modalContent, setModalContent] = useState('');

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickLogin();
    }
  };

  const handleChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);

  const handleChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }, []);

  const onToggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  const checkId = useCallback(() => {
    if (id === '') {
      setIdWarn(t('login_id_warning'));
      return false;
    } else {
      setIdWarn('');
      return true;
    }
  }, [id]);

  const checkPw = useCallback(() => {
    if (pw === '') {
      setPwWarn(t('login_pw_warn'));
      return false;
    } else {
      setPwWarn('');
      return true;
    }
  }, [pw]);

  const handleClickLogin = useCallback(() => {
    if (checkId() && checkPw()) {
      dispatch(postLogin({ mailId: id, userPw: pw }));
    }
  }, [id, pw]);

  const handleClickRegist = useCallback(() => {
    window.location.href = PAGE_URL.REGIST;
  }, []);

  const handleClickGoogle = useCallback(() => {
    setIsShowOM(true);
    setModalContent(t('Prepare_modal_content'));
  }, []);

  const handleClickApple = useCallback(() => {
    setIsShowOM(true);
    setModalContent(t('Prepare_modal_content'));
  }, []);

  const handleClickLine = useCallback(() => {
    setIsShowOM(true);
    setModalContent(t('Prepare_modal_content'));
  }, []);

  const handleClickFace = useCallback(() => {
    setIsShowOM(true);
    setModalContent(t('Prepare_modal_content'));
  }, []);

  const {
    loginResult,
    loginStatus,
    userData,
    googleResult,
    googleOutput,
    googleStatus,
    faceOutput,
    faceResult,
    faceStatus,
    lineOutput,
    lineResult,
    lineStatus,
    appleOutput,
    appleResult,
    appleStatus,
  } = useSelector(({ auth }: RootState) => ({
    loginResult: auth.loginInfo.response.output,
    loginStatus: auth.loginInfo.status,
    userData: auth.loginInfo.data,

    googleResult: auth.googleLogin.data,
    googleOutput: auth.googleLogin.response.output,
    googleStatus: auth.googleLogin.status,

    faceResult: auth.facebookLogin.data,
    faceOutput: auth.facebookLogin.response.output,
    faceStatus: auth.facebookLogin.status,

    lineResult: auth.lineLogin.data,
    lineOutput: auth.lineLogin.response.output,
    lineStatus: auth.lineLogin.status,

    appleResult: auth.appleLogin.data,
    appleOutput: auth.appleLogin.response.output,
    appleStatus: auth.appleLogin.status,
  }));

  useEffect(() => {
    if (loginStatus === RequestStatus.SUCCESS) {
      if (loginResult === 0) {
        window.location.href = PAGE_URL.EMAIL_VERIFY_FAIL;
      } else if (loginResult === -1 || loginResult === -2) {
        setIsShowOM(true);
        setModalContent(t('login_modal_fail'));
      } else if (loginResult === -4) {
        window.location.href = PAGE_URL.EMAIL_VERIFY_FAIL;
      } else if (loginResult === -5) {
        window.location.href = PAGE_URL.EMAIL_VERIFY;
      } else if (loginResult !== 999 && loginResult < -5) {
        dispatch(handleErrorModal(true));
      }
    } else if (loginStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
    dispatch(resetLoginResult());
  }, [loginStatus, loginResult]);

  useEffect(() => {
    if (googleStatus === RequestStatus.SUCCESS) {
      if (googleOutput === 0) {
        window.location.href = `${googleResult}`;
      } else if (googleOutput !== 999 && googleOutput !== 0) {
        dispatch(handleErrorModal(true));
      }
    } else if (googleStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [googleResult, googleOutput, googleStatus]);

  useEffect(() => {
    if (faceStatus === RequestStatus.SUCCESS) {
      if (faceOutput === 0) {
        window.location.href = `${faceResult}`;
      } else if (faceOutput !== 999 && faceOutput !== 0) {
        dispatch(handleErrorModal(true));
      }
    } else if (faceStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [faceResult, faceOutput, faceStatus]);

  useEffect(() => {
    if (lineStatus === RequestStatus.SUCCESS) {
      if (lineOutput === 0) {
        window.location.href = `${lineResult}`;
      } else if (lineOutput !== 999 && lineOutput !== 0) {
        dispatch(handleErrorModal(true));
      }
    } else if (lineStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [lineResult, lineOutput, lineStatus]);

  useEffect(() => {
    if (appleStatus === RequestStatus.SUCCESS) {
      if (appleOutput === 0) {
        window.location.href = `${appleResult}`;
      } else if (appleOutput !== 999 && appleOutput !== 0) {
        dispatch(handleErrorModal(true));
      }
    } else if (appleStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [appleResult, appleOutput, appleStatus]);

  return {
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
  };
};

export default useLoginPage;
