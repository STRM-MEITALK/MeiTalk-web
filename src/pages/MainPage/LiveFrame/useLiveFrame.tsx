import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/stores';

const useLiveFrame = () => {
  const { liveFrameList } = useSelector(({ stream }: RootState) => ({
    liveFrameList: stream.liveFrameListInfo.data.streams,
  }));

  return { liveFrameList };
};

export default useLiveFrame;
