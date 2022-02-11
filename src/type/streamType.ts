import { IInitState } from '@type/responseType';
import { Key } from 'react';

export interface IStreamInitState {
  streamListInfo: IStreamListInfo;
  liveListInfo: IStreamListInfo;
  liveFrameListInfo: IStreamListInfo;
  hotListInfo: IStreamListInfo;
  updateListInfo: IStreamListInfo;
  weeklyListInfo: IStreamListInfo;
  monthlyListInfo: IStreamListInfo;
  chatKey: string;
  updateStreamSave: IUpdateStreamSaveResult;
}

export interface IStreamListInfo extends IInitState {
  data: IStreamListData;
}

export interface ICreateChannelResult extends IInitState {
  data: {
    rtmpUrl: string;
    streamValue: string;
  };
}

export interface IStartStreamResult extends IInitState {
  data: string;
}

export interface IUpdateStreamSaveResult extends IInitState {
  data: IUpdateStreamSaveResponse | null;
}

export interface IStreamListData {
  streams: IStreamListType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface IStreamListType {
  id: Key | null | undefined;
  vodId: number;
  channelId: number;
  name: string;
  profile: string | null;
  viewCount: string;
  isLive: boolean;
  isSave: boolean;
  streamTime: string;
  streamLen: string;
  likeCount: number;
  title: string;
  playbackUrl: string;
  channelArn: string;
  thumbnail: string | null;
  playToken: string;
  chatKey: string;
}

export type StreamType = 'ALL' | 'LIVE' | 'VOD' | 'HOT' | 'WEEKLY' | 'MONTHLY';

export interface IGetStreamListBody {
  type: StreamType;
  pageNo: number;
  pageSize: number;
  vodId?: number;
}

export interface IUpdateStreamSaveBody {
  vodId: number;
  isSave?: boolean;
}

export interface IUpdateStreamSaveResponse {
  vodId: number;
  saveToggle: boolean;
}
