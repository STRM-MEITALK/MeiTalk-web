import React, { useRef, useState, useEffect } from 'react';
import { IReturnMessage } from '@type/chattingType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import useSocket from '@hooks/useSocket';
import { setIsLiveFinish } from '@slice/liveViewSlice';
import { token } from '@lib/bearerToken';

const useChatting = () => {
  const dispatch = useDispatch();
  const chatScrollRef = useRef<any>();
  const client = useSocket();
  const { chatKey } = useSelector(({ stream }: RootState) => ({
    chatKey: stream.chatKey,
  }));

  const [messages, setMessages] = useState<IReturnMessage[]>([]);

  useEffect(() => {
    chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    client.current.deactivate();
  }, []);

  return {
    chatScrollRef,
    messages,
  };
};

export default useChatting;
