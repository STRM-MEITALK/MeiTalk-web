export interface IIsShow {
  isShow: boolean;
}

export interface IScrollY {
  scrollY: number;
}

export interface ISelectStreamModalProps extends IIsShow {
  trigger: boolean;
  setIsShow: (isShow?: boolean) => void;
}

export interface ISelectStreamModalModal extends IIsShow {
  setIsShow: (isShow?: boolean) => void;
  setTrigger: (_: boolean) => void;
}

export interface IIsSelected {
  isSelected: boolean;
}
