import React, { useState } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';

import { numberWithComma } from '@lib/numberWithComma';

import userProfileImg from '@images/userProfile.png';
import { IStreamListType } from '@type/streamType';
import { PAGE_URL } from '@path';
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

import firstBgImg from '@images/01.png';
import secondBgImg from '@images/02.png';
import thirdBgImg from '@images/03.png';
import fourthBgImg from '@images/04.png';
import fifthBgImg from '@images/05.png';

import ViewImg from '@images/view-list.png';
import LikeImg from '@images/like-list.png';

import Profile from '@components/Profile';
import MainPlayerItem from '../MainPlayer/MainPlayerItem';
import useMainMiddle from './useMainMiddle';
import * as STC from './MainMiddle.style';

interface IMainMiddleProps {
  tab: string;
  currentMenu: number;
  list: IStreamListType[];
}

const MainMiddle = ({ tab, currentMenu, list }: IMainMiddleProps) => {
  const { mouseOverCheck, dragging, setMouseOverCheck, onClickVod, handleAfterChange, handleBeforeChange } =
    useMainMiddle();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider | null>();
  const [mainIndexList, setMainindexList] = useState([
    {
      bgIndex: firstBgImg,
      bgTitle: liveBackgroundImg,
      iconPc: livePcIconImg,
      iconMb: liveMobileIconImg,
      title: 'LIVE',
    },
    {
      bgIndex: secondBgImg,
      bgTitle: hotBackgroundImg,
      iconPc: hotPcIconImg,
      iconMb: hotMobileIconImg,
      title: 'HOT VOD',
    },
    {
      bgIndex: thirdBgImg,
      bgTitle: updateBackgroundImg,
      iconPc: updatePcIconImg,
      iconMb: updateMobileIconImg,
      title: 'UPDATE',
    },
    {
      bgIndex: fourthBgImg,
      bgTitle: weeklyBackgroundImg,
      iconPc: weeklyPcIconImg,
      iconMb: weeklyMobileIconImg,
      title: 'Weekly BEST',
    },
    {
      bgIndex: fifthBgImg,
      bgTitle: monthlyBackgroundImg,
      iconPc: monthlyPcIconImg,
      iconMb: monthlyMobileIconImg,
      title: 'Monthly BEST',
    },
  ]);

  const settings = {
    dots: tab === 'LIVE' ? true : false,
    dotsClass: 'slick-dots slick-thumb',
    fade: true,
    customPaging: () => <STC.customDot className="customDot" />,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    swipe: false,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
      handleBeforeChange();
    },
    afterChange: handleAfterChange,
  };

  const handleNextButton = () => {
    nav1?.slickNext();
  };
  const handlePreButton = () => {
    nav1?.slickPrev();
  };

  return (
    <STC.Container>
      <STC.Content>
        <STC.LeftCotainer>
          <STC.TitleWrapper>
            <STC.TitleImgDiv>
              <STC.TitleImg src={mainIndexList[currentMenu].iconPc} />
            </STC.TitleImgDiv>
            <STC.Title>{tab}</STC.Title>
          </STC.TitleWrapper>
          <STC.SubTitleWrapper>
            <STC.SubTitleImgDiv>
              <Profile
                type="ps36"
                src={list[currentIndex]?.profile ?? userProfileImg}
                channelId={list[currentIndex]?.channelId}
              />
            </STC.SubTitleImgDiv>
            <STC.SubTitleRightWrapper>
              <STC.SubTitleRightTopWrapper>
                <STC.SubTitleRightTopFirstText>{list[currentIndex]?.title}</STC.SubTitleRightTopFirstText>
              </STC.SubTitleRightTopWrapper>
              <STC.SubTitleRightBoottomWrapper>
                <STC.SubTitleRightBottomFirstText>{list[currentIndex]?.name}</STC.SubTitleRightBottomFirstText>
                <STC.SubTitleRightBottomSecondWrapper>
                  <STC.SubTitleRightBottomSecondImg src={ViewImg} />
                  <STC.SubTitleRightBottomSecondText>
                    {list[currentIndex]?.viewCount && numberWithComma(list[currentIndex]?.viewCount)}
                  </STC.SubTitleRightBottomSecondText>
                  <STC.Split>•</STC.Split>
                  <STC.SubTitleRightBottomSecondImg src={LikeImg} />
                  <STC.SubTitleRightBottomSecondText>
                    {list[currentIndex]?.viewCount && numberWithComma(list[currentIndex]?.likeCount)}
                  </STC.SubTitleRightBottomSecondText>
                  <STC.Split>•</STC.Split>
                </STC.SubTitleRightBottomSecondWrapper>
                <STC.SubTitleRightBottomthirdText>{list[currentIndex]?.streamTime}</STC.SubTitleRightBottomthirdText>
              </STC.SubTitleRightBoottomWrapper>
            </STC.SubTitleRightWrapper>
          </STC.SubTitleWrapper>
        </STC.LeftCotainer>
        <STC.RightContainer>
          <Slider
            ref={(slider) => {
              setNav1(slider);
            }}
            {...settings}
          >
            {list.map(
              (item: IStreamListType, i) =>
                i <= 4 && (
                  <div
                    key={i}
                    onClick={() => {
                      onClickVod(list[currentIndex]);
                    }}
                  >
                    <MainPlayerItem key={item.vodId} item={item} />
                  </div>
                ),
            )}
          </Slider>
          <STC.RightContainerGradient1
            className="hello"
            onClick={() => {
              if (!dragging) {
                onClickVod(list[currentIndex]);
              }
            }}
            onMouseOver={() => {
              setMouseOverCheck(true);
            }}
            onMouseLeave={() => {
              setMouseOverCheck(false);
            }}
            mouseOverCheck={mouseOverCheck}
            currentIndex={currentIndex}
          />
          <STC.CustomNextArrow
            onMouseOver={() => {
              setMouseOverCheck(true);
            }}
            onClick={handleNextButton}
            mouseOverCheck={mouseOverCheck}
            currentIndex={currentIndex}
          />
          <STC.CustomPreArrow
            onMouseOver={() => {
              setMouseOverCheck(true);
            }}
            onClick={handlePreButton}
            mouseOverCheck={mouseOverCheck}
            currentIndex={currentIndex}
          />
        </STC.RightContainer>
      </STC.Content>
      {tab !== 'LIVE' && (
        <STC.BackgroundIndexDiv>
          <STC.BackgroundIndexImg src={mainIndexList[currentIndex].bgIndex} />
        </STC.BackgroundIndexDiv>
      )}
    </STC.Container>
  );
};
export default MainMiddle;
