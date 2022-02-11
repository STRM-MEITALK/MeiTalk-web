export interface IFilterModalProps {
  type: string;
  isShowSetting: boolean;
  setIsShowSetting: (_: boolean) => void;
  searchValue: string;
  channelId?: string;
}
