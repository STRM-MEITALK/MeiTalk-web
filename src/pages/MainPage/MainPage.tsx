/* eslint-disable no-nested-ternary */
import React from 'react';
import './PcMiddle/MainMiddle/slick.css';
import './PcMiddle/MainMiddle/slick-theme.css';

import { useTranslation } from 'react-i18next';

import moreLargeImg from '@images/more-large.png';

import LiveFrame from './LiveFrame';
import useMainPage from './useMainPage';
import Player from './Player';

import * as STC from './MainPage.style';

import MainGrid from './MainGrid';

const MainPage = () => {
  const { t } = useTranslation();
  const {
    currentStreamUrl,
    visibleLiveList,
    activeTab,
    tabValueOption,
    clickMainLive,
    scrollRef,
    videoRef,
    isFullScreen,
    selectedLive,
    isLiveFinish,
    initVideoEnd,
    tabOverScrollCheck,
    middleType,
    setMiddleType,
    setVisibleLiveList,
    setCurrentStreamUrl,
    setNav1,
    liveTabScroll,
    tabScroll,
    onClickVod,
    onClickLive,
    handleChange,
  } = useMainPage();

  return (
    <STC.Container>
      <STC.Content>
        <STC.LiveWrapper>
          <STC.PlayerWrapper
            isFullScreen={isFullScreen}
            onMouseOver={() => {
              setVisibleLiveList(true);
            }}
            onMouseLeave={() => {
              setVisibleLiveList(false);
            }}
          >
            {selectedLive && (
              <STC.MainTopGradientDiv visibleLiveList={visibleLiveList}>
                <STC.MainTopGradientGoToLive onClick={() => onClickVod()}>
                  <STC.MainTopGradientGoToLiveText>{t('go_to_live')}</STC.MainTopGradientGoToLiveText>
                  <STC.MainTopGradientGoToLiveDiv>
                    <STC.MainTopGradientGoToLiveImg src={moreLargeImg} />
                  </STC.MainTopGradientGoToLiveDiv>
                </STC.MainTopGradientGoToLive>
              </STC.MainTopGradientDiv>
            )}
            {currentStreamUrl !== '' && (
              <Player
                currentStreamUrl={currentStreamUrl}
                clickMainLive={clickMainLive}
                visibleLiveList={visibleLiveList}
                setVisibleLiveList={setVisibleLiveList}
              />
            )}
            <STC.LiveFramePC>
              <LiveFrame
                isMobile={false}
                visibleLiveList={visibleLiveList}
                setCurrentStreamUrl={setCurrentStreamUrl}
                currentStreamUrl={currentStreamUrl}
                onClickLive={onClickLive}
                liveTabScroll={liveTabScroll}
              />
            </STC.LiveFramePC>
          </STC.PlayerWrapper>
          <STC.LiveFrameMobile>
            <LiveFrame
              isMobile={true}
              visibleLiveList={true}
              setCurrentStreamUrl={setCurrentStreamUrl}
              currentStreamUrl={currentStreamUrl}
              onClickLive={onClickLive}
              liveTabScroll={liveTabScroll}
            />
          </STC.LiveFrameMobile>
        </STC.LiveWrapper>
        <MainGrid
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
      </STC.Content>
    </STC.Container>
  );
};

export default MainPage;
