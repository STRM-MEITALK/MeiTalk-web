import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import RequestStatus from '@lib/RequestStatus';
import { Tab, Tabs } from '@components/TabMenu/TabMenu';
import MainMiddle from './MainMiddle';
import NoLive from './NoLive';
import * as STC from './PcMiddle.style';
import usePcMiddle from './usePcMiddle';

interface IPcMiddle {
  scrollRef: any;
  activeTab: number;
  handleChange: (_: number) => void;
  setNav1: (_: Slider | null) => void;
  currentStreamUrl: string | null;
}

const PcMiddle = ({ scrollRef, activeTab, handleChange, setNav1, currentStreamUrl }: IPcMiddle) => {
  const { t } = useTranslation();
  const { liveList, hotList, updateList, weeklyList, monthlyList, liveListStatus, settings, isLiveFinish } =
    usePcMiddle({
      handleChange,
    });

  return (
    <STC.PcTab ref={scrollRef}>
      <STC.TabDiv currentStreamUrl={currentStreamUrl} isLiveFinish={isLiveFinish}>
        <STC.TabsWrapper>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label={t('common_live')} value={0} />
            <Tab label={t('main_tab_hot')} value={1} />
            <Tab label={t('main_tab_update')} value={2} />
            <Tab label={t('main_tab_weekly')} value={3} />
            <Tab label={t('main_tab_monthly')} value={4} />
          </Tabs>
        </STC.TabsWrapper>
      </STC.TabDiv>
      <Slider
        ref={(slider) => {
          setNav1(slider);
        }}
        {...settings}
      >
        <STC.MainMiddleWrapper>
          {(liveListStatus === RequestStatus.SUCCESS || liveListStatus === RequestStatus.FAIL) &&
          liveList.length === 0 ? (
            <NoLive currentMenu={0} />
          ) : (
            <MainMiddle tab={t('common_live')} currentMenu={0} list={liveList} />
          )}
        </STC.MainMiddleWrapper>
        <STC.MainMiddleWrapper>
          {hotList.length === 0 ? (
            <NoLive currentMenu={1} />
          ) : (
            <MainMiddle tab={t('carousel_title_hot')} currentMenu={1} list={hotList} />
          )}
        </STC.MainMiddleWrapper>
        <STC.MainMiddleWrapper>
          {updateList.length === 0 ? (
            <NoLive currentMenu={2} />
          ) : (
            <MainMiddle tab={t('main_tab_update')} currentMenu={2} list={updateList} />
          )}
        </STC.MainMiddleWrapper>
        <STC.MainMiddleWrapper>
          {weeklyList.length === 0 ? (
            <NoLive currentMenu={3} />
          ) : (
            <MainMiddle tab={t('main_tab_weekly')} currentMenu={3} list={weeklyList} />
          )}
        </STC.MainMiddleWrapper>
        <STC.MainMiddleWrapper>
          {monthlyList.length === 0 ? (
            <NoLive currentMenu={4} />
          ) : (
            <MainMiddle tab={t('main_tab_monthly')} currentMenu={4} list={monthlyList} />
          )}
        </STC.MainMiddleWrapper>
      </Slider>
    </STC.PcTab>
  );
};

export default PcMiddle;
