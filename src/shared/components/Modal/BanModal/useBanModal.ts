import { useEffect } from 'react';
import { RootState } from '@stores/index';
import { useSelector } from 'react-redux';
import useModal from '@hooks/useModal';

const useAccessDenyModal = () => {
  const { hideSetBanModal } = useModal();

  const { scrollY, banModal } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
    banModal: globalModal.banModal,
  }));

  const handleHideBanModal = () => {
    hideSetBanModal();
  };

  useEffect(() => {
    if (banModal) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [banModal]);

  return { isShow: banModal, handleHideBanModal };
};

export default useAccessDenyModal;
