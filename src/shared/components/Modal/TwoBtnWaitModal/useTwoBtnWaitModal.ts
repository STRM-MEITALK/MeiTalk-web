import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/index';

const useTwoBtnWaitModal = ({ isShow }: { isShow: boolean }) => {
  const { scrollY } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
  }));

  useEffect(() => {
    if (isShow) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isShow]);

  return { scrollY };
};

export default useTwoBtnWaitModal;
