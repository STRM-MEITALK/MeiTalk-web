export interface IisFocus {
  isFocus: boolean;
}

export interface IReturnMessage {
  userimg: string;
  userName: string;
  message: string;
  type: string;
  isStreamer: string;
  [propName: string]: string;
}

export interface IChat {
  userimg: string;
  userName: string;
  message: string;
  isLast: boolean;
  isStreamer: boolean;
}

export interface IInfoChat {
  message: string;
  isLast: boolean;
}

export interface IReturnMessageS {
  userimg: string;
  userName: string;
  message: string;
  type: string;
  cuid: string;
  isStreamer: boolean;
  isLast: boolean;
  handlePressBan: (userList: string[], from: string, cuid: string) => void;
}

export interface IPubHeaders {
  priority: string;
  MessageType: string;
  CUID: string;
  [propName: string]: string | undefined;
}

export interface ILiveVIewSubHeader {
  CUID: string;
  PREVIEW: string;
  [propName: string]: string | undefined;
}

export interface IChatHeight {
  chatHeight: number | undefined;
}

export interface IUserList {
  userPicture: string;
  userName: string;
  id: string;
  sessionId: string;
}

export interface IHandleMessage {
  (type: string, message: string, messageType: string): void;
}

export interface IChattingUnsubscribe {
  (userList: string[], from: string, cuid: string): void;
}

export interface IViewersUnsubscribe {
  handlePressBan: IChattingUnsubscribe;
  handleHideViewers: () => void;
}

export interface IChattingProps {
  chatHeight: number | undefined;
  messages: IReturnMessage[];
  handleMessage: IHandleMessage;
  handleShowChat: (isShow: boolean) => void;
  isLiveFinish: boolean;
}

export interface IViewer {
  userId: string;
  userName: string;
  userImg: string;
  cuid: string;
  addBanList: (name: string, id: string, cuid: string) => void;
  removeBanList: (name: string) => void;
}

export interface IChatProfile {
  userimg: string;
  isStreamer: boolean;
}
