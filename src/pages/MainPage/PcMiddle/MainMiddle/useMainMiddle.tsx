/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */

import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import useModal from '@hooks/useModal';
import { PAGE_URL } from '@path';

const useMainMiddle = () => {
  const { onClickCheckUser } = useModal();
  const [mouseOverCheck, setMouseOverCheck] = useState(true);
  const [dragging, setDragging] = useState(false);

  const { userId } = useSelector(({ auth }: RootState) => ({
    userId: auth.loginInfo.data.userId,
  }));

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const onClickVod = (item: any) => {
    if (item.isLive) {
      onClickCheckUser(userId, item.chatKey, item.vodId);
    } else {
      window.location.href = `${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`;
    }
  };

  return { mouseOverCheck, dragging, setMouseOverCheck, onClickVod, handleAfterChange, handleBeforeChange };
};

export default useMainMiddle;
