export interface IIsShow {
  isShow: boolean;
}

export interface IScrollY {
  scrollY: number;
}

export interface IOneBtnModal extends IIsShow {
  setIsShow: (isShow?: boolean) => void;
  title: string;
  content: string;
}
