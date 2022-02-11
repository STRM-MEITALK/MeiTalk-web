import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { ISelectParam } from '../streamingTypes';

export interface IAudioSettingProps {
  handleSelect: (param: ISelectParam) => void;
  setStep: (step: string) => void;
  audioOptions: IOptionType[] | undefined;
  audioValue: IOptionType | undefined;
}
