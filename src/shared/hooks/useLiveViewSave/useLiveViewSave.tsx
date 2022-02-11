import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isLogin from '@lib/isLogin';
import { RootState } from '@stores/index';
import { updateLiveSave } from '@slice/liveViewSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useLiveViewSave = () => {
  const dispatch = useDispatch();

  const { isSave, vodId } = useSelector(({ liveView }: RootState) => ({
    isSave: liveView.liveViewInfo.data.isSave,
    vodId: liveView.liveViewInfo.data.vodId,
  }));

  const onToggleSave = useCallback(() => {
    if (isLogin()) {
      if (vodId) {
        dispatch(updateLiveSave({ vodId }));
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  }, [vodId]);

  return { isSave, onToggleSave };
};

export default useLiveViewSave;
