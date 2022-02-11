import React, { useCallback, useState } from 'react';
import * as STC from './ContactIcon.style';
import { ContactIconProps } from './type';
import useContactIcon from './useContactIcon';

const ContactIcon = ({ source, overSource, link }: ContactIconProps) => {
  const { handleLink } = useContactIcon();
  const [isOver, setIsOver] = useState(false);

  const onMouseOver = useCallback(() => {
    setIsOver(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setIsOver(false);
  }, []);

  return (
    <i
      role="button"
      tabIndex={0}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      onClick={() => handleLink(link)}
      onKeyDown={() => handleLink(link)}
    >
      <STC.Icon src={isOver ? overSource : source} />
    </i>
  );
};

export default ContactIcon;
