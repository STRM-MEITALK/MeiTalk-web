export interface IPlayerProps {
  currentStreamUrl: string;
  clickMainLive: boolean;
  visibleLiveList: boolean;
  setVisibleLiveList: (_: boolean) => void;
}
