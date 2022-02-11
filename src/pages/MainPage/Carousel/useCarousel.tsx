import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { RootState } from '@src/stores';
import LiveImage from '@images/c-live.png';
import HotImage from '@images/c-hot.png';
import UpdateImage from '@images/c-update.png';
import WeeklyImage from '@images/c-weekly.png';
import MonthlyImage from '@images/c-monthly.png';
import firstBgImg from '@images/01.png';
import secondBgImg from '@images/02.png';
import thirdBgImg from '@images/03.png';
import fourthBgImg from '@images/04.png';
import fifthBgImg from '@images/05.png';
import { IStreamListType } from '@src/type/streamType';

const useCarousel = (currentMenu: number) => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    arrows: false,
  };

  const [titleInfo, setTitleInfo] = useState({
    icon: '',
    title: '',
  });
  const [slideList, setSlideList] = useState<IStreamListType[]>([]);

  const { liveList, hotList, updateList, weeklyList, monthlyList, liveListStatus } = useSelector(
    ({ stream }: RootState) => ({
      liveList: stream.liveListInfo.data.streams,
      hotList: stream.hotListInfo.data.streams,
      updateList: stream.updateListInfo.data.streams,
      weeklyList: stream.weeklyListInfo.data.streams,
      monthlyList: stream.monthlyListInfo.data.streams,
      liveListStatus: stream.liveListInfo.status,
    }),
  );

  const goToDetail = (item: IStreamListType) => {
    if (item.isLive) {
      window.location.href = `${PAGE_URL.LIVE_DETAIL}/${item.vodId}`;
    } else {
      window.location.href = `${PAGE_URL.REPLAY_DETAIL}/${item.vodId}`;
    }
  };

  useEffect(() => {
    switch (currentMenu) {
      case 0:
        setTitleInfo({
          icon: LiveImage,
          title: t('common_live'),
        });
        setSlideList(liveList.filter((_: IStreamListType, idx: number) => idx < 5));
        break;
      case 1:
        setTitleInfo({
          icon: HotImage,
          title: t('main_tab_hot'),
        });
        setSlideList(hotList.filter((_: IStreamListType, idx: number) => idx < 5));
        break;
      case 2:
        setTitleInfo({
          icon: UpdateImage,
          title: t('main_tab_update'),
        });
        setSlideList(updateList.filter((_: IStreamListType, idx: number) => idx < 5));
        break;
      case 3:
        setTitleInfo({
          icon: WeeklyImage,
          title: t('main_tab_weekly'),
        });
        setSlideList(weeklyList.filter((_: IStreamListType, idx: number) => idx < 5));
        break;
      case 4:
        setTitleInfo({
          icon: MonthlyImage,
          title: t('main_tab_monthly'),
        });
        setSlideList(monthlyList.filter((_: IStreamListType, idx: number) => idx < 5));
        break;
      default:
        break;
    }
  }, [currentMenu, liveList, hotList, updateList, weeklyList, MonthlyImage]);

  return {
    settings,
    titleInfo,
    slideList,
    numberImage: [firstBgImg, secondBgImg, thirdBgImg, fourthBgImg, fifthBgImg],
    liveListStatus,
    goToDetail,
  };
};

export default useCarousel;
