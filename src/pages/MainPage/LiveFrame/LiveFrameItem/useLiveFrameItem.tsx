import React from 'react';
import { getMainLiveChatKey } from '@slice/streamSlice';
import { useDispatch } from 'react-redux';
import { setIsLiveFinish } from '@slice/liveViewSlice';

const useLiveFrameItem = (vodId: number) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getMainLiveChatKey({ vodId }));
    dispatch(setIsLiveFinish(false));
  };

  return {
    handleOnClick,
  };
};

export default useLiveFrameItem;
