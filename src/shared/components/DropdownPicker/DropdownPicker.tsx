import React from 'react';
import * as STC from './DropdownPicker.style';
import { IDropdownPickerProps } from './DropdownPickerType';

const DropdownPicker = ({
  options,
  value,
  handleValue,
  controllerColor,
  optionColor,
  menuPlacement,
  isBackground,
  isStreamingState,
}: IDropdownPickerProps) => {
  return (
    <STC.CustomSelect
      value={value}
      onChange={(selectedOption: any) => {
        if (handleValue) {
          handleValue(selectedOption);
        }
      }}
      controllerColor={controllerColor}
      optionColor={optionColor}
      classNamePrefix="Select"
      isSearchable={false}
      options={options}
      defaultValue={options && options[0]}
      components={{
        IndicatorSeparator: () => null,
      }}
      menuPlacement={menuPlacement ? 'top' : 'bottom'}
      isBackground={isBackground}
      styles={{
        dropdownIndicator: (provided: any, state: any) => ({
          ...provided,
          transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          color: 'white',
        }),
      }}
      isDisabled={isStreamingState}
    />
  );
};

export default DropdownPicker;

DropdownPicker.defaultProps = {
  controllerColor: 'fc01',
  optionColor: 'fc01',
  options: [],
};
