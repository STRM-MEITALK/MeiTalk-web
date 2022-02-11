import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isLogin from '@lib/isLogin';
import { RootState } from '@stores/index';
import { updateReplayLike } from '@slice/replayViewSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useReplayViewLike = () => {
  const dispatch = useDispatch();
  const { isLike, vodId } = useSelector(({ replayView }: RootState) => ({
    isLike: replayView.replayViewInfo.data.isLike,
    vodId: replayView.replayViewInfo.data.vodId,
  }));

  const onToggleLike = useCallback(() => {
    if (isLogin()) {
      if (vodId) {
        dispatch(updateReplayLike({ vodId }));
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  }, [vodId]);

  return { isLike, onToggleLike };
};

export default useReplayViewLike;
