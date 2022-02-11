import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import RequestStatus from '@lib/RequestStatus';
import CarouselInfo from './CarouselInfo';
import NoLive from './NoLive';
import useCarousel from './useCarousel';
import * as STC from './Carousel.style';

const Carousel = ({ currentMenu }: { currentMenu: number }) => {
  const { t } = useTranslation();
  const { settings, titleInfo, slideList, numberImage, liveListStatus, goToDetail } = useCarousel(currentMenu);

  return (
    <STC.Container slideListLength={slideList.length}>
      <STC.SliceTitle>
        <STC.SliceIcon src={titleInfo.icon} alt="" />
        <STC.Title>{titleInfo.title}</STC.Title>
      </STC.SliceTitle>
      {slideList.length === 0 && <NoLive currentMenu={currentMenu} />}
      <Slider {...settings}>
        {slideList.map((item, idx) => (
          <STC.Slice key={item.vodId} onClick={() => goToDetail(item)}>
            <STC.CarouselWrapper>
              <STC.PlayerWrapper className="player">
                <STC.CarouselPlayer thumbnail={item.thumbnail} />
                {item.isLive && <STC.SmallLiveTag className="live-tag">{t('common_live')}</STC.SmallLiveTag>}
              </STC.PlayerWrapper>
              {!item.isLive && <STC.NumberImage className="number" src={numberImage[idx]} />}
            </STC.CarouselWrapper>
            <CarouselInfo item={item} />
          </STC.Slice>
        ))}
      </Slider>
    </STC.Container>
  );
};

export default Carousel;
