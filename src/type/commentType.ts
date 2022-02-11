import { IInitState } from '@type/responseType';

export interface ICommentInitState {
  commentList: ICommentListResponse;
  replyList: IReplyListState;
  postComment: IPostCommentResponse;
  postReply: IPostReplyState;
  updateCommentLike: IUpdateCommentLikeResponse;
  updateReplyLike: IUpdateReplyLikeResponse;
  updateComment: IUpdateCommentResponse;
  updateReply: IUpdateReplyResponse;
  deleteCommentReply: IDeleteCommentReplyResponse;
  deleteCommentStudio: IDeleteCommentReplyResponse;
}

export interface IReplyListState extends IInitState {
  data: Record<number, IReplyType[]>;
}

export interface IPostReplyState extends IInitState {
  data: Record<number, IReplyType[]>;
}

export interface ICommentListData {
  list: ICommentType[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalComments: number;
}

export interface ICommentType {
  id: number;
  userNo: number;
  userName: string;
  channelId: number;
  vodId: number;
  commentContent: string;
  replyCount: number;
  createTime: string;
  updateTime: string;
  userPicture: string | null;
  likeCount: number;
  likeIs: boolean | null;
  deleted: boolean;
}

export interface IReplyType {
  id: number;
  userNo: number;
  userName: string;
  channelId: number;
  replyContent: string;
  likeCount: number;
  userPicture: string | null;
  createTime: string;
  updateTime: string;
  likeIs: boolean | null;
  deleted: boolean;
}

export interface IPostReplyType {
  id: IReplyType['id'];
  contentId: ICommentType['id'];
  userNo: IReplyType['userNo'];
  userName: IReplyType['userName'];
  channelId: IReplyType['channelId'];
  commentContent: IReplyType['replyContent'];
  likeCount: IReplyType['likeCount'];
  userPicture: IReplyType['userPicture'];
  createTime: IReplyType['createTime'];
  updateTime: IReplyType['updateTime'];
  likeIs: IReplyType['likeIs'];
  deleted: IReplyType['deleted'];
}

export interface IUpdateCommentLikeType {
  likeCount: number;
  likeToggle: boolean;
  type: string;
  typeId: number;
  userNo: number;
}

export interface IUpdateReplyLikeType {
  commentId: number;
  likeCount: number;
  likeToggle: boolean;
  type: string;
  typeId: number;
  userNo: number;
}

export interface IUpdateCommentReplyType {
  id: number;
  userNo: number;
  contentId: number;
  content: string;
  type: string;
  updateTime: string;
}

export interface IGetCommentListBody {
  vodId: string;
  pageNo: number;
  pageSize: number;
}

export interface IDeleteCommentReplyType {
  commentId: number;
  replyId: number;
  type: 'comment' | 'reply';
}

export interface IGetReplyListBody {
  commentId: number;
}

export interface IPostCommentBody {
  type: 'comment';
  contentId: number;
  content: string;
}

export interface IPostReplyBody {
  type: 'reply';
  contentId: number;
  content: string;
}

export interface IUpdateCommentLikeBody {
  contentId: number;
}

export interface IUpdateReplyLikeBody {
  contentId: number;
}

export interface IUpdateCommentBody {
  contentId: number;
  type: 'comment';
  content: string;
}

export interface IUpdateReplyBody {
  id: number;
  type: 'reply';
  content: string;
}

export interface IDeleteCommentReplyBody {
  id: number;
  type: 'comment' | 'reply';
}

export interface ICommentListResponse extends IInitState {
  data: ICommentListData;
}

export interface IReplyListResponse extends IInitState {
  data: { list: IReplyType[]; commentId: number };
}

export interface IPostCommentResponse extends IInitState {
  data: ICommentType | null;
}

export interface IPostReplyResponse extends IInitState {
  data: IPostReplyType | null;
}

export interface IUpdateCommentLikeResponse extends IInitState {
  data: IUpdateCommentLikeType | null;
}

export interface IUpdateReplyLikeResponse extends IInitState {
  data: IUpdateReplyLikeType | null;
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
