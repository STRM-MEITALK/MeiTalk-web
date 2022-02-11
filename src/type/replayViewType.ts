import { IInitState } from '@type/responseType';

export interface IReplayViewInitState {
  replayViewInfo: IReplayViewInfoResponse;
  updateViewCount: IUpdateViewCountResponse;
}

export interface IReplayViewInfoResponse extends IInitState {
  data: IReplayViewInfoType;
}

export interface IUpdateViewCountResponse extends IInitState {
  data: IReplayViewInfoType['viewCount'];
}

export interface IReplayViewInfoType {
  owner: number | null;
  channelId: number | null;
  vodId: string;
  title: string;
  detail: string;
  name: string;
  profile: string | null;
  isLike: boolean;
  isSave: boolean;
  streamTime: string;
  chatKey: string;
  viewCount: number;
  likeCount: number;
  playbackUrl: string;
  thumbnail: string | null;
  vodUrls: Record<string, string>;
  isPublic: boolean;
  category: string;
  captions: Record<string, string> | null;
}

export interface IGetReplayViewInfoBody {
  vodId: string;
}

export interface IUpdateLikeBody {
  vodId: IReplayViewInfoType['vodId'];
}

export interface IUpdateViewCountBody {
  vodId: IReplayViewInfoType['vodId'];
}

export interface IUpdateSaveBody {
  vodId: IReplayViewInfoType['vodId'];
}

export interface IUpdateSaveResponse extends IInitState {
  data: {
    vodId: IReplayViewInfoType['vodId'];
    saveToggle: IReplayViewInfoType['isSave'];
  };
}

export interface IUpdateLikeResponse extends IInitState {
  data: {
    userNo: number;
    typeId: number;
    type: string;
    likeCount: number;
    likeToggle: boolean;
  };
}
