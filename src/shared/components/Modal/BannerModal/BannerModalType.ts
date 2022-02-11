export interface IIsShow {
  isShow: boolean;
}

export interface IBannerModal extends IIsShow {
  handleBtn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsShow: (_: boolean) => void;
  fileRef: React.RefObject<HTMLInputElement>;
}
