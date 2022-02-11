import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import { handlePreparingModal } from '@slice/globalModalSlice';

const usePreparingModal = () => {
  const dispatch = useDispatch();
  const { scrollY, preparingModal } = useSelector(({ globalModal }: RootState) => ({
    preparingModal: globalModal.preparingModal,
    scrollY: globalModal.scrollY,
  }));

  const onClose = useCallback(() => {
    dispatch(handlePreparingModal(false));
  }, []);

  useEffect(() => {
    if (preparingModal) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [preparingModal]);

  return {
    isShow: preparingModal,
    onClose,
  };
};

export default usePreparingModal;
