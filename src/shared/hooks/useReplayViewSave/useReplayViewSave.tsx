import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import isLogin from '@lib/isLogin';
import { RootState } from '@stores/index';
import { updateReplaySave } from '@slice/replayViewSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useReplayViewSave = () => {
  const dispatch = useDispatch();

  const { isSave, vodId } = useSelector(({ replayView }: RootState) => ({
    isSave: replayView.replayViewInfo.data.isSave,
    vodId: replayView.replayViewInfo.data.vodId,
  }));

  const onToggleSave = useCallback(() => {
    if (isLogin()) {
      if (vodId) {
        dispatch(updateReplaySave({ vodId }));
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  }, [vodId]);
  return { isSave, onToggleSave };
};

export default useReplayViewSave;
