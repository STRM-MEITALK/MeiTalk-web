import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { IViewRef, ISelectParam } from '../streamingTypes';

export interface CameraSettingProps extends IViewRef {
  handleSelect: (param: ISelectParam) => void;
  setStep: (step: string) => void;
  cameraOptions: IOptionType[] | undefined;
  cameraValue: IOptionType | undefined;
}
