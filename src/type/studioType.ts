import { IInitState } from '@type/responseType';
import { Key } from 'react';

export interface IStudioInitState {
  afterVideoList: IAfterVideoListResponse;
  likedVideoList: IAfterVideoListResponse;
  myVideoList: IAfterVideoListResponse;
  deleteSaveResponse: IDeleteResponse;
  deleteLikeResponse: IDeleteResponse;
  updateResponse: IVodInfo;
  deleteVodResponse: IDeleteVodResponse;
  getVideoInfo: IStudioEditViewInfoResponse;
  getChannelInfo: IGetChannelInfoResponse;
  getChannelVideo: IChannelVideoResponse;
  getChannelTopVideo: IChannelVideoTopResponse;
  editChannelInfo: IEditChannelInfoResponse;
  postBannerImageResult: IPostBannerResponse;
  deleteBannerImageResult: IInitState;
}

export interface IGetAfterVideoListBody {
  type: string;
  search: string;
  pageNo: number;
  pageSize: number;
}

export interface IGetMyVideoListBody {
  isPublic: any;
  orderType: string;
  search: string;
  pageNo: number;
  pageSize: number;
}

export interface IGetChannelVideoListBody {
  channelId: string;
  orderType: string;
  search: string;
  pageNo: number;
  pageSize: number;
}

export interface IAfterVideoType {
  id: Key | null | undefined;
  vodId: number;
  channelId: number;
  name: string;
  profile: string | null;
  viewCount: number;
  isLive: boolean;
  streamTime: string;
  streamLen: string;
  likeCount: number;
  title: string;
  playbackUrl: string;
  channelArn: string;
  thumbnail: string | null;
  playToken: string;
  displayFlag: string;
  commentCount: number;
}

export interface IChannelVideoType {
  id: Key | null | undefined;
  vodId: number;
  channelId: number;
  name: string;
  profile: string | null;
  viewCount: number;
  isLive: boolean;
  streamTime: string;
  streamLen: string;
  likeCount: number;
  title: string;
  playbackUrl: string;
  channelArn: string;
  thumbnail: string | null;
  playToken: string;
  displayFlag: string;
  commentCount: number;
  isOwner: boolean;
  detail: string;
}

export interface IStudioEditViewInfoType {
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

export interface IMyPageListItemProps {
  item: IAfterVideoType;
  activeTab: number;
  type: string;
}

export interface IAfterVideoListData {
  streams: IAfterVideoType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface IChannelVideoListData {
  streams: IChannelVideoType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface IUpdateVodInfoParam {
  vodId: string;
  vodTitle: string;
  vodDetail: string;
  vodCategory: string;
  public: boolean;
}

export interface IDeleteVodParam {
  vodId: string;
}

export interface IUserProfile {
  userNo: number | null;
  mailId: string;
  userPicture: string;
  userName: string;
  userCreateTime: string;
  updateTime: string;
}

export interface IGetChannelInfoParam {
  channelId: string;
}

export interface IEditChannelInfoParam {
  channelId: number;
  description: string;
}

export interface IGetChannelInfoBody {
  channelId: number;
  userProfile: IUserProfile;
  chImg: string | null;
  description: string;
  isMe: string;
  views: number;
}

export interface IGetChannelVideoBody {
  isMe: string;
}

export interface IGetChannelInfoResponse extends IInitState {
  data: IGetChannelInfoBody;
}

export interface IVodDelete extends IInitState {
  data: IDeleteVodParam;
}

export interface IVodInfo extends IInitState {
  data: IUpdateVodInfoParam;
}

export interface IAfterVideoListResponse extends IInitState {
  data: IAfterVideoListData;
}

export interface IGetStudioVideoInfoBody {
  vodId: string;
}

export interface IStudioEditViewInfoResponse extends IInitState {
  data: IStudioEditViewInfoType;
}

export interface IChannelVideoResponse extends IInitState {
  data: IChannelVideoListData;
}

export interface IChannelVideoTopResponse extends IInitState {
  data: IChannelVideoType;
}

export interface IDeleteResponse extends IInitState {}

export interface IDeleteVodResponse extends IInitState {}

export interface IEditChannelInfoResponse extends IInitState {}

export interface IPostBannerPayload {
  channelId: number;
  data: FormData;
}

export interface IDeleteBannerPayload {
  channelId: number;
}

export interface IPostBannerResponse extends IInitState {
  data: string;
}
