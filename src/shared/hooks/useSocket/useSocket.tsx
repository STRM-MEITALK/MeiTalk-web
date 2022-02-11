import React, { useEffect, useRef, useState } from 'react';
import { addCu } from '@slice/authSlice';
import { useDispatch } from 'react-redux';
import * as StompJs from '@stomp/stompjs';
import SockJS from './socket';

const useSocket = () => {
  const client = useRef<any>();
  const SERVER_URL = process.env.REACT_APP_DEV_CHAT_SOCKET_SERVER || '';
  const [sessioId, setSessioId] = useState(Math.random().toString(36).substring(2, 15));
  const dispatch = useDispatch();

  useEffect((): any => {
    if (sessioId && sessioId !== '') {
      dispatch(addCu(sessioId));
      client.current = new StompJs.Client({
        webSocketFactory: () =>
          new SockJS(`${SERVER_URL}/ws-stomp`, [], {
            sessionId: () => {
              return sessioId;
            },
          }),
        debug: (str: any) => {},
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onStompError: (frame: any) => {},
      });
    }
  }, [sessioId]);

  return client;
};

export default useSocket;
