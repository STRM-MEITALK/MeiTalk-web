import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAccessDenyModal, handleBanModal } from '@slice/globalModalSlice';
import { PAGE_URL } from '@path';
import { postCheckBanUserApi, postCheckEnteredApi } from '@src/api/roomsApi';

const useModal = () => {
  const dispatch = useDispatch();

  const onClickCheckUser = (userId: string, chatKey: string, vodId: string) => {
    if (userId) {
      Promise.all([
        postCheckBanUserApi({ viewersUserNo: userId, chatKey }).then((res) => res),
        postCheckEnteredApi({ chatKey }).then((res) => res),
      ]).then((resArr) => {
        if (resArr[0].data.response.output === 0) {
          if (resArr[1].data.response.output === 0) {
            window.location.href = `${PAGE_URL.LIVE_DETAIL}/${vodId}`;
          } else if (resArr[1].data.response.output === -1) {
            dispatch(handleAccessDenyModal(true));
          } else if (resArr[1].data.response.output === -2) {
            dispatch(handleAccessDenyModal(true));
          }
        } else {
          dispatch(handleBanModal(true));
        }
      });
    } else {
      window.location.href = `${PAGE_URL.LIVE_DETAIL}/${vodId}`;
    }
  };

  const enterUrlCheck = (userId: string, chatKey: string) => {
    return Promise.all([
      postCheckBanUserApi({ viewersUserNo: userId, chatKey }).then((res) => res),
      postCheckEnteredApi({ chatKey }).then((res) => res),
    ]).then((resArr) => {
      if (resArr[0].data.response.output === 0) {
        if (resArr[1].data.response.output === 0) {
          return 'pass';
        } else if (resArr[1].data.response.output === -1) {
          return 'd';
        } else if (resArr[1].data.response.output === -2) {
          return 'd';
        }
      } else {
        return 'b';
      }
    });
  };

  const hideSetBanModal = () => {
    dispatch(handleBanModal(false));
  };

  const hideShowAccessDenyModal = () => {
    dispatch(handleAccessDenyModal(false));
  };

  return { hideSetBanModal, hideShowAccessDenyModal, onClickCheckUser, enterUrlCheck };
};

export default useModal;
