import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { PAGE_URL } from '@path';
import { ISelectStreamModalProps } from '@components/Modal/SelectStreamModal/SelectStreamModalType';
import useToast from '@components/Toast/useToast';
import { getStreamInfo, setStream, createChannel, setBackTrigger, readyStream } from '@slice/broadSlice';
import { setMoveAndLogout } from '@slice/authSlice';
import { RootState } from '@src/stores';
import checkUserRoles from '@lib/checkUserRoles';
import RequestStatus from '@lib/RequestStatus';
import isLogin from '@src/shared/lib/isLogin';
import { handleLoginModal } from '@src/stores/slice/globalModalSlice';

const useHeader = ({ isShow, trigger, setIsShow }: ISelectStreamModalProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const { callToast } = useToast();

  const { userInfo, streamInfo, readyStreamResult, isSetting } = useSelector(({ auth, broad }: RootState) => ({
    userInfo: auth.loginInfo.data,
    streamInfo: broad.streamInfo,
    readyStreamResult: broad.readyStreamResult,
    isSetting: broad.isSetting,
  }));

  const handleScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, [isMenu]);

  const [isBackground, setIsBackground] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleHome = () => {
    window.location.href = PAGE_URL.MAIN;
  };

  const handleBroadcast = () => {
    if (isLogin()) {
      if (checkUserRoles() === 'STREAMER') {
        dispatch(getStreamInfo({ userNo: userInfo.userId, isSetting: false }));
      }
    } else {
      dispatch(handleLoginModal(true));
    }
  };

  useEffect(() => {
    if (streamInfo.status === RequestStatus.SUCCESS) {
      if (streamInfo?.data?.transmittedType === 'E') {
        dispatch(setStream({ type: 'external' }));
        if (!isSetting) {
          dispatch(readyStream());
        }
        setIsMenu(false);
      } else if (streamInfo.data === null && !isSetting) {
        setIsShow();
      }
    }
  }, [streamInfo]);

  useEffect(() => {
    if (isMenu) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    } else {
      window.addEventListener('scroll', handleScrollY);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollY);
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isMenu, isShow]);

  useEffect(() => {
    if (!isShow && trigger) {
      setIsMenu(false);
    }
  }, [trigger, isShow]);

  useEffect(() => {
    if (location.pathname === PAGE_URL.MAIN && (scrollY !== 0 || document.body.style.position === 'fixed')) {
      setIsBackground(true);
    } else if (location.pathname !== PAGE_URL.MAIN) {
      setIsBackground(true);
    } else {
      setIsBackground(false);
    }
  }, [scrollY]);

  const handleLoginPage = () => {
    window.location.href = PAGE_URL.LOGIN;
  };

  const handleLogout = () => {
    dispatch(setMoveAndLogout(true));
    navigate('/', { replace: true });
  };

  return {
    scrollY,
    isMenu,
    isBackground,
    handleHome,
    handleMenu,
    handleBroadcast,
    handleLoginPage,
    handleLogout,
  };
};

export default useHeader;
