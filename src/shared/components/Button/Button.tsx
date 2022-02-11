import React from 'react';
import * as STC from './Button.style';
import { IButtonProps } from './ButtonType';

const Button = ({ content, type, disable, width, size, handleClick }: IButtonProps) => {
  return (
    <STC.Wrapper
      type={type}
      disable={disable}
      onClick={() => {
        if (!disable && handleClick) {
          handleClick();
        }
      }}
      width={width}
    >
      <STC.Text size={size}>{content}</STC.Text>
    </STC.Wrapper>
  );
};
Button.defaultProps = {
  content: 'Button',
  type: 'primary',
  disable: false,
  width: '100%',
  size: 'noraml',
};
export default Button;
