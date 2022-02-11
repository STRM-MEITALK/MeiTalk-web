import { handleScrollY } from '@src/stores/slice/globalModalSlice';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/index';

const useScrollY = () => {
  const dispatch = useDispatch();

  const { scrollY } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
  }));

  const onHandleScrollY = useCallback(() => {
    if (document.body.style.position !== 'fixed') {
      dispatch(handleScrollY(window.scrollY));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onHandleScrollY);

    return () => {
      window.removeEventListener('scroll', onHandleScrollY);
    };
  }, []);

  return { scrollY };
};

export default useScrollY;
