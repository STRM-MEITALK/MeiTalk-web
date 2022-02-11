export interface IIsShow {
  isShow: boolean;
}

export interface IScrollY {
  scrollY: number;
}

export interface ITwoBtnModal extends IIsShow {
  setIsShow: (isShow?: boolean) => void;
  handleLeftBtn: () => void;
  handleRightBtn: () => void;
  btnLeftContent: string;
  btnRightContent: string;
  content: JSX.Element | string;
  waitContent: string;
  wait: boolean;
  setWait: (wait: boolean) => void;
}
