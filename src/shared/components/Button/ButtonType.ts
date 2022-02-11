export interface IButtonProps {
  content?: string;
  type?: 'primary' | 'secondary' | 'gray';
  disable?: boolean;
  width?: string;
  size?: 'normal' | 'small';
  handleClick?: () => any;
}
