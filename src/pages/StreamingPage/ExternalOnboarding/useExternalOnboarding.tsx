import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import useToast from '@components/Toast/useToast';

const useExternalOnboarding = () => {
  const { callToast } = useToast();
  const { t } = useTranslation();
  const { channel } = useSelector(({ broad }: RootState) => ({
    channel: broad.createChannelResult.data,
  }));
  const [streamKey, setStreamKey] = useState('');
  const [toggle, setToggle] = useState(false);
  const handleStreamKey = (toggle: boolean) => {
    if (toggle) {
      setStreamKey(channel.streamValue);
    } else {
      const secret = new Array(channel?.streamValue?.length ?? 0).fill('●').join('');
      setStreamKey(secret);
    }
    setToggle(!toggle);
  };

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflowX = 'unset';
    document.body.style.overflowX = 'unset';
  }, []);

  useEffect(() => {
    handleStreamKey(false);
  }, [channel?.streamValue]);

  const onCopied = useCallback(() => {
    callToast(t('common_copied'));
  }, []);

  return {
    channel,
    streamKey,
    toggle,
    onCopied,
    handleStreamKey,
  };
};

export default useExternalOnboarding;
