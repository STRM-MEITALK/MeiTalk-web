import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import useModal from '@hooks/useModal';

const useStreamItem = () => {
  const { onClickCheckUser } = useModal();

  const { userId } = useSelector(({ auth }: RootState) => ({
    userId: auth.loginInfo.data.userId,
  }));

  const onClick = (chatKey: string, vodId: string) => {
    onClickCheckUser(userId, chatKey, vodId);
  };

  return { onClick };
};

export default useStreamItem;
