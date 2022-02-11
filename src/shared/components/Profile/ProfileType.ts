export interface IProfileType {
  type: 'ps48' | 'ps40' | 'ps36' | 'ps27' | 'ps26' | 'ps24' | 'ps20';
  tType?: 'ps48' | 'ps40' | 'ps36' | 'ps27' | 'ps26' | 'ps24' | 'ps20' | null;
  mType?: 'ps48' | 'ps40' | 'ps36' | 'ps27' | 'ps26' | 'ps24' | 'ps20' | null;
}

export interface IProfile extends IProfileType {
  src: string | null;
  channelId: number | null;
  isOwner?: boolean;
}
