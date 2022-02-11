import React from 'react';
import { meitalk, accountIdPass, accountSignup, accountHelp, verification, myPage, myStudio, liveView } from './data';

const useFAQPage = () => {
  return {
    meitalk,
    accountIdPass,
    accountSignup,
    accountHelp,
    verification,
    myPage,
    myStudio,
    liveView,
  };
};

export default useFAQPage;
