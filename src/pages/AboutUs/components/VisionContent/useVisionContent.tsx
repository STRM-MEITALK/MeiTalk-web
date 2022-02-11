import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import useInnerWidth from '@hooks/useInnerWidth';
import { sizes } from '@styles/media';

const useVisionContent = () => {
  const { scrollY } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
  }));
  const { innerWidth } = useInnerWidth();

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (innerWidth <= sizes.mobile) {
      if (scrollY >= 200) {
        setAnimation(true);
      }
    } else if (innerWidth <= sizes.tablet) {
      if (scrollY >= 610) {
        setAnimation(true);
      }
    } else {
      if (scrollY >= 700) {
        setAnimation(true);
      }
    }
  }, [scrollY]);

  return { animation };
};

export default useVisionContent;
