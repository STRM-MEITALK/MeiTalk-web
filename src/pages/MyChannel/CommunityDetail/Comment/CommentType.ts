export interface ICommentHeightType {
  commentHeight: number | undefined;
}

export interface ICommentType extends ICommentHeightType {
  onHandleShowComment: (flag: boolean) => void;
}

export interface IisFocus {
  isFocus: boolean;
}
