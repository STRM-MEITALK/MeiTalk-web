import { IGetChannelInfoBody } from '@src/type/studioType';

export interface IBannerProps {
  setting: boolean;
  channelInfo: IGetChannelInfoBody;
  preview: string | ArrayBuffer | null;
  addImage: string;
  postFile: () => void;
  handleDeleteBtn: () => void;
  setAddImage: (_: string) => void;
  setBannerImageModal: (_: boolean) => void;
}
