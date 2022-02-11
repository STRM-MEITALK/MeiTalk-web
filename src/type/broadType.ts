import { IInitState } from '@type/responseType';

export interface IBroadInitState {
  createChannelResult: ICreateChannelResult;
  startStreamResult: IStartStreamResult;
  streamInfo: IStreamInfo;
  endStreamInfo: IStreamInfo;
  streamType: string;
  isStreaming: 'ready' | 'streaming' | 'finish';
  chatKey: string;
  startTime: string;
  vodId: number;
  playback: string;
  playbackTrigger: string;
  playbackWrap: boolean;
  updateStreamInfoResult: IUpdateStreamInfoResult;
  endStreamResult: IInitState;
  isOnboard: 'default' | 'onboarding' | 'none';
  resetTrigger: boolean;
  readyStreamResult: IReadyStreamResult;
  readyCheckStreamResult: IReadyStreamCheckResult;
  isSetting: boolean;
  backTrigger: boolean;
  uploadStreamResult: IInitState;
}

export interface ICreateChannelResult extends IInitState {
  data: {
    rtmpUrl: string;
    streamValue: string;
    playbackUrl: string;
    playToken: string;
  };
}

export interface IStartStreamResult extends IInitState {
  data: string;
}

export interface IStreamListData {
  streams: IStreamListType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface IStreamListType {
  vodId: number;
  channelId: number;
  name: string;
  profile: string | null;
  viewCount: string;
  isLive: boolean;
  streamTime: string;
  streamLen: string;
  likeCount: number;
  title: string;
  playbackUrl: string;
  channelArn: string;
  thumbnail: string | null;
}

export interface ICreateChannelBody {
  userNo: number;
  channelName: string;
}

export interface IStartStreamBody {
  userNo: number;
  vodTitle: string;
  vodDetail: string;
  vodCategory: string | number;
}

export interface ISetStreamPayload {
  type: string;
}

export interface IIsOnboardingPayload {
  isOnboard: 'default' | 'onboarding' | 'none';
}

export interface IGetStreamInfoParam {
  userNo: string;
  isSetting: boolean;
}

export interface IEndStreamInfoParam {
  userNo: string;
}

export interface IGetStreamInfoAPIParam {
  param: { userNo: string };
  isHidden: boolean;
}

export interface IStreamInfo extends IInitState {
  data: IGetStreamInfoResult;
}

export interface IGetStreamInfoResult {
  vodId: number;
  channelId: number;
  userNo: number;
  streamId: string;
  vodTitle: string;
  vodDetail: string;
  vodCategory: string;
  playbackUrl: string;
  chatKey: string;
  transmittedType: string;
  startTime: string;
}

export interface IIsStreamingPayload extends ISetIsStreamingPayload {
  chatKey: string;
  startTime: string;
  vodId: number;
}

export interface ISetIsStreamingPayload {
  isStreaming: 'ready' | 'streaming' | 'finish';
}

export interface ICountPayload {
  count: number;
}

export interface IUpdateStreamInfoParam {
  chatKey: string;
  description: string;
  title: string;
  category: string | number;
}

export interface IUpdateStreamInfoResult extends IInitState {
  data: object;
}

export interface IEndStreamParam {
  userNo: number;
}

export interface ISetPlaybackWrapPayload {
  trigger: boolean;
}

export interface IReadyCheckStreamParam {
  token: string;
}

export interface IReadyStreamResult extends IInitState {
  data: {
    token: string;
  };
}

export interface IReadyStreamCheckResult extends IInitState {
  data: boolean;
}

export interface IUploadStreamParam {
  vodId: number;
}
