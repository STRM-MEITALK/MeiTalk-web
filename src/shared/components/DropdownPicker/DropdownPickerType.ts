export interface IOptionType {
  value: any;
  label: any;
}

export interface IDropdownPickerProps {
  options?: IOptionType[];
  value?: IOptionType;
  handleValue?: (option: IOptionType) => void;
  controllerColor?: string;
  optionColor?: string;
  menuPlacement?: string;
  isBackground?: boolean;
  isStreamingState?: boolean;
}
