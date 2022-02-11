export interface IIsShow {
  isShow: boolean;
}

export interface IOneBtnModal extends IIsShow {
  setIsShow: (isShow?: boolean) => void;
}
