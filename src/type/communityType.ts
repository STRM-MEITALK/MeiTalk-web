import { IInitState } from '@type/responseType';

export interface ICommunityInitState {
  communityList: IComunityListResponse;
  communityDetail: IComunityDetailResponse;
  postCommunity: IPostCommunityResponse;
  updateCommunity: IUpdateCommunityResponse;
  deleteCommunity: IDeleteCommunityResponse;
  commentList: ICommentListResponse;
  replyList: IReplyListState;
  postComment: IPostCommentResponse;
  postReply: IPostReplyState;
  updateComment: IUpdateCommentResponse;
  updateReply: IUpdateReplyResponse;
  deleteCommentReply: IDeleteCommentReplyResponse;
}

export interface IComunityListResponse extends IInitState {
  data: ICommunityListData;
}

export interface IComunityDetailResponse extends IInitState {
  data: ICommunityDetailData;
}

export interface ICommentListResponse extends IInitState {
  data: ICommentListData;
}
export interface IReplyListResponse extends IInitState {
  data: { list: IReplyType[]; commentId: number };
}

export interface IPostCommunityResponse extends IInitState {
  data: ICommunityType | null;
}

export interface IUpdateCommunityResponse extends IInitState {
  data: ICommunityDetailData | null;
}

export interface IDeleteCommunityResponse extends IInitState {
  data: number | null;
}

export interface IPostCommentResponse extends IInitState {
  data: ICommentType | null;
}

export interface IPostReplyResponse extends IInitState {
  data: IPostReplyType | null;
}

export interface IUpdateCommentResponse extends IInitState {
  data: IUpdateCommentReplyType | null;
}

export interface IUpdateReplyResponse extends IInitState {
  data: IUpdateCommentReplyType | null;
}

export interface IDeleteCommentReplyResponse extends IInitState {
  data: IDeleteCommentReplyType | null;
}

export interface IPostReplyState extends IInitState {
  data: Record<number, IReplyType[]>;
}

export interface IReplyListState extends IInitState {
  data: Record<number, IReplyType[]>;
}

export interface ICommunityListData {
  communityList: ICommunityType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
}

export interface ICommunityDetailData {
  id: number | null;
  channelId: number | null;
  contents: string;
  createTime: string;
  updateTime: string;
  deleteTime: string | null;
}

export interface ICommentListData {
  list: ICommentType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalComments: number;
}

export interface ICommunityType {
  id: number;
  channelId: number;
  contents: string;
  createTime: string;
  updateTime: string;
  commentCount: number;
}

export interface ICommentType {
  id: number;
  userNo: number;
  userName: string;
  channelId: number;
  communityId: number;
  commentContent: string;
  replyCount: number;
  createTime: string;
  updateTime: string;
  userPicture: string | null;
  deleted: boolean;
}

export interface IReplyType {
  id: number;
  userNo: number;
  userName: string;
  channelId: number;
  replyContent: string;
  userPicture: string | null;
  createTime: string;
  updateTime: string;
  deleted: boolean;
}

export interface IPostReplyType {
  id: IReplyType['id'];
  contentId: ICommentType['id'];
  userNo: IReplyType['userNo'];
  userName: IReplyType['userName'];
  channelId: IReplyType['channelId'];
  commentContent: IReplyType['replyContent'];
  userPicture: IReplyType['userPicture'];
  createTime: IReplyType['createTime'];
  updateTime: IReplyType['updateTime'];
  deleted: IReplyType['deleted'];
}

export interface IUpdateCommentReplyType {
  id: number;
  userNo: number;
  contentId: number;
  content: string;
  type: string;
  updateTime: string;
}

export interface IDeleteCommentReplyType {
  commentId: number;
  replyId: number;
  type: 'communityComment' | 'communityReply';
}

export interface IGetCommunityListBody {
  channelId: string;
  pageNo: number;
  pageSize: number;
}

export interface IGetCommunityDetailBody {
  contentId: number;
}

export interface IGetCommentListBody {
  communityId: string;
  pageNo: number;
  pageSize: number;
}

export interface IGetReplyListBody {
  commentId: number;
}

export interface IPostCommunityBody {
  channelId: string;
  contents: string;
}

export interface IUpdateCommunityBody {
  channelId: string;
  communityId: number;
  contents: string;
}

export interface IDeleteCommunityBody {
  channelId: string;
  communityId: number;
}

export interface IPostCommentBody {
  type: 'communityComment';
  contentId: number;
  content: string;
}

export interface IPostReplyBody {
  type: 'communityReply';
  contentId: number;
  content: string;
}

export interface IUpdateCommentBody {
  contentId: number;
  type: 'communityComment';
  content: string;
}

export interface IUpdateReplyBody {
  id: number;
  type: 'communityReply';
  content: string;
}

export interface IDeleteCommentReplyBody {
  id: number;
  type: 'communityComment' | 'communityReply';
}
