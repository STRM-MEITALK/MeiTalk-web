import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { handlePreparingModal } from '@slice/globalModalSlice';

const useDonate = () => {
  const dispatch = useDispatch();

  const showToast = useCallback(() => {
    dispatch(handlePreparingModal(true));
  }, []);

  return { showToast };
};

export default useDonate;
