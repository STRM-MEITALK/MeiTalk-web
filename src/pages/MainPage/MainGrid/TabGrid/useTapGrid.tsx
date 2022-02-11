import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';

const useTapGrid = () => {
  const [isShowSM, setIsShowSM] = useState(false);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

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

  return {
    liveList,
    hotList,
    updateList,
    weeklyList,
    monthlyList,
    liveListStatus,
    link,
    isShowSM,
    title,
    setIsShowSM,
    setLink,
    setTitle,
  };
};

export default useTapGrid;
