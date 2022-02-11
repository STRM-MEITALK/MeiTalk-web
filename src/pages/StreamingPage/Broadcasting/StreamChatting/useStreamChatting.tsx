import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';

const useStreamChatting = () => {
  const { isLiveFinish, userName } = useSelector(({ liveView, auth }: RootState) => ({
    isLiveFinish: liveView.isLiveFinish,
    userName: auth.loginInfo.data.username,
  }));

  return {
    isLiveFinish,
    userName,
  };
};

export default useStreamChatting;
