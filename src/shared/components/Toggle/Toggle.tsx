import React from 'react';
import useToggle from './useToggle';
import { IToggleProps } from './ToggleType';
import * as STC from './Toggle.style';

const Toggle = ({
  type,
  trueText,
  falseText,
  defaultToggle,
  externalTriggerFalse,
  handleToggleTrue,
  handleToggleFalse,
}: IToggleProps) => {
  const { isToggle, setIsToggle } = useToggle({
    handleToggleTrue,
    handleToggleFalse,
    type,
    defaultToggle,
    externalTriggerFalse,
  });
  return (
    <STC.Container onClick={() => setIsToggle(!isToggle)}>
      <STC.On isToggle={isToggle}>{trueText}</STC.On>
      <STC.Off isToggle={isToggle}>{falseText}</STC.Off>
      <STC.Circle isToggle={isToggle} />
    </STC.Container>
  );
};

export default Toggle;
