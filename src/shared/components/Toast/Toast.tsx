import React from 'react';
import { ToastContainer } from 'react-toastify';
import * as STC from './Toast.style';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <STC.Wrapper>
      <ToastContainer />
    </STC.Wrapper>
  );
};

export default Toast;
