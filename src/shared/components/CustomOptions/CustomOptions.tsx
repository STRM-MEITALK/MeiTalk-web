import React, { useCallback } from 'react';
import UpImage from '@images/arrow-up.png';
import DownImage from '@images/arrow-down.png';
import useCustomOptions from './useCustomOptions';
import { ICustomOptions, IOption } from './CustomOptionsType';
import * as STC from './CustomOptions.style';

const CustomOptions = ({ options, selected, onClick }: ICustomOptions) => {
  const { ref, optionRef, show, customHeight, handleShow } = useCustomOptions();

  const onClickOption = useCallback(
    (value: IOption['value']) => {
      onClick(value);
      handleShow();
    },
    [show],
  );

  return (
    <STC.Container ref={ref}>
      <STC.Selected onClick={handleShow}>
        <p>{options.filter((item) => item.value === selected)[0]?.label}</p>
        <img src={show ? UpImage : DownImage} alt="" />
      </STC.Selected>
      {show && (
        <STC.OptionWrapper ref={optionRef} customHeight={customHeight}>
          {options.map((item) => (
            <STC.Option key={item.value} onClick={() => onClickOption(item.value)}>
              {item.label}
            </STC.Option>
          ))}
        </STC.OptionWrapper>
      )}
    </STC.Container>
  );
};

export default CustomOptions;
