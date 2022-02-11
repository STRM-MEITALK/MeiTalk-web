import React, { useCallback } from 'react';
import { toast, Slide, Zoom } from 'react-toastify';
import { sizes } from '@styles/media';

const useToast = () => {
  const callToast = useCallback((text: string) => {
    toast(text, {
      position: window.innerWidth > sizes.tablet ? 'top-right' : 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      progress: undefined,
      closeButton: false,
      transition: Slide,
    });
  }, []);

  return { callToast };
};

export default useToast;
