/* eslint-disable no-nested-ternary */
import React from 'react';
import Slider from 'react-slick';
import { IOption } from '@components/CustomOptions/CustomOptionsType';
import TabGrid from './TabGrid';
import SlideGrid from './SlideGrid';

interface IGridType {
  currentStreamUrl: string;
  activeTab: number;
  tabValueOption: IOption[];
  scrollRef: any;
  tabOverScrollCheck: boolean;
  middleType: boolean;
  setMiddleType: (_: boolean) => void;
  setNav1: (_: Slider | null) => void;
  tabScroll: () => void;
  handleChange: (_: number) => void;
}

const MainGrid = ({
  currentStreamUrl,
  activeTab,
  tabValueOption,
  scrollRef,
  tabOverScrollCheck,
  middleType,
  setMiddleType,
  setNav1,
  tabScroll,
  handleChange,
}: IGridType) => {
  if (middleType) {
    return (
      <TabGrid
        currentStreamUrl={currentStreamUrl}
        activeTab={activeTab}
        tabValueOption={tabValueOption}
        scrollRef={scrollRef}
        tabOverScrollCheck={tabOverScrollCheck}
        middleType={middleType}
        setMiddleType={setMiddleType}
        setNav1={setNav1}
        tabScroll={tabScroll}
        handleChange={handleChange}
      />
    );
  } else {
    return (
      <SlideGrid
        activeTab={activeTab}
        tabValueOption={tabValueOption}
        scrollRef={scrollRef}
        tabOverScrollCheck={tabOverScrollCheck}
        middleType={middleType}
        setMiddleType={setMiddleType}
        tabScroll={tabScroll}
        handleChange={handleChange}
      />
    );
  }
};

export default MainGrid;
