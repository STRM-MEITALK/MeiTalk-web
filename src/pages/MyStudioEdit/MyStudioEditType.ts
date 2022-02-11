import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { IViewRef, IConstraintType, IDeviceType, IHandleBroadParam } from '@pages/StreamingPage/streamingTypes';

export interface IBroadcastingProps extends IViewRef {
  constraint: IConstraintType;
  cameras: IDeviceType[];
  audios: IDeviceType[];
  vodCategoryOptions: IOptionType[] | undefined;
  broadCategory: IOptionType | undefined;
  broadDetail: string | undefined;
  broadTitle: string | undefined;
  endModal: boolean;
  errorEndModal: boolean;
  titlePlaceholder: string;
  handleStart: () => void;
  handleBroadCategory: (data: IOptionType) => void;
  handleBroadDetail: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBroadTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBroadData: (data: IHandleBroadParam) => void;
  handleFinish: () => void;
  handleEdit: (chatKeyProp?: string) => void;
  videoComponent: JSX.Element | undefined;
  handleSourceToggle: (type: string) => void;
  setEndModal: (_: boolean) => void;
  setErrorEndModal: (_: boolean) => void;
}

export interface IEndModal {
  isShowOM: boolean;
  setIsShowOM: React.Dispatch<React.SetStateAction<boolean>>;
  scrollYOM: number;
}

export interface IUseBroadcastingProps {
  handleBroadData: (data: IHandleBroadParam) => void;
  broadSetData: {
    broadCategory: IOptionType | undefined;
    broadDetail: string | undefined;
    broadTitle: string | undefined;
  };
  setEndModal: (_: boolean) => void;
  handleEdit: (chatKeyProp?: string) => void;
}

export interface IContentWrapperProps {
  ratio: string;
  isRight: boolean;
}

export interface IBroadData {
  title: string;
  category: string;
  detail: string;
}

export interface IConnectSocketParam {
  chat: string;
  startTime: string;
}
