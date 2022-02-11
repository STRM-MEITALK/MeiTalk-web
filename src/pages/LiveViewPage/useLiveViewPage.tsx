import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { IMessage } from '@stomp/stompjs';
import RequestStatus from '@lib/RequestStatus';
import { setTimeZone } from '@lib/setTimeZone';
import useSocket from '@hooks/useSocket';
import { RootState } from '@src/stores';
import { getStreamList } from '@slice/streamSlice';
import { getLiveViewInfo, setLiveInfo, setLiveLikeCnt, setViewCount, setIsLiveFinish } from '@slice/liveViewSlice';
import { handleErrorModal, handleLoginModal, handleBanModal, handleAccessDenyModal } from '@slice/globalModalSlice';
import { token } from '@lib/bearerToken';
import { IReturnMessage, ILiveVIewSubHeader, IPubHeaders } from '@type/chattingType';
import { handleIsFullScreen, updateCaption } from '@slice/playerSlice';
import useModal from '@hooks/useModal';

const useLiveViewPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { vodId } = useParams();
  const client = useSocket();
  const navigate = useNavigate();
  const { enterUrlCheck } = useModal();

  const [chatHeight, setChatHeight] = useState<number | undefined>(0);
  const [streamTime, setStreamTime] = useState<string>('00:00:00');
  const [intervalTime, setIntervalTime] = useState<any>(null);
  const [isShowChat, setIsShowChat] = useState(true);
  const [isShowChatM, setIsShowChatM] = useState(false);
  const [messages, setMessages] = useState<IReturnMessage[]>([]);
  const [isShowSM, setIsShowSM] = useState(false);
  const chatHeightRef = useRef<HTMLDivElement>(null);
  const [isShowOM, setIsShowOM] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowTitle, setIsShowTitle] = useState(false);

  const {
    liveViewInfoStatus,
    liveViewInfo,
    streamList,
    pageNo,
    totalElements,
    isLiveFinish,
    userName,
    userId,
    userPicture,
    cu,
  } = useSelector(({ liveView, stream, auth, player }: RootState) => ({
    liveViewInfoStatus: liveView.liveViewInfo.status,
    liveViewInfo: liveView.liveViewInfo.data,
    streamList: stream.streamListInfo.data.streams,
    pageNo: stream.streamListInfo.data.pageNo,
    totalElements: stream.streamListInfo.data.totalElements,
    isLiveFinish: liveView.isLiveFinish,
    userPicture: auth.loginInfo.data.userPicture,
    userName: auth.loginInfo.data.username,
    userId: auth.loginInfo.data.userId,
    cu: auth.cu,
  }));

  const fetchLiveViewInfo = useCallback(() => {
    if (vodId) {
      dispatch(getLiveViewInfo({ vodId }));
    }
  }, []);

  const fetchStreamList = useCallback(
    (pageNo) => {
      if (vodId) {
        dispatch(
          getStreamList({
            type: 'ALL',
            pageNo,
            pageSize: 24,
            vodId: parseFloat(vodId),
          }),
        );
      } else {
        dispatch(
          getStreamList({
            type: 'ALL',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [vodId],
  );

  const handleShowChat = (isShow: boolean) => {
    setIsShowChat(isShow);
  };

  const handleShowChatM = (isShow: boolean) => {
    setIsShowChatM(isShow);
  };

  const handleMessage = useCallback(
    (type: string, message: string, messageType: string) => {
      if (!client.current.connected) {
        return;
      }

      const headers: IPubHeaders = {
        priority: '9',
        MessageType: messageType,
        CUID: cu,
      };

      if (token().headers?.AUTHORIZATION) {
        headers.Authorization = token().headers?.AUTHORIZATION;
      }
    },
    [liveViewInfo.chatKey],
  );

  useEffect(() => {
    let time: any = null;

    if (liveViewInfo.streamTime !== '') {
      time = setInterval(() => {
        const diff = moment.duration(setTimeZone(new Date()).diff(setTimeZone(liveViewInfo.streamTime)));
        const diffTime = {
          hour: Math.floor(diff.asHours()) < 10 ? `0${Math.floor(diff.asHours())}` : Math.floor(diff.asHours()),
          minute: diff.minutes() < 10 ? `0${diff.minutes()}` : diff.minutes(),
          second: diff.seconds() < 10 ? `0${diff.seconds()}` : diff.seconds(),
        };

        setStreamTime(`${diffTime.hour}:${diffTime.minute}:${diffTime.second}`);
      }, 1000);

      setIntervalTime(time);
    }

    return () => {
      clearInterval(time);
    };
  }, [liveViewInfo.streamTime]);

  useEffect(() => {
    if (isLiveFinish && intervalTime) {
      clearInterval(intervalTime);
    }
  }, [isLiveFinish, intervalTime]);

  useEffect(() => {
    if (liveViewInfoStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [liveViewInfoStatus]);

  useEffect(() => {
    fetchLiveViewInfo();
    fetchStreamList(0);

    return () => {
      client.current.deactivate();
    };
  }, []);

  useEffect(() => {
    if (chatHeightRef.current) {
      setChatHeight(window.innerHeight - chatHeightRef.current?.offsetTop);
    }
  }, [isShowChatM]);

  return {
    liveViewInfoStatus,
    chatHeightRef,
    chatHeight,
    liveViewInfo,
    streamList,
    pageNo,
    streamTime,
    totalElements,
    isShowChat,
    messages,
    isLiveFinish,
    isShowSM,
    isShowOM,
    isShowDetail,
    isShowChatM,
    isShowTitle,
    setIsShowOM,
    setChatHeight,
    fetchStreamList,
    handleShowChat,
    handleShowChatM,
    handleMessage,
    setIsShowSM,
    setIsShowDetail,
    setIsShowTitle,
  };
};

export default useLiveViewPage;
