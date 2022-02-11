import { useState, useRef, useEffect } from 'react';

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const widthRef = useRef<number>();

  const handleInnerWidth = () => {
    if (widthRef.current) {
      clearTimeout(widthRef.current);
    }
    widthRef.current = window.setTimeout(function () {
      setInnerWidth(window.innerWidth);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('resize', handleInnerWidth);
    return () => {
      window.removeEventListener('resize', handleInnerWidth);
      clearTimeout(widthRef.current);
    };
  }, []);

  return {
    innerWidth,
  };
};

export default useInnerWidth;
