export interface IIsShow {
  isShow: boolean;
}

export interface ITwoBtnModal extends IIsShow {
  setIsShow?: (isShow?: boolean) => void;
  handleLeftBtn: () => void;
  handleRightBtn: () => void;
  btnLeftContent: string;
  btnRightContent: string;
  content: string;
}
