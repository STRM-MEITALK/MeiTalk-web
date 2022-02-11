import { IReturnMessage } from '@src/type/chattingType';

export interface IisFocus {
  isFocus: boolean;
}

export interface IStreamChattingProps {
  chatHeight: number | undefined;
  chatScrollRef: React.MutableRefObject<any>;
  message: string;
  messages: IReturnMessage[];
  isFocus: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handlePress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePressBan: (userList: string[], from: string, cuid: string) => void;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IConnectSocketParam {
  chat: string;
  startTime: string;
}
