import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import useInnerWidth from '@hooks/useInnerWidth';
import { sizes } from '@styles/media';

const useFeature = (index: number) => {
  const { scrollY } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
  }));
  const { innerWidth } = useInnerWidth();

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (innerWidth <= sizes.mobile) {
      if (scrollY >= 880 + 88 * index) {
        setAnimation(true);
      }
    } else if (innerWidth <= sizes.tablet) {
      if (scrollY >= 1765 + 215 * index) {
        setAnimation(true);
      }
    } else {
      if (scrollY >= 1720 + 184 * index) {
        setAnimation(true);
      }
    }
  }, [scrollY]);

  return { animation };
};

export default useFeature;
