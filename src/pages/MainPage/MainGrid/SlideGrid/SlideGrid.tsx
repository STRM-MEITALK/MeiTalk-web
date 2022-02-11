/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import '../slick.css';
import '../slick-theme.css';

import { IStreamListType } from '@type/streamType';
import CustomOptions from '@components/CustomOptions';
import MainListItem from '@components/MainListItem';
import ShareModal from '@components/Modal/ShareModal';
import { IOption } from '@components/CustomOptions/CustomOptionsType';

import MainGridButtonImg from '@images/MainGridButton.png';
import topButtonImg from '@images/topButton.png';
import livePcIconImg from '@images/live-pc.png';
import liveMobileIconImg from '@images/live-mobile.png';
import liveBackgroundImg from '@images/live-bg.png';
import hotPcIconImg from '@images/hot-pc.png';
import hotMobileIconImg from '@images/hot-mobile.png';
import hotBackgroundImg from '@images/hot-bg.png';
import updatePcIconImg from '@images/update-pc.png';
import updateMobileIconImg from '@images/update-mobile.png';
import updateBackgroundImg from '@images/update-bg.png';
import weeklyPcIconImg from '@images/weekly-pc.png';
import weeklyMobileIconImg from '@images/weekly-mobile.png';
import weeklyBackgroundImg from '@images/weekly-bg.png';
import monthlyPcIconImg from '@images/monthly-pc.png';
import monthlyMobileIconImg from '@images/monthly-mobile.png';
import monthlyBackgroundImg from '@images/monthly-bg.png';

import * as STC from './SlideGrid.style';
import Carousel from '../../Carousel';
import useSlideGrid from './useSlideGrid';

interface ISlideGrid {
  activeTab: number;
  tabValueOption: IOption[];
  scrollRef: any;
  tabOverScrollCheck: boolean;
  middleType: boolean;
  setMiddleType: (_: boolean) => void;
  tabScroll: () => void;
  handleChange: (_: number) => void;
}

const SlideGrid = ({
  activeTab,
  tabValueOption,
  scrollRef,
  tabOverScrollCheck,
  middleType,
  setMiddleType,
  tabScroll,
  handleChange,
}: ISlideGrid) => {
  const { t } = useTranslation();
  const {
    liveList,
    hotList,
    updateList,
    weeklyList,
    monthlyList,
    link,
    isShowSM,
    title,
    setIsShowSM,
    setLink,
    setTitle,
  } = useSlideGrid();

  const [mainIndexList, setMainindexList] = useState([
    {
      bgTitle: liveBackgroundImg,
      iconPc: livePcIconImg,
      iconMb: liveMobileIconImg,
      title: 'LIVE',
    },
    {
      bgTitle: hotBackgroundImg,
      iconPc: hotPcIconImg,
      iconMb: hotMobileIconImg,
      title: 'HOT VOD',
    },
    {
      bgTitle: updateBackgroundImg,
      iconPc: updatePcIconImg,
      iconMb: updateMobileIconImg,
      title: 'UPDATE',
    },
    {
      bgTitle: weeklyBackgroundImg,
      iconPc: weeklyPcIconImg,
      iconMb: weeklyMobileIconImg,
      title: 'Weekly BEST',
    },
    {
      bgTitle: monthlyBackgroundImg,
      iconPc: monthlyPcIconImg,
      iconMb: monthlyMobileIconImg,
      title: 'Monthly BEST',
    },
  ]);

  const { dragging, currentDraggingType, handleAfterChange, handleBeforeChange } = useSlideGrid();

  const [lastLive, setLastLive] = useState(false);
  const [lastHot, setLastHot] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(false);
  const [lastWeekly, setLastWeekly] = useState(false);
  const [lastMonthly, setLastMonthly] = useState(false);

  const PrevArrow = (props: any) => {
    const { className, style, onClick, type } = props;
    return (
      <>
        <STC.GradientLeftDiv
          dragging={dragging}
          type={type}
          currentDraggingType={currentDraggingType}
          style={{ display: onClick === null ? 'none' : 'block' }}
        />
        <div
          className={className}
          style={{ ...style, display: onClick === null ? 'none' : 'block', width: '25px', height: '50px' }}
          onClick={onClick}
        >
          <STC.PrevArrow />
        </div>
      </>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick, type } = props;
    return (
      <>
        <STC.GradientRightDiv
          dragging={dragging}
          type={type}
          currentDraggingType={currentDraggingType}
          style={{ display: onClick === null ? 'none' : 'block' }}
        />
        <div
          className={className}
          style={{ ...style, display: onClick === null ? 'none' : 'block', width: '25px', height: '50px' }}
          onClick={onClick}
        >
          <STC.NextArrow />
        </div>
      </>
    );
  };

  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: false,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div ref={scrollRef} />
      <STC.MobileMiddle>
        <CustomOptions options={tabValueOption} selected={activeTab} onClick={handleChange} />
        <Carousel currentMenu={activeTab} />
      </STC.MobileMiddle>

      <STC.StreamList>
        <STC.StreamListTopButton
          tabOverScrollCheck={tabOverScrollCheck}
          onClick={() => {
            tabScroll();
          }}
        >
          <STC.StreamListTopButtonDirection className="HELLO" />
        </STC.StreamListTopButton>

        {liveList?.length > 0 && (
          <div style={{ width: liveList?.length === 1 ? '33%' : liveList?.length === 2 ? '67%' : '100%' }}>
            <STC.TitleWrapper>
              <STC.TitleImgDiv>
                <STC.TitleImg src={mainIndexList[0].iconPc} />
              </STC.TitleImgDiv>
              <STC.Title>{t('common_live')}</STC.Title>
            </STC.TitleWrapper>
            <STC.SubGridDiv>
              <Slider
                {...setting}
                prevArrow={<PrevArrow type="LIVE" />}
                nextArrow={<NextArrow type="LIVE" />}
                beforeChange={handleBeforeChange('LIVE')}
                afterChange={handleAfterChange('LIVE')}
                slidesToShow={liveList?.length <= 3 ? liveList?.length : 3}
              >
                {liveList.map((item: IStreamListType) => (
                  <MainListItem
                    key={item.vodId}
                    link={link}
                    item={item}
                    setIsShowSM={setIsShowSM}
                    setLink={setLink}
                    setTitle={setTitle}
                  />
                ))}
              </Slider>
            </STC.SubGridDiv>
          </div>
        )}

        {hotList?.length > 0 && (
          <div style={{ width: hotList?.length === 1 ? '33%' : hotList?.length === 2 ? '67%' : '100%' }}>
            <STC.TitleWrapper>
              <STC.TitleImgDiv>
                <STC.TitleImg src={mainIndexList[1].iconPc} />
              </STC.TitleImgDiv>
              <STC.Title>{t('main_tab_hot')}</STC.Title>
            </STC.TitleWrapper>
            <STC.SubGridDiv>
              <Slider
                {...setting}
                prevArrow={<PrevArrow type="HOT" />}
                nextArrow={<NextArrow type="HOT" />}
                beforeChange={handleBeforeChange('HOT')}
                afterChange={handleAfterChange('HOT')}
                slidesToShow={hotList?.length <= 3 ? hotList?.length : 3}
              >
                {hotList.map((item: IStreamListType) => (
                  <MainListItem
                    key={item.vodId}
                    link={link}
                    item={item}
                    setIsShowSM={setIsShowSM}
                    setLink={setLink}
                    setTitle={setTitle}
                  />
                ))}
              </Slider>
            </STC.SubGridDiv>
          </div>
        )}

        {updateList?.length > 0 && (
          <div style={{ width: updateList?.length === 1 ? '33%' : updateList?.length === 2 ? '67%' : '100%' }}>
            <STC.TitleWrapper>
              <STC.TitleImgDiv>
                <STC.TitleImg src={mainIndexList[2].iconPc} />
              </STC.TitleImgDiv>
              <STC.Title>{t('main_tab_update')}</STC.Title>
            </STC.TitleWrapper>
            <STC.SubGridDiv>
              <Slider
                {...setting}
                prevArrow={<PrevArrow type="UPDATE" />}
                nextArrow={<NextArrow type="UPDATE" />}
                beforeChange={handleBeforeChange('UPDATE')}
                afterChange={handleAfterChange('UPDATE')}
                slidesToShow={updateList?.length <= 3 ? updateList?.length : 3}
              >
                {updateList.map((item: IStreamListType) => (
                  <MainListItem
                    key={item.vodId}
                    link={link}
                    item={item}
                    setIsShowSM={setIsShowSM}
                    setLink={setLink}
                    setTitle={setTitle}
                  />
                ))}
              </Slider>
            </STC.SubGridDiv>
          </div>
        )}

        {weeklyList?.length > 0 && (
          <div style={{ width: weeklyList?.length === 1 ? '33%' : weeklyList?.length === 2 ? '67%' : '100%' }}>
            <STC.TitleWrapper>
              <STC.TitleImgDiv>
                <STC.TitleImg src={mainIndexList[3].iconPc} />
              </STC.TitleImgDiv>
              <STC.Title>{t('main_tab_weekly')}</STC.Title>
            </STC.TitleWrapper>
            <STC.SubGridDiv>
              <Slider
                {...setting}
                prevArrow={<PrevArrow type="WEEKLY" />}
                nextArrow={<NextArrow type="WEEKLY" />}
                beforeChange={handleBeforeChange('WEEKLY')}
                afterChange={handleAfterChange('WEEKLY')}
                slidesToShow={weeklyList?.length <= 3 ? weeklyList?.length : 3}
              >
                {weeklyList.map((item: IStreamListType) => (
                  <MainListItem
                    key={item.vodId}
                    link={link}
                    item={item}
                    setIsShowSM={setIsShowSM}
                    setLink={setLink}
                    setTitle={setTitle}
                  />
                ))}
              </Slider>
            </STC.SubGridDiv>
          </div>
        )}

        {monthlyList?.length > 0 && (
          <div style={{ width: monthlyList?.length === 1 ? '33%' : monthlyList?.length === 2 ? '67%' : '100%' }}>
            <STC.TitleWrapper>
              <STC.TitleImgDiv>
                <STC.TitleImg src={mainIndexList[4].iconPc} />
              </STC.TitleImgDiv>
              <STC.Title>{t('main_tab_monthly')}</STC.Title>
            </STC.TitleWrapper>
            <STC.SubGridDiv>
              <Slider
                {...setting}
                prevArrow={<PrevArrow type="MONTHLY" />}
                nextArrow={<NextArrow type="MONTHLY" />}
                beforeChange={handleBeforeChange('MONTHLY')}
                afterChange={handleAfterChange('MONTHLY')}
                slidesToShow={monthlyList?.length <= 3 ? monthlyList?.length : 3}
              >
                {monthlyList.map((item: IStreamListType) => (
                  <MainListItem
                    key={item.vodId}
                    link={link}
                    item={item}
                    setIsShowSM={setIsShowSM}
                    setLink={setLink}
                    setTitle={setTitle}
                  />
                ))}
              </Slider>
            </STC.SubGridDiv>
          </div>
        )}

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
      </STC.StreamList>
      <STC.MobileBottomList>
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
      </STC.MobileBottomList>
      <ShareModal isShow={isShowSM} link={link} title={title} setIsShow={() => setIsShowSM(!isShowSM)} />
    </>
  );
};

export default SlideGrid;
