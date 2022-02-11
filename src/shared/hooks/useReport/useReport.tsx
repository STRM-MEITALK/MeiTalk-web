import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { handlePreparingModal } from '@slice/globalModalSlice';

const useReport = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onToggleReport = useCallback(() => {
    dispatch(handlePreparingModal(true));
  }, []);

  return { onToggleReport };
};

export default useReport;
