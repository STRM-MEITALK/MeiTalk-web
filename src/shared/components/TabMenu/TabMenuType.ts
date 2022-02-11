export interface ITabProps {
  label?: string;
  active?: boolean;
  value?: number;
  onClick?: () => void;
}

export interface ISliderStyleProps {
  width: number;
  index: number;
}

export interface IChangeEventProps {
  value: number;
}

export interface ITabsProps {
  selectedTab: number;
  onChange: (value: number) => void;
  children: JSX.Element[];
}
