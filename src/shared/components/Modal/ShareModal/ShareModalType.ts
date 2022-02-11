export interface IIsShow {
  isShow: boolean;
}

export interface IShareModal extends IIsShow {
  title: string;
  link: string;
  setIsShow: (isShow?: boolean) => void;
}
