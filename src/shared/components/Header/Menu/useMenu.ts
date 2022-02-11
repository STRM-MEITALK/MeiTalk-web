import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/stores';
import { PAGE_URL } from '@path';

const useMenu = () => {
  const dispatch = useDispatch();
  const { loginInfo, lang } = useSelector(({ auth, language }: RootState) => ({
    loginInfo: auth.loginInfo.data,
    lang: language.language,
  }));

  const handleMyPage = () => {
    window.location.href = PAGE_URL.MY_PAGE;
  };

  return {
    loginInfo,
    handleMyPage,
  };
};

export default useMenu;
