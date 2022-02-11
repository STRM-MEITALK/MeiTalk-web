export interface ICustomOptions {
  options: IOption[];
  selected: any;
  onClick: (value: IOption['value']) => void;
}

export interface IOption {
  value: any;
  label: string | number;
}
