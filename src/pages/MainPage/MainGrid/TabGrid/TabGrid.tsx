/* eslint-disable no-nested-ternary */
import React from 'react';
import Slider from 'react-slick';
import '../slick.css';
import '../slick-theme.css';

import { useTranslation } from 'react-i18next';

import RequestStatus from '@lib/RequestStatus';
import { IStreamListType } from '@type/streamType';
import CustomOptions from '@components/CustomOptions';
import MainListItem from '@components/MainListItem';
import ShareModal from '@components/Modal/ShareModal';
import { IOption } from '@components/CustomOptions/CustomOptionsType';

import MainGridButtonImg from '@images/MainGridButton.png';
import topButtonImg from '@images/topButton.png';

import Carousel from '../../Carousel';
import PcMiddle from '../../PcMiddle';
import useTapGrid from './useTapGrid';
import * as STC from '../../MainPage.style';

interface ITabGrid {
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

const TabGrid = ({
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
}: ITabGrid) => {
  const { t } = useTranslation();
  const {
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
  } = useTapGrid();

  return (
    <>
      <PcMiddle
        scrollRef={scrollRef}
        activeTab={activeTab}
        handleChange={handleChange}
        setNav1={setNav1}
        currentStreamUrl={currentStreamUrl}
      />
      <STC.MobileMiddle>
        <CustomOptions options={tabValueOption} selected={activeTab} onClick={handleChange} />
        <Carousel currentMenu={activeTab} />
      </STC.MobileMiddle>
      <STC.StreamList>
        <STC.StreamListGridButton
          tabOverScrollCheck={tabOverScrollCheck}
          onClick={() => {
            setMiddleType(!middleType);
          }}
        >
          <STC.StreamListGridButtonDirection className="HELLO" src={MainGridButtonImg} />
        </STC.StreamListGridButton>

        <STC.StreamListTopButton
          tabOverScrollCheck={tabOverScrollCheck}
          onClick={() => {
            tabScroll();
          }}
        >
          <STC.StreamListTopButtonDirection className="HELLO" src={topButtonImg} />
        </STC.StreamListTopButton>
        {activeTab === 0 &&
          liveList.map((item: IStreamListType) => (
            <MainListItem
              key={item.vodId}
              link={link}
              item={item}
              setIsShowSM={setIsShowSM}
              setLink={setLink}
              setTitle={setTitle}
            />
          ))}
        {activeTab === 1 &&
          hotList.map((item: IStreamListType) => (
            <MainListItem
              key={item.vodId}
              link={link}
              item={item}
              setIsShowSM={setIsShowSM}
              setLink={setLink}
              setTitle={setTitle}
            />
          ))}
        {activeTab === 2 &&
          updateList.map((item: IStreamListType) => (
            <MainListItem
              key={item.vodId}
              link={link}
              item={item}
              setIsShowSM={setIsShowSM}
              setLink={setLink}
              setTitle={setTitle}
            />
          ))}
        {activeTab === 3 &&
          weeklyList.map((item: IStreamListType) => (
            <MainListItem
              key={item.vodId}
              link={link}
              item={item}
              setIsShowSM={setIsShowSM}
              setLink={setLink}
              setTitle={setTitle}
            />
          ))}
        {activeTab === 4 &&
          monthlyList.map((item: IStreamListType) => (
            <MainListItem
              key={item.vodId}
              link={link}
              item={item}
              setIsShowSM={setIsShowSM}
              setLink={setLink}
              setTitle={setTitle}
            />
          ))}
      </STC.StreamList>
      <ShareModal isShow={isShowSM} link={link} title={title} setIsShow={() => setIsShowSM(!isShowSM)} />
    </>
  );
};

export default TabGrid;
