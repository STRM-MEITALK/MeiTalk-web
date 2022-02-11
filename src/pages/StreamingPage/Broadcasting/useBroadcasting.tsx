import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { IMessage } from '@stomp/stompjs';
import moment from 'moment';
import { logout } from '@lib/logout';
import { setCookie } from '@lib/cookieUtils';
import { setTimeZone } from '@lib/setTimeZone';
import RequestStatus from '@lib/RequestStatus';
import { token } from '@lib/bearerToken';
import { updateRefreshToken, resetTokenResult } from '@slice/authSlice';
import useSocket from '@hooks/useSocket';
import { RootState } from '@src/stores';
import { IReturnMessage } from '@src/type/chattingType';
import { isStreaming, setBackTrigger, setIsStreaming, setStream, uploadStream } from '@slice/broadSlice';
import useToast from '@components/Toast/useToast';
import { IUseBroadcastingProps, IBroadData, IConnectSocketParam } from './BroadcastingType';
import * as STC from './Broadcasting.style';

const useBroadcasting = ({ broadSetData, handleBroadData, setEndModal, handleEdit }: IUseBroadcastingProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { callToast } = useToast();
  const client = useSocket();

  const {
    userInfo,
    streamInfo,
    startTimeState,
    isStreamingState,
    streamType,
    channel,
    cu,
    endStreamResult,
    rtResult,
    playbackWrap,
    globalChatKey,
    globalStartTime,
    globalVodId,
    uploadStreamResult,
  } = useSelector(({ auth, broad }: RootState) => ({
    userInfo: auth.loginInfo.data,
    streamInfo: broad.streamInfo,
    isStreamingState: broad.isStreaming,
    startTimeState: broad.startTime,
    streamType: broad.streamType,
    channel: broad.createChannelResult.data,
    cu: auth.cu,
    endStreamResult: broad.endStreamResult.response,
    rtResult: auth.updateRT,
    playbackWrap: broad.playbackWrap,
    globalChatKey: broad.chatKey,
    globalStartTime: broad.startTime,
    globalVodId: broad.vodId,
    uploadStreamResult: broad.uploadStreamResult,
  }));

  const [broadData, setBroadData] = useState<IBroadData>({
    title: `${userInfo.username}'s live streaming`,
    category: '',
    detail: '',
  });
  const [timeText, setTimeText] = useState<string>('00:00:00');
  const timeInterval = useRef<number | null>();
  const [likeCount, setLikeCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [streamKey, setStreamKey] = useState('');
  const [toggle, setToggle] = useState(true);
  const [showViewers, setShowViewers] = useState(false);
  const [isShowSM, setIsShowSM] = useState(false);
  const [disableEditModal, setDisableEditModal] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [stopModal, setStopModal] = useState(false);
  const [startModalWait, setStartModalWait] = useState(false);
  const [stopModalWait, setStopModalWait] = useState(false);
  const tokenInterval = useRef<number | null>();
  const [isShowTitle, setIsShowTitle] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const handleStreamKey = (toggle: boolean) => {
    if (toggle) {
      setStreamKey(channel?.streamValue);
    } else {
      const secret = new Array(channel?.streamValue?.length ?? 0).fill('●').join('');
      setStreamKey(secret);
    }
    setToggle(!toggle);
  };

  const ExternalStopElement = (): JSX.Element | string => {
    if (streamType === 'external') {
      return (
        <>
          <STC.StopModalContentTitle>{t('stop_external_modal')}</STC.StopModalContentTitle>
          <STC.StopModalContentOption>{t('stop_external_option_modal')}</STC.StopModalContentOption>
        </>
      );
    } else {
      return t('stop_stream_modal');
    }
  };

  const handleUploadStream = () => {
    dispatch(uploadStream({ vodId: globalVodId }));
  };

  useEffect(() => {
    if (uploadStreamResult.status === RequestStatus.SUCCESS) {
      setEndModal(false);
      handleBack();
    }
  }, [uploadStreamResult.status]);

  useEffect(() => {
    handleStreamKey(false);
  }, [channel?.streamValue]);

  const onCopied = useCallback(() => {
    callToast(t('common_copied'));
  }, []);

  useEffect(() => {
    let title = `${userInfo.username}'s live streaming`;
    let detail = '';
    let category = 'Film & Animation';
    const { broadTitle, broadDetail, broadCategory } = broadSetData;
    if (broadTitle !== '' && broadTitle !== undefined) {
      title = broadTitle;
    }
    if (broadDetail !== '' && broadDetail !== undefined) {
      detail = broadDetail;
    }
    if (broadCategory !== undefined) {
      category = broadCategory.label;
    }
    setBroadData({
      title,
      detail,
      category,
    });
  }, []);

  useEffect(() => {
    if (isStreamingState === 'streaming') {
      handleTimeInterval();
    } else {
      handleStopTimeInterval();
      handleStopTokenInterval();
    }
  }, [isStreamingState]);

  const handleTimeInterval = () => {
    timeInterval.current = window.setInterval(() => {
      const diff = moment.duration(setTimeZone(new Date()).diff(setTimeZone(startTimeState)));
      const diffTime = {
        hour: Math.floor(diff.asHours()) < 10 ? `0${Math.floor(diff.asHours())}` : Math.floor(diff.asHours()),
        minute: diff.minutes() < 10 ? `0${diff.minutes()}` : diff.minutes(),
        second: diff.seconds() < 10 ? `0${diff.seconds()}` : diff.seconds(),
      };

      setTimeText(`${diffTime.hour}:${diffTime.minute}:${diffTime.second}`);
    }, 1000);
  };

  const handleStopTimeInterval = () => {
    if (timeInterval.current) {
      window.clearInterval(timeInterval.current);
    }
  };

  const handleStopTokenInterval = () => {
    if (tokenInterval.current) {
      window.clearInterval(tokenInterval.current);
    }
  };

  const handleEditDisable = () => {
    if (isStreamingState === 'ready') {
      setDisableEditModal(true);
    }
  };

  useEffect(() => {
    if (rtResult.response.output === 0) {
      dispatch(resetTokenResult());
    } else if (
      rtResult.response.output === -1 ||
      rtResult.response.output === -100 ||
      rtResult.response.output === -99 ||
      rtResult.response.output === -88 ||
      rtResult.response.output === -77 ||
      rtResult.response.output === -66
    ) {
      logout();
      window.location.href = PAGE_URL.LOGIN;
    }
  }, [rtResult.response.output]);

  useEffect(() => {
    return () => {
      handleStopTimeInterval();
      handleStopTokenInterval();
    };
  }, []);

  const intervalRefreshToken = () => {
    dispatch(updateRefreshToken());
  };

  const handleBack = () => {
    dispatch(setBackTrigger({ trigger: false }));
  };

  const chatScrollRef = useRef<any>();
  const [chattingKey, setChattingKey] = useState<string>('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IReturnMessage[]>([]);
  const [isFocus, setIsFocus] = useState(false);

  const connectChatting = ({ chat, startTime, vodId }: IConnectSocketParam) => {
    dispatch(isStreaming({ isStreaming: 'streaming', chatKey: chat, startTime, vodId }));
    setShareLink(`${window.location.origin}/live/${vodId}`);
    dispatch(updateRefreshToken());
    client.current.subscribe(`/create`, function (m: any) {
      const { sender, message, type, userCount, userImageUrl, sessionId, isStreamer } = JSON.parse(m.body);

      if (type === 'TALK') {
        setMessages((prev) => {
          if (prev.length > 50) {
            return [
              ...prev.slice(1),
              {
                userimg: userImageUrl,
                userName: sender,
                message,
                type: 'talk',
                sessionId,
                isStreamer: `${isStreamer}`,
              },
            ];
          } else {
            return [
              ...prev,
              {
                userimg: userImageUrl,
                userName: sender,
                message,
                type: 'talk',
                sessionId,
                isStreamer: `${isStreamer}`,
              },
            ];
          }
        });
      }
      setUserCount(userCount);
    });

    client.current.subscribe(`like`, function (m: IMessage) {
      const { likeCount } = JSON.parse(m.body);
      setLikeCount(likeCount);
    });

    client.current.subscribe(`/info`, function (m: IMessage) {
      const { title, description } = JSON.parse(m.body);
      setBroadData({
        title,
        detail: description,
        category: broadData.category,
      });
    });

    client.current.subscribe(`/end`, function (m: IMessage) {
      setStopModal(true);
      dispatch(setIsStreaming({ isStreaming: 'finish' }));
    });
    tokenInterval.current = window.setInterval(intervalRefreshToken, 86400000);
  };
  useEffect(() => {
    if (streamInfo.status === RequestStatus.SUCCESS) {
      if (streamInfo.response.output === 0) {
        if (streamInfo.data && streamType === 'e') {
          const { vodTitle, vodDetail, vodCategory, chatKey, startTime } = streamInfo.data;
          setBroadData({
            title: vodTitle,
            detail: vodDetail,
            category: vodCategory,
          });
          handleBroadData({
            title: vodTitle,
            detail: vodDetail,
            category: vodCategory,
          });
        }
      }
    }
  }, [streamInfo]);

  useEffect((): any => {
    window.scrollTo(0, 0);
    client.current.activate();
    return () => {
      client.current.deactivate();
    };
  }, []);

  useEffect(() => {
    client.current.onConnect = () => {
      client.current.subscribe(`/create`, function (m: any) {
        const { userNo, chatKey, createRoomResult, startTime, transmittedType, vodId } = JSON.parse(m.body);
        setStartModal(false);
        if (transmittedType === 'E') {
          dispatch(setStream({ type: 'external' }));
        }
        connectChatting({ chat: chatKey, startTime, vodId });
        setChattingKey(chatKey);
        if (streamType === 'Liveview' && transmittedType === 'E') {
          handleEdit(chatKey);
        }
      });
      if (streamInfo.status === RequestStatus.SUCCESS) {
        if (streamInfo.response.output === 0) {
          if (streamInfo.data && streamType === 'external') {
            const { chatKey, startTime, vodId } = streamInfo.data;
            connectChatting({ chat: chatKey, startTime, vodId });
            setChattingKey(chatKey);
          }
        }
      }
      if (globalChatKey) {
        connectChatting({ chat: globalChatKey, startTime: globalStartTime, vodId: globalVodId });
      }
    };
  }, [globalChatKey, streamInfo]);

  useEffect(() => {
    if (isStreamingState === 'finish') {
      setStopModal(false);
    }
  }, [isStreamingState]);

  useEffect(() => {
    chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages]);

  const handleMessage = (type: string, message: string, messageType: string) => {
    client.current.publish({
      destination: '/message',
      body: JSON.stringify({
        type,
        chatKey: chattingKey,
        sender: `${userInfo.username}`,
        message,
        userImageUrl: userInfo.userPicture,
        isStreamer: true,
      }),
    });
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 500) {
      setMessage(e.target.value);
    }
  }, []);

  const handleClick = () => {
    if (message) {
      handleMessage('TALK', message, 'TALK');
      setMessage('');
    }
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handlePressBan = (userList: string[], from: string, cuid: string) => {
    if (chattingKey) {
      if (from === 'c') {
        getViewers({
          chatKey: chattingKey,
        }).then((res) => {
          const banUser = res.data.data.userInfo.find((el: any) => el.userName === userList[0]);

          if (banUser) {
            client.current.unsubscribe(`/message`);
          }
        });
      } else {
        userList.forEach((el: any) => {
          client.current.unsubscribe(`/message`);
        });
      }
    }
  };

  const handleShowViewers = () => {
    setShowViewers(true);
  };

  const handleHideViewers = () => {
    setShowViewers(false);
  };

  return {
    broadData,
    timeText,
    isStreamingState,
    streamType,
    playbackWrap,
    disableEditModal,
    channel,
    streamKey,
    toggle,
    startModal,
    stopModal,
    likeCount,
    userCount,
    showViewers,
    isShowSM,
    startModalWait,
    stopModalWait,
    isShowTitle,
    isShowDetail,
    shareLink,
    handleEditDisable,
    onCopied,
    handleStreamKey,
    ExternalStopElement,
    handleShowViewers,
    handleHideViewers,
    setIsShowTitle,
    setStartModal,
    setStopModal,
    setStartModalWait,
    setStopModalWait,
    setIsShowDetail,
    handleBack,
    handleUploadStream,
  
    chatScrollRef,
    message,
    messages,
    isFocus,
    handleChange,
    handleClick,
    handlePress,
    handlePressBan,
    setIsFocus,
    setIsShowSM,
    setDisableEditModal,
  };
};

export default useBroadcasting;
