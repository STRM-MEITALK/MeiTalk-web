export interface IMenuProps {
  handleMenu: () => void;
  scrollY: number;
  openPrepareModal: () => void;
  handleBroadcast: () => void;
  handleLoginPage: () => void;
  handleLogout: () => void;
}

export interface ISignTextProps {
  isUserInfo?: boolean;
}
