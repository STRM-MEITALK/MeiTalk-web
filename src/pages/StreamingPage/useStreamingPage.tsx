/* eslint-disable prefer-destructuring */
/* eslint-disable no-return-assign */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient, { Socket } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { PAGE_URL } from '@path';
import { RootState } from '@src/stores';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import RequestStatus from '@lib/RequestStatus';
import { setTimeZone } from '@lib/setTimeZone';
import checkUserRoles from '@lib/checkUserRoles';
import rtmpGenerator from '@lib/rtmpGenerator';
import {
  setPlayback,
  updateStreamInfo,
  startStream,
  endStream,
  getEndStreamInfo,
  setResetTrigger,
  createChannel,
  getStreamInfo,
  readyCheckStream,
  setBackTrigger,
} from '@slice/broadSlice';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import useToast from '@components/Toast/useToast';
import useCategory from '@hooks/useCategory';
import {
  IDeviceType,
  IConstraintType,
  IMediaConstraintType,
  IInfoType,
  ISelectParam,
  IHandleBroadParam,
  ImultiRtmpDestinationType,
} from './streamingTypes';

const useStreamingPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const { category, categoryOptions, setCategory } = useCategory();
  const [endModal, setEndModal] = useState(false);
  const [errorEndModal, setErrorEndModal] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [localStream, setLocalStream] = useState<MediaStream | undefined>();
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | undefined>();
  const [socket, setSocket] = useState<Socket | null>();
  const [message, setMessage] = useState<string>();
  const [cameras, setCameras] = useState<IDeviceType[]>([]);
  const [audios, setAudios] = useState<IDeviceType[]>([]);
  const [constraint, setConstraint] = useState<IConstraintType>({
    videoDeviceId: '',
    audioDeviceId: '',
  });
  const [volume, setVolume] = useState<number>(0);
  const [step, setStep] = useState<string>('default');
  const viewRef = useRef<HTMLVideoElement>(null);
  const testRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const canvasRectRef = useRef<any>(null);
  const [cameraOptions, setCameraOptions] = useState<IOptionType[]>();
  const [cameraValue, setCameraValue] = useState<IOptionType>();
  const [audioOptions, setAudioOptions] = useState<IOptionType[]>();
  const [audioValue, setAudioValue] = useState<IOptionType>();
  const [broadTitle, setBroadTitle] = useState<string>('');
  const [titlePlaceholder, setTitlePlaceholder] = useState<string>('');
  const [broadDetail, setBroadDetail] = useState<string>('');
  const [broadCategory, setBroadCategory] = useState<IOptionType>({ label: 'Film & Animation', value: 1 });
  const [detailDisable, setDetailDisable] = useState<boolean>(false);
  const [userNo, setUserNo] = useState(0);
  const [videoComponent, setVideoComponent] = useState<JSX.Element | undefined>();
  const [chatKeyTrigger, setChatKeyTrigger] = useState<string | null>();
  const [isOnboard, setIsOnboard] = useState<string>(window.localStorage.getItem('isOnboard') ?? 'none');
  const [multiRtmpDestination, setMultiRtmpDestination] = useState<ImultiRtmpDestinationType[]>([]);
  const [externalTriggerFalse, setExternalTriggerFalse] = useState(true);

  const {
    startStreamResult,
    channelInfo,
    chatKey,
    userInfo,
    streamType,
    streamInfo,
    endStreamResult,
    isStreaming,
    endStreamInfo,
    updateStreamInfoResult,
    readyCheckStreamResult,
    backTrigger,
  } = useSelector(({ auth, broad }: RootState) => ({
    startStreamResult: broad.startStreamResult,
    channelInfo: broad.createChannelResult,
    chatKey: broad.chatKey,
    userInfo: auth.loginInfo.data,
    streamType: broad.streamType,
    streamInfo: broad.streamInfo,
    endStreamResult: broad.endStreamResult.response,
    isStreaming: broad.isStreaming,
    endStreamInfo: broad.endStreamInfo,
    updateStreamInfoResult: broad.updateStreamInfoResult,
    readyCheckStreamResult: broad.readyCheckStreamResult,
    backTrigger: broad.backTrigger,
  }));
  const [soundOnlyStream, setSoundOnlyStream] = useState<MediaStream>();

  useEffect(() => {
    if (readyCheckStreamResult.status === RequestStatus.SUCCESS) {
      if (readyCheckStreamResult.data) {
        const userNum = Number(userInfo.userId);
        if (!Number.isNaN(userNum)) {
          setUserNo(userNum);
          dispatch(createChannel({ userNo: userNum, channelName: 'test' }));
          dispatch(getStreamInfo({ userNo: userInfo.userId, isSetting: true }));
        }
        setBroadTitle(`${userInfo.username}'s live streaming`);
        setTitlePlaceholder(`${userInfo.username}'s live streaming`);
        window.localStorage.removeItem('readyStream');
      } else {
        window.localStorage.removeItem('readyStream');
        dispatch(setBackTrigger({ trigger: false }));
      }
    }
  }, [userInfo, readyCheckStreamResult]);

  useEffect(() => {
    if (!backTrigger) {
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  }, [backTrigger]);

  useEffect(() => {
    if (checkUserRoles() !== 'STREAMER') {
      dispatch(setBackTrigger({ trigger: false }));
    }
    const readyStream = window.localStorage.getItem('readyStream');
    if (readyStream) {
      dispatch(readyCheckStream({ token: readyStream }));
    } else {
      dispatch(setBackTrigger({ trigger: false }));
    }
    dispatch(setResetTrigger());
  }, []);

  useEffect(() => {
    if (streamType === 'external') {
      if (isOnboard === 'onboarding') {
        setStep('onboarding');
      } else {
        setStep('broadcast');
      }
    } else if (streamType === 'Liveview') {
      setStep('camera');
    }
  }, [streamType, isOnboard]);

  const handleBroadTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 100) {
      setBroadTitle(value);
    }
  };
  const handleBroadDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setBroadDetail(value);
  };

  const handleMultiRtmpDestination = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: 'mediaServer' | 'streamKey',
  ) => {
    const { value } = e.target;
    setMultiRtmpDestination(
      multiRtmpDestination.map((rtmp, idx) => {
        if (idx === index) {
          rtmp[name] = value;
        }
        return rtmp;
      }),
    );
  };

  const handleMultiStreamToggle = (toggle: boolean) => {
    if (toggle) {
      setMultiRtmpDestination([
        {
          mediaServer: '',
          streamKey: '',
        },
      ]);
    } else {
      setMultiRtmpDestination([]);
    }
  };

  const handleAddRtmp = () => {
    if (multiRtmpDestination.length < 2) {
      setMultiRtmpDestination([
        ...multiRtmpDestination,
        {
          mediaServer: '',
          streamKey: '',
        },
      ]);
    }
  };

  const handleRemoveRtmp = (idx: number) => {
    setMultiRtmpDestination(multiRtmpDestination.filter((rtmp, index) => index !== idx));
  };

  useEffect(() => {
    if (multiRtmpDestination.length > 0) {
      setExternalTriggerFalse(true);
    } else {
      setExternalTriggerFalse(false);
    }
  }, [multiRtmpDestination]);

  const handleBroadCategory = (data: IOptionType) => {
    setCategory(data);
  };

  useEffect(() => {
    if (isStreaming === 'streaming') {
      dispatch(setPlayback({ type: setPlaybackUrl(channelInfo.data.playbackUrl, channelInfo.data.playToken) }));
    }
  }, [channelInfo, isStreaming]);

  useEffect(() => {
    if (broadTitle !== '' && category) {
      setDetailDisable(false);
    } else {
      setDetailDisable(true);
    }
  }, [broadTitle, category]);

  const handleBroadData = (data: IHandleBroadParam) => {
    setBroadTitle(data.title);
    setBroadDetail(data.detail);
    let idx = categoryOptions?.findIndex((option) => option.value === data.category) ?? 0;
    if (idx === -1) {
      idx = 0;
    }
    if (categoryOptions) {
      setCategory(categoryOptions[idx]);
    }
  };

  const handleEdit = (chatKeyProp?: string | null) => {
    if (isStreaming === 'streaming') {
      setChatKeyTrigger(chatKeyProp);
      dispatch(
        updateStreamInfo({
          chatKey: !chatKeyProp ? chatKey : chatKeyProp,
          description: broadDetail,
          title: broadTitle,
          category: category.value,
        }),
      );
    }
  };

  useEffect(() => {
    if (
      updateStreamInfoResult.status === RequestStatus.SUCCESS &&
      updateStreamInfoResult.response.output === 0 &&
      !chatKeyTrigger
    ) {
      callToast(t('edit_successfully'));
    }
  }, [updateStreamInfoResult]);

  const listener = useCallback(
    (event: BeforeUnloadEvent) => {
      if (backTrigger) {
        event.preventDefault();
        event.returnValue = '';
      }
      dispatch(setBackTrigger({ trigger: true }));
    },
    [backTrigger],
  );

  const handleRemoveBeforeUnload = () => {
    window.removeEventListener('beforeunload', listener);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', listener);
    return () => {
      handleRemoveBeforeUnload();
    };
  }, [backTrigger]);

  const getSources = async (newMyStream: MediaStream) => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameraDevices = devices.filter((device) => device.kind === 'videoinput' && device.deviceId !== 'default');
      const audioDevices = devices.filter((device) => device.kind === 'audioinput' && device.deviceId !== 'default');
      const currentCamera = newMyStream.getVideoTracks()[0];
      const currentAudio = newMyStream.getAudioTracks()[0];
      let cameraArr: IDeviceType[] = [];
      let audioArr: IDeviceType[] = [];
      cameraDevices.forEach((camera) => {
        cameraArr = [
          ...cameraArr,
          {
            deviceId: camera.deviceId,
            label: camera.label,
            selected: currentCamera.label.includes(camera.label) || camera.label.includes(currentCamera.label),
          },
        ];
      });
      audioDevices.forEach((audio) => {
        audioArr = [
          ...audioArr,
          {
            deviceId: audio.deviceId,
            label: audio.label,
            selected: currentAudio.label.includes(audio.label) || audio.label.includes(currentAudio.label),
          },
        ];
      });
      setCameras(cameraArr);
      setAudios(audioArr);
    } catch (error) {
      
    }
  };

  const getMedia = async (constraint?: IConstraintType) => {
    try {
      const initConstrains = {
        audio: { sampleRate: 22050, echoCancellation: true },
        video: {
          width: { min: 100, ideal: 1920, max: 1920 },
          height: { min: 100, ideal: 1080, max: 1080 },
          frameRate: { ideal: 15 },
        },
      };
      let medaiConstrains: IMediaConstraintType = initConstrains;

      if (constraint?.videoDeviceId !== '') {
        medaiConstrains = {
          ...medaiConstrains,
          video: {
            deviceId: { exact: constraint?.videoDeviceId },
            width: { min: 100, ideal: 1920, max: 1920 },
            height: { min: 100, ideal: 1080, max: 1080 },
            frameRate: { ideal: 15 },
          },
        };
      }

      if (constraint?.audioDeviceId !== '') {
        medaiConstrains = {
          ...medaiConstrains,
          audio: { deviceId: { exact: constraint?.audioDeviceId }, sampleRate: 22050, echoCancellation: true },
        };
      }

      const soundOnlyContraints = {
        audio: { ...medaiConstrains.audio },
        video: false,
      };
      const newSoundStream = await navigator.mediaDevices.getUserMedia(soundOnlyContraints);
      setSoundOnlyStream(newSoundStream);
      const newMyStream = await navigator.mediaDevices.getUserMedia(medaiConstrains);
      setLocalStream(newMyStream);
      if (viewRef.current) {
        viewRef.current.srcObject = newMyStream;
      }
      await getSources(newMyStream);
    } catch (e) {

    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (localStream) {
      const audioContext = new AudioContext();
      const audioStream = localStream.getAudioTracks()[0];
      const audioSource = audioContext.createMediaStreamSource(localStream);
      const destination = audioContext.createMediaStreamDestination();
      const gainNode = audioContext.createGain();
      audioSource.connect(gainNode);
      gainNode.connect(audioContext.destination);
      const volume = parseInt(e.target.value) / 100;
      gainNode.gain.setValueAtTime(volume, audioContext.currentTime + 1);
      localStream.removeTrack(audioStream);
      localStream.addTrack(destination.stream.getAudioTracks()[0]);
    }
  };

  const handleSourceToggle = (type: string) => {
    if (localStream) {
      if (type === 'audio') {
        localStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
      } else if (type === 'video') {
        localStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
      }
    }
  };

  useEffect(() => {
    const tempCameraOptions: IOptionType[] = cameras.map((camera: IDeviceType) => {
      if (camera.selected) {
        setCameraValue({ value: camera.deviceId, label: camera.label });
      }
      return { value: camera.deviceId, label: camera.label };
    });
    setCameraOptions(tempCameraOptions);
  }, [cameras]);

  useEffect(() => {
    const tempAudioOptions: IOptionType[] = audios.map((audio: IDeviceType) => {
      if (audio.selected) {
        setAudioValue({ value: audio.deviceId, label: audio.label });
      }
      return { value: audio.deviceId, label: audio.label };
    });
    setAudioOptions(tempAudioOptions);
  }, [audios]);

  const handleSelect = ({ name, value }: ISelectParam) => {
    setConstraint({ ...constraint, [name]: value.value });
    if (name === 'videoDeviceId') {
      setCameraValue(value);
    } else if (name === 'audioDeviceId') {
      setAudioValue(value);
    }
  };

  useEffect(() => {
    if (step !== 'default') {
      getMedia(constraint);
    }
  }, [constraint, step]);

  const [soundRecorder, setSoundRecorder] = useState<MediaRecorder>();

  useEffect(() => {
    if (soundRecorder) {
      soundRecorder.start(250);
      soundRecorder.onstop = function (e) {
        if (soundRecorder.state === 'inactive') {
          soundRecorder.start(500);
        }
      };
      let chunk: Blob[] = [];
      let count = 0;
      const time: string = setTimeZone(new Date()).format();
      let metaData: Blob;
      let timeStamp: number;
      soundRecorder.ondataavailable = function (e) {
        if (message !== 'onAir') {
          setMessage('onAir');
        }
        if (count === 1) {
          const diff = moment.duration(setTimeZone(new Date()).diff(setTimeZone(time ?? '')));
          timeStamp = diff.asSeconds();
        }
        chunk.push(e.data);
        if (count === 0) {
          metaData = e.data;
        }
        count += 1;
        if (count >= 40) {
          const blob = new Blob(chunk, { type: 'audio/ogg; codecs=opus' });
          socket?.emit('sound', {
            timeStamp,
            data: blob,
          });
          chunk = [metaData];
          count = 1;
        }
      };
    }
  }, [soundRecorder]);

  const handleConnect = useCallback(() => {
    const socketUrl = process.env.REACT_APP_DEV_ENCODING_SERVER ?? '';

    setSocket(socketIOClient(socketUrl));
  }, []);

  useEffect(() => {
    if (socket && url !== '' && step === 'broadcast') {
      socket.emit('rtmp', url);
      socket.emit('gg', 'gg');
      multiRtmpDestination.forEach((rtmp) => {
        const destination = rtmpGenerator(rtmp.mediaServer, rtmp.streamKey);
        const message = {
          userNo: userInfo.userId,
          multiRtmpDestination: destination,
        };
        socket.emit('multi', message);
      });

      socket.on('m', (m: any) => {
        setMessage(m);
      });
    }
  }, [socket, url, step]);

  /**
   * Start Broadcasting
   */

  useEffect(() => {
    if (streamType === 'Liveview')
      if (channelInfo.status === RequestStatus.SUCCESS) {
        setUrl(channelInfo.data.rtmpUrl.concat(channelInfo.data.streamValue));
        handleConnect();
      }
  }, [channelInfo.status, streamType]);

  const handleStart = () => {
    dispatch(
      startStream({
        userNo,
        vodTitle: broadTitle,
        vodDetail: broadDetail,
        vodCategory: category.value,
      }),
    );
  };

  useEffect(() => {
    if (startStreamResult.status === RequestStatus.SUCCESS) {
      if (startStreamResult.response.output === 0) {
        if (localStream && soundOnlyStream) {
          setMediaRecorder(new MediaRecorder(localStream));
          setSoundRecorder(new MediaRecorder(soundOnlyStream));
        }
      }
    }
  }, [startStreamResult]);

  useEffect(() => {
    if (socket && chatKey !== '') {
      socket.emit('c', {
        chatKey,
      });
    }
  }, [socket, chatKey]);

  useEffect(() => {
    if (step === 'broadcast') {
      setMultiRtmpDestination(
        multiRtmpDestination.filter(
          (destination) => destination.mediaServer.includes('rtmps://') || destination.mediaServer.includes('rtmp://'),
        ),
      );
    }
  }, [step]);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.start(250);
      mediaRecorder.onstop = function (e) {
        if (mediaRecorder.state === 'inactive') {
          mediaRecorder.start(500);
        }
      };

      mediaRecorder.onerror = function (event) {
        mediaRecorder.stop();
        socket?.emit('f');
        socket?.disconnect();
        setSocket(null);
      };
      mediaRecorder.ondataavailable = function (e) {
        if (message !== 'onAir') {
          setMessage('onAir');
        }
        socket?.emit('b', e.data);
        multiRtmpDestination.forEach((rtmp) => {
          const proc = rtmpGenerator(rtmp.mediaServer, rtmp.streamKey);
          socket?.emit('m', {
            processName: proc,
            data: e.data,
          });
        });
      };
    }
  }, [mediaRecorder]);

  const handleFinish = () => {
    dispatch(getEndStreamInfo({ userNo: userInfo.userId }));
  };

  useEffect(() => {
    if (endStreamInfo.status === RequestStatus.SUCCESS) {
      if (endStreamInfo.data !== null) {
        dispatch(endStream({ userNo }));
      } else {
        setEndModal(true);
      }
    }
  }, [endStreamInfo]);

  useEffect(() => {
    if (isStreaming === 'finish') {
      setEndModal(true);
      if (endStreamResult.output === 0) {
        if (mediaRecorder) {
          mediaRecorder.stop();
          socket?.emit('f');
          socket?.disconnect();
          setSocket(null);
        }
      }
    }
  }, [endStreamResult, isStreaming]);

  return {
    viewRef,
    cameras,
    audios,
    step,
    constraint,
    cameraOptions,
    cameraValue,
    audioOptions,
    audioValue,
    categoryOptions,
    category,
    broadDetail,
    broadTitle,
    detailDisable,
    endModal,
    errorEndModal,
    videoComponent,
    titlePlaceholder,
    multiRtmpDestination,
    externalTriggerFalse,
    handleStart,
    handleFinish,
    handleSelect,
    handleVolume,
    handleSourceToggle,
    setStep,
    handleBroadCategory,
    handleBroadDetail,
    handleBroadTitle,
    handleBroadData,
    handleEdit,
    setEndModal,
    setErrorEndModal,
    handleMultiRtmpDestination,
    handleAddRtmp,
    handleRemoveRtmp,
    handleMultiStreamToggle,
  };
};

export default useStreamingPage;
