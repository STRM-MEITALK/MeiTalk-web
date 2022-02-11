import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isLogin from '@lib/isLogin';
import { RootState } from '@stores/index';
import { updateLiveLike } from '@slice/liveViewSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useLiveViewLike = () => {
  const dispatch = useDispatch();

  const { isLike, vodId, chatKey } = useSelector(({ liveView }: RootState) => ({
    isLike: liveView.liveViewInfo.data.isLike,
    vodId: liveView.liveViewInfo.data.vodId,
    chatKey: liveView.liveViewInfo.data.chatKey,
  }));

  const onToggleLike = useCallback(() => {
    if (isLogin()) {
      if (vodId && chatKey) {
        dispatch(updateLiveLike({ vodId, chatKey }));
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  }, [vodId, chatKey]);

  return { isLike, onToggleLike };
};

export default useLiveViewLike;
