/* eslint-disable @typescript-eslint/no-empty-function */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLiveFinish } from '@slice/liveViewSlice';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { logout } from '@lib/logout';
import { StreamType } from '@type/streamType';
import { RootState } from '@src/stores';
import { setBackTrigger } from '@slice/broadSlice';
import {
  getLiveList,
  getLiveFrameList,
  getHotList,
  getUpdateList,
  getWeeklyList,
  getMonthlyList,
} from '@slice/streamSlice';
import useModal from '@hooks/useModal';

const useMainPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { onClickCheckUser } = useModal();

  const tabValueOption = [
    {
      value: 0,
      label: t('common_live'),
    },
    {
      value: 1,
      label: t('main_tab_hot'),
    },
    {
      value: 2,
      label: t('main_tab_update'),
    },
    {
      value: 3,
      label: t('main_tab_weekly'),
    },
    {
      value: 4,
      label: t('main_tab_monthly'),
    },
  ];

  const [type, setType] = useState<StreamType>('LIVE');
  const [currentStreamUrl, setCurrentStreamUrl] = useState<string>('');
  const [visibleLiveList, setVisibleLiveList] = useState(true);
  const [nav1, setNav1] = useState<Slider | null>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabOverScrollCheck, setTabOverScrollCheck] = useState<boolean>(false);
  const [beforeScrollY, setBeforeScrollY] = useState<number>(0);
  const [clickMainLive, setClickMainLive] = useState(false);
  const [selectedLive, setSelectedLive] = useState<number>();
  const [initVideoEnd, setInitVideoEnd] = useState(false);
  const [middleType, setMiddleType] = useState(true);

  const scrollRef = useRef<any>();

  const videoRef = useRef<HTMLVideoElement>(null);

  const {
    liveList,
    liveFrameList,
    hotList,
    updateList,
    weeklyList,
    monthlyList,
    livePageNo,
    liveFramePageNo,
    hotPageNo,
    updatePageNo,
    weeklyPageNo,
    monthlyPageNo,
    liveTotalElements,
    liveFrameTotalElements,
    hotTotalElements,
    updateTotalElements,
    weeklyTotalElements,
    monthlyTotalElements,
    chatKey,
    userId,
    isFullScreen,
    scrollY,
    isLiveFinish,
    moveAndLogout,
  } = useSelector(({ stream, auth, player, liveView, globalModal }: RootState) => ({
    liveList: stream.liveListInfo.data.streams,
    liveFrameList: stream.liveFrameListInfo.data.streams,
    hotList: stream.hotListInfo.data.streams,
    updateList: stream.updateListInfo.data.streams,
    weeklyList: stream.weeklyListInfo.data.streams,
    monthlyList: stream.monthlyListInfo.data.streams,
    livePageNo: stream.liveListInfo.data.pageNo,
    liveFramePageNo: stream.liveFrameListInfo.data.pageNo,
    hotPageNo: stream.hotListInfo.data.pageNo,
    updatePageNo: stream.updateListInfo.data.pageNo,
    weeklyPageNo: stream.weeklyListInfo.data.pageNo,
    monthlyPageNo: stream.monthlyListInfo.data.pageNo,
    liveTotalElements: stream.liveListInfo.data.totalElements,
    liveFrameTotalElements: stream.liveFrameListInfo.data.totalElements,
    hotTotalElements: stream.hotListInfo.data.totalElements,
    updateTotalElements: stream.updateListInfo.data.totalElements,
    weeklyTotalElements: stream.weeklyListInfo.data.totalElements,
    monthlyTotalElements: stream.monthlyListInfo.data.totalElements,
    chatKey: stream.chatKey,
    userId: auth.loginInfo.data.userId,
    isFullScreen: player.isFullScreen,
    scrollY: globalModal.scrollY,
    isLiveFinish: liveView.isLiveFinish,
    moveAndLogout: auth.moveAndLogout,
  }));

  const handleChange = (value: number) => {
    setActiveTab(value);
  };

  const liveTabScroll = () => {
    setActiveTab(0);
    window.scrollBy({
      top: scrollRef?.current?.getBoundingClientRect().top - 150,
      behavior: 'smooth',
    });
  };

  const tabScroll = () => {
    window.scrollBy({
      top: scrollRef?.current?.getBoundingClientRect().top - 150,
      behavior: 'smooth',
    });
  };

  const fetchLiveList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || liveList.length < liveTotalElements) {
        dispatch(
          getLiveList({
            type: 'LIVE',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [liveList, liveTotalElements, livePageNo],
  );

  const fetchLiveFrameList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || liveList.length < liveFrameTotalElements) {
        dispatch(
          getLiveFrameList({
            type: 'LIVE',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [liveFrameList, liveFrameTotalElements, liveFramePageNo],
  );

  const fetchHotList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || hotList.length < hotTotalElements) {
        dispatch(
          getHotList({
            type: 'HOT',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [hotList, hotTotalElements, hotPageNo],
  );
  const fetchUpdateList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || updateList.length < updateTotalElements) {
        dispatch(
          getUpdateList({
            type: 'VOD',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [updateList, updateTotalElements, updatePageNo],
  );
  const fetchWeeklyList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || weeklyList.length < weeklyTotalElements) {
        dispatch(
          getWeeklyList({
            type: 'WEEKLY',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [weeklyList, weeklyTotalElements, weeklyPageNo],
  );
  const fetchMonthlyList = useCallback(
    (pageNo) => {
      if (pageNo === 0 || monthlyList.length < monthlyTotalElements) {
        dispatch(
          getMonthlyList({
            type: 'MONTHLY',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [monthlyList, monthlyTotalElements, monthlyPageNo],
  );

  const handelInfiniteScroll = () => {
    setBeforeScrollY(window.scrollY);

    if (document.body.style.position !== 'fixed') {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        switch (type) {
          case 'LIVE':
            fetchLiveList(livePageNo + 1);
            break;
          case 'HOT':
            fetchHotList(hotPageNo + 1);
            break;
          case 'VOD':
            fetchUpdateList(updatePageNo + 1);
            break;
          case 'WEEKLY':
            fetchWeeklyList(weeklyPageNo + 1);
            break;
          case 'MONTHLY':
            fetchMonthlyList(monthlyPageNo + 1);
            break;
          default:
            break;
        }
      }
    }
  };

  const onClickVod = useCallback(() => {
    onClickCheckUser(userId, chatKey, `${selectedLive}`);
  }, [userId, chatKey, selectedLive]);

  const onClickLive = useCallback((vodId: number) => {
    dispatch(setIsLiveFinish(false));
    setClickMainLive(false);
    setSelectedLive(vodId);
  }, []);

  useEffect(() => {
    if (scrollY > scrollRef?.current?.getBoundingClientRect().bottom - 100) {
      setTabOverScrollCheck(true);
    } else if (scrollY <= scrollRef?.current?.getBoundingClientRect().bottom - 100) {
      setTabOverScrollCheck(false);
    }
  }, [scrollY]);

  useEffect(() => {
    if (selectedLive) {
      setClickMainLive(true);
    }
  }, [selectedLive]);

  useEffect(() => {
    if (moveAndLogout) {
      logout();
      if (window.location.pathname === PAGE_URL.STREAM) {
        dispatch(setBackTrigger({ trigger: false }));
      } else {
        window.location.href = PAGE_URL.MAIN;
      }
    }
  }, [moveAndLogout]);

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);

    return () => {
      window.removeEventListener('scroll', handelInfiniteScroll);
    };
  }, [
    type,
    livePageNo,
    hotPageNo,
    updatePageNo,
    weeklyPageNo,
    monthlyPageNo,
    liveTotalElements,
    hotTotalElements,
    updateTotalElements,
    weeklyTotalElements,
    monthlyTotalElements,
  ]);

  useEffect(() => {
    if (visibleLiveList) {
      fetchLiveFrameList(0);
    }
  }, [visibleLiveList]);

  useEffect(() => {
    nav1?.slickGoTo(activeTab);
    if (activeTab === 0) {
      setType('LIVE');
      fetchLiveList(0);
      if (liveList.length === 0) {
        fetchLiveFrameList(0);
        fetchHotList(0);
        fetchUpdateList(0);
        fetchWeeklyList(0);
        fetchMonthlyList(0);
      }
    } else if (activeTab === 1) {
      setType('HOT');
    } else if (activeTab === 2) {
      setType('VOD');
    } else if (activeTab === 3) {
      setType('WEEKLY');
    } else {
      setType('MONTHLY');
    }
  }, [activeTab]);

  useEffect(() => {
    window.scroll(0, beforeScrollY);
  }, [activeTab, liveList]);

  useEffect(() => {
    if (middleType) {
      setActiveTab(0);
    } else {
      window.scroll(0, scrollRef?.current?.getBoundingClientRect().bottom - 100);
    }
  }, [middleType]);

  useEffect(() => {
    videoRef.current?.addEventListener('ended', function () {
      setInitVideoEnd(true);
    });
  }, []);

  return {
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
  };
};

export default useMainPage;
