import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import userProfileImg from '@images/userProfile.png';

import livePcIconImg from '@images/live-pc.png';
import liveBackgroundImg from '@images/live-bg.png';
import GettingIcon from '@images/getting-ico.png';
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
import * as STC from './NoLive.style';

const MainMiddle = ({ currentMenu }: any) => {
  const { t } = useTranslation();

  const [mainIndexList, setMainindexList] = useState([
    {
      bgTitle: liveBackgroundImg,
      iconPc: livePcIconImg,
      title: 'LIVE',
    },
    {
      bgTitle: hotBackgroundImg,
      iconPc: hotPcIconImg,
      title: 'HOT VOD',
    },
    {
      bgTitle: updateBackgroundImg,
      iconPc: updatePcIconImg,
      title: 'UPDATE',
    },
    {
      bgTitle: weeklyBackgroundImg,
      iconPc: weeklyPcIconImg,
      title: 'Weekly BEST',
    },
    {
      bgTitle: monthlyBackgroundImg,
      iconPc: monthlyPcIconImg,
      title: 'Monthly BEST',
    },
  ]);

  return (
    <STC.Container>
      <STC.Content>
        <STC.LeftCotainer>
          <STC.TitleWrapper>
            <STC.TitleImgDiv>
              <STC.TitleImg src={mainIndexList[currentMenu].iconPc} />
            </STC.TitleImgDiv>
            <STC.Title>{mainIndexList[currentMenu].title}</STC.Title>
          </STC.TitleWrapper>
          <STC.SubTitleWrapper>
            <STC.SubTitleImgDiv>
              <STC.Profile>
                <STC.ProfileImg src={userProfileImg} alt="" />
              </STC.Profile>
            </STC.SubTitleImgDiv>
            <STC.SubTitleRightWrapper>
              <STC.SubTitleRightTopWrapper>
                <STC.SubTitleRightTopFirstText>{t('no_Live_title')}</STC.SubTitleRightTopFirstText>
              </STC.SubTitleRightTopWrapper>
            </STC.SubTitleRightWrapper>
          </STC.SubTitleWrapper>
        </STC.LeftCotainer>
        <STC.RightContainer>
          <STC.RightWrapper>
            <STC.RightPlayerDiv>
              <img src={GettingIcon} alt="" />
              <STC.ReadyText>{currentMenu === 0 ? t('no_live_contents') : t('no_vod_contents')}</STC.ReadyText>
            </STC.RightPlayerDiv>
          </STC.RightWrapper>
        </STC.RightContainer>
      </STC.Content>
      <STC.BackgroundTextDiv>
        <STC.BackgroundTextImg src={mainIndexList[currentMenu].bgTitle} alt="" />
      </STC.BackgroundTextDiv>
    </STC.Container>
  );
};

export default MainMiddle;
