import { useEffect } from 'react';
import { RootState } from '@stores/index';
import { useSelector } from 'react-redux';
import useModal from '@hooks/useModal';

const useAccessDenyModal = () => {
  const { hideShowAccessDenyModal } = useModal();

  const { scrollY, accessDenyModal } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
    accessDenyModal: globalModal.accessDenyModal,
  }));

  const handleHideAccessDenyModal = () => {
    hideShowAccessDenyModal();
  };

  useEffect(() => {
    if (accessDenyModal) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [accessDenyModal]);

  return { isShow: accessDenyModal, handleHideAccessDenyModal };
};

export default useAccessDenyModal;
