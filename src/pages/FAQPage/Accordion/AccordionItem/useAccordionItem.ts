import React, { useRef, useCallback, useState } from 'react';

const useAccordionItem = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0 && isCollapse) {
        parentRef.current.style.height = '0';
        parentRef.current.style.opacity = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.opacity = '1';
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse],
  );
  return {
    parentRef,
    childRef,
    isOpen: isCollapse,
    handleButtonClick,
  };
};

export default useAccordionItem;
