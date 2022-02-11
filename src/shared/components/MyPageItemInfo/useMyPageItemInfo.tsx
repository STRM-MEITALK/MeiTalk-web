import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import isLogin from '@lib/isLogin';
import { deleteSave, deleteLike } from '@slice/studioSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useMyPageItemInfo = () => {
  const dispatch = useDispatch();

  const deleteOnClick = useCallback((vodId, activeTab) => {
    if (isLogin()) {
      if (vodId) {
        if (activeTab === 0) {
          dispatch(deleteSave({ vodId }));
        } else if (activeTab === 1) {
          dispatch(deleteLike({ vodId }));
        }
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  }, []);

  return {
    deleteOnClick,
  };
};

export default useMyPageItemInfo;
