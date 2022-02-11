import React, { useState, useCallback, useRef, useEffect } from 'react';

const useCustomOptions = () => {
  const [show, setShow] = useState(false);
  const [customHeight, setCustomHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const optionRef = useRef<HTMLUListElement>(null);

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    if (show) {
      const position = optionRef.current?.getBoundingClientRect();
      if (position) {
        if (window.innerHeight < position?.y + position?.height) {
          setCustomHeight(position?.height - (position?.y + position?.height - window.innerHeight) - 20);
        }
      }
    }
  }, [show, optionRef]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setShow]);

  return { ref, optionRef, show, customHeight, handleShow };
};

export default useCustomOptions;
