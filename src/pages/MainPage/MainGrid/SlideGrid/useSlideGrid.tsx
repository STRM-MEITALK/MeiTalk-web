import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import { isConstructorDeclaration } from 'typescript';

const useSlideGrid = () => {
  const [dragging, setDragging] = useState(false);
  const [currentDraggingType, setCurrentDraggingType] = useState('');
  const [isShowSM, setIsShowSM] = useState(false);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');

  const handleBeforeChange = (type: string) =>
    useCallback(() => {
      setCurrentDraggingType(type);
      setDragging(true);
    }, [setDragging]);

  const handleAfterChange = (type: string) =>
    useCallback(
      (props: any) => {
        setCurrentDraggingType(type);
        setDragging(false);
      },
      [setDragging],
    );

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

  return {
    liveList,
    hotList,
    updateList,
    weeklyList,
    monthlyList,
    liveListStatus,
    isLiveFinish,
    dragging,
    currentDraggingType,
    link,
    isShowSM,
    title,
    handleAfterChange,
    handleBeforeChange,
    setIsShowSM,
    setLink,
    setTitle,
  };
};

export default useSlideGrid;
