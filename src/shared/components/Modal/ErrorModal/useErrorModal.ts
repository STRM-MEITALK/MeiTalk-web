import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/index';

const useErrorModal = () => {
  const { scrollY, errorModal } = useSelector(({ globalModal }: RootState) => ({
    errorModal: globalModal.errorModal,
    scrollY: globalModal.scrollY,
  }));

  useEffect(() => {
    if (errorModal) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [errorModal]);

  return { isShow: errorModal };
};

export default useErrorModal;
