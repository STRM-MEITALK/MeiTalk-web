import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { IViewRef, ImultiRtmpDestinationType } from '../streamingTypes';

export interface IDetailSettingProps extends IViewRef {
  setStep: (step: string) => void;
  vodCategoryOptions: IOptionType[] | undefined;
  broadCategory: IOptionType | undefined;
  broadDetail: string | undefined;
  broadTitle: string | undefined;
  detailDisable: boolean;
  titlePlaceholder: string;
  multiRtmpDestination: ImultiRtmpDestinationType[];
  externalTriggerFalse: boolean;
  handleMultiRtmpDestination: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: 'mediaServer' | 'streamKey',
  ) => void;
  handleBroadCategory: (data: IOptionType) => void;
  handleBroadDetail: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBroadTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddRtmp: () => void;
  handleRemoveRtmp: (_: number) => void;
  handleMultiStreamToggle: (_: boolean) => void;
}
