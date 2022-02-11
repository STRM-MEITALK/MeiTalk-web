export interface IIsShow {
  isShow: boolean;
}

export interface IOneBtnModal extends IIsShow {
  handleBtn: () => void;
  btnContent: string;
  content: string;
}
