import React, { useState, useEffect } from 'react';
import { IUseToggleProps } from './ToggleType';

const useToggle = ({
  handleToggleTrue,
  handleToggleFalse,
  defaultToggle,
  externalTriggerFalse,
  type,
}: IUseToggleProps) => {
  const [isToggle, setIsToggle] = useState(defaultToggle);

  useEffect(() => {
    if (isToggle) {
      if (handleToggleTrue) {
        handleToggleTrue();
      }
    } else {
      if (handleToggleFalse) {
        handleToggleFalse();
      }
    }
  }, [isToggle]);

  useEffect(() => {
    if (!externalTriggerFalse && type === 'multiStream') {
      setIsToggle(false);
    }
  }, [externalTriggerFalse]);

  return {
    isToggle,
    setIsToggle,
  };
};

export default useToggle;
