import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';

const usePcMiddle = ({ handleChange }: { handleChange: (_: number) => void }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    beforeChange: (pre: number, next: number) => handleChange(next),
  };
  const { liveList, hotList, updateList, weeklyList, monthlyList, liveListStatus, isLiveFinish } = useSelector(
    ({ stream, liveView }: RootState) => ({
      liveList: stream.liveListInfo.data.streams,
      hotList: stream.hotListInfo.data.streams,
      updateList: stream.updateListInfo.data.streams,
      weeklyList: stream.weeklyListInfo.data.streams,
      monthlyList: stream.monthlyListInfo.data.streams,
      liveListStatus: stream.liveListInfo.status,
      isLiveFinish: liveView.isLiveFinish,
    }),
  );

  return { liveList, hotList, updateList, weeklyList, monthlyList, liveListStatus, settings, isLiveFinish };
};

export default usePcMiddle;
