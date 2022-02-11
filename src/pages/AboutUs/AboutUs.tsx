import React, { useState } from 'react';
import about01 from '@images/ABOUT01.png';
import about02 from '@images/ABOUT02.png';
import about03 from '@images/ABOUT03.png';
import about04 from '@images/ABOUT04.png';
import about05 from '@images/ABOUT05.png';
import useInnerWidth from '@hooks/useInnerWidth';
import { sizes } from '@styles/media';
import AboutUsPC from './AboutUsPC';
import AboutUsMobile from './AboutUsMobile';

const AboutUs = () => {
  const { innerWidth } = useInnerWidth();

  const [features, setFeatures] = useState([
    {
      title: 'feature_title01',
      des: 'feature_description01',
      img: about01,
    },
    {
      title: 'feature_title02',
      des: 'feature_description02',
      img: about02,
    },
    {
      title: 'feature_title03',
      des: 'feature_description03',
      img: about03,
    },
    {
      title: 'feature_title04',
      des: 'feature_description04',
      img: about04,
    },
    {
      title: 'feature_title05',
      des: 'feature_description05',
      img: about05,
    },
  ]);

  return innerWidth > sizes.tablet ? <AboutUsPC features={features} /> : <AboutUsMobile features={features} />;
};

export default AboutUs;
