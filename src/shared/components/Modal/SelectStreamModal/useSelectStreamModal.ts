import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MediaPermissionsError, requestMediaPermissions } from 'mic-check';
import { PAGE_URL } from '@path';
import RequestStatus from '@lib/RequestStatus';
import { setStream, createChannel, isOnboarding, readyStream } from '@slice/broadSlice';
import { RootState } from '@src/stores';
import useToast from '@components/Toast/useToast';

const useSelectStreamModal = ({
  isShow,
  setIsShow,
  setTrigger,
}: {
  isShow: boolean;
  setIsShow: (_: boolean) => void;
  setTrigger: (_: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { callToast } = useToast();

  const { createChannelResult, userInfo, streamInfo, isOnboard, scrollY, readyStreamResult } = useSelector(
    ({ auth, broad, globalModal }: RootState) => ({
      createChannelResult: broad.createChannelResult,
      userInfo: auth.loginInfo.data,
      streamInfo: broad.streamInfo,
      isOnboard: broad.isOnboard,
      scrollY: globalModal.scrollY,
      readyStreamResult: broad.readyStreamResult,
    }),
  );
  const [type, setType] = useState<string>('Liveview');

  const handleNext = () => {
    if (type === 'external') {
      handleMoveBroad();
    } else {
      handlePermissionVideo();
    }
  };

  const handleMoveBroad = () => {
    const userNo = Number(userInfo.userId);
    dispatch(readyStream());
    dispatch(setStream({ type }));
    setIsShow(false);
    setTrigger(true);
  };

  const handlePermissionAudio = () => {
    requestMediaPermissions({ audio: true, video: false })
      .then(() => {
        handleMoveBroad();
      })
      .catch((err: MediaPermissionsError) => {
        callToast(t('no_microphone'));
      });
  };

  const handlePermissionVideo = async () => {
    requestMediaPermissions({ audio: false, video: true })
      .then(() => {
        handlePermissionAudio();
      })
      .catch((err: MediaPermissionsError) => {
        callToast(t('no_camera'));
      });
  };

  useEffect(() => {
    if (readyStreamResult.status === RequestStatus.SUCCESS) {
      if (type === 'external') {
        window.localStorage.setItem('isOnboard', 'onboarding');
      } else {
        window.localStorage.setItem('isOnboard', 'none');
      }
      window.location.href = PAGE_URL.STREAM;
    } else if (readyStreamResult.status === RequestStatus.FAIL) {
    }
  }, [readyStreamResult]);

  useEffect(() => {
    if (isShow) {
      setTrigger(false);
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isShow]);

  return { scrollY, type, setType, handleNext };
};

export default useSelectStreamModal;
