import React, { useRef, useState, useEffect, useCallback } from 'react';
import useInterval from '@hooks/useInterval';
import { useSelector } from 'react-redux';
import { IHandleMessage, IReturnMessage } from '@type/chattingType';
import { RootState } from '@src/stores';

const useChatting = (handleMessage: IHandleMessage, messages: IReturnMessage[]) => {
  const chatScrollRef = useRef<any>();

  const [message, setMessage] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [ableCount, setAbleCount] = useState(0);
  const [showDonate, setShowDonate] = useState(false);

  const { isFullScreen } = useSelector(({ player }: RootState) => ({
    isFullScreen: player.isFullScreen,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 500) {
      setMessage(e.target.value);
    }
  }, []);

  useInterval(() => {
    if (ableCount > 0) {
      setAbleCount(ableCount - 1);
    }
  }, 3000);

  return {
    chatScrollRef,
    message,
    isFocus,
    isFullScreen,
    showDonate,
    handleChange,
    setIsFocus,
    setShowDonate,
  };
};

export default useChatting;
