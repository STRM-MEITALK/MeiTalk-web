import { IInitState } from '@type/responseType';

export interface ILiveViewInitState {
  liveViewInfo: ILiveViewInfoResponse;
  isLiveFinish: boolean;
}

export interface ILiveViewInfoResponse extends IInitState {
  data: ILiveViewInfoType;
}

export interface ILiveViewInfoType {
  channelId: number | null;
  vodId: number | null;
  title: string;
  detail: string;
  name: string;
  playToken: string;
  profile: string | null;
  isLike: boolean;
  isSave: boolean;
  streamTime: string;
  chatKey: string | null;
  viewCount: number;
  likeCount: number;
  playbackUrl: string;
  vodUrls: Record<string, string>;
}

export interface IGetLiveViewInfoBody {
  vodId: string;
}

export interface IUpdateLikeBody {
  vodId: ILiveViewInfoType['vodId'];
  chatKey: ILiveViewInfoType['chatKey'];
}

export interface IUpdateLikeResponse extends IInitState {
  data: {
    chatKey: ILiveViewInfoType['chatKey'];
    likeToggle: ILiveViewInfoType['isLike'];
  };
}

export interface IUpdateSaveBody {
  vodId: ILiveViewInfoType['vodId'];
}

export interface IUpdateSaveResponse extends IInitState {
  data: {
    vodId: ILiveViewInfoType['vodId'];
    saveToggle: ILiveViewInfoType['isSave'];
  };
}

export interface IPlayerProps {
  fullScreen: boolean;
  onClickToggleFullScreen: () => void;
}

export interface IGetViewers {
  chatKey: string;
}

export interface IPostEliminate {
  chatKey: string;
  viewersUserNo: string;
}
