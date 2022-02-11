import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import RequestStatus from '@src/shared/lib/RequestStatus';
import { getChannelVideoList, setInitializeChannelVideo, getChannelTopVideo } from '@slice/studioSlice';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';

const useVideos = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { channelId } = useParams();

  const [beforeScrollY, setBeforeScrollY] = useState<number>(0);
  const [category, setCategory] = useState<IOptionType>();
  const [categoryValue, setCategoryValue] = useState<IOptionType[]>();
  const [searchValue, setSearchValue] = useState('');
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [loadFlag, setLoadFlag] = useState(false);

  const categoryOptions = [
    {
      value: 'N',
      label: t('mypage_select_newest'),
    },
    {
      value: 'E',
      label: t('mypage_select_earliest'),
    },
    {
      value: 'L',
      label: t('mypage_select_liked'),
    },
    {
      value: 'V',
      label: t('mypage_select_viewed'),
    },
    {
      value: 'C',
      label: t('mypage_select_comments'),
    },
  ];

  const { channelVideo, channelVideoTotalElements, channelVideoPageNo, channelVideoTop, channelVideoStatus } =
    useSelector(({ studio }: RootState) => ({
      channelVideo: studio.getChannelVideo.data.streams,
      channelVideoTotalElements: studio.getChannelVideo.data.totalElements,
      channelVideoPageNo: studio.getChannelVideo.data.pageNo,
      channelVideoTop: studio.getChannelTopVideo.data,
      channelVideoStatus: studio.getChannelVideo.status,
    }));

  const fetchChannelList = useCallback(
    (orderType, searchValue, pageNo) => {
      if (channelId) {
        if (pageNo === 0 || channelVideo.length < channelVideoTotalElements) {
          dispatch(
            getChannelVideoList({
              channelId,
              orderType,
              search: searchValue,
              pageNo,
              pageSize: 24,
            }),
          );
        }
      }
    },
    [channelId, channelVideo, channelVideoTotalElements, channelVideoPageNo],
  );

  const handleSelect = useCallback(
    (value) => {
      setCategory(value);
      dispatch(setInitializeChannelVideo());
      fetchChannelList(value.value, searchValue, 0);
    },
    [searchValue],
  );

  const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.length > 0) {
      dispatch(setInitializeChannelVideo());
      fetchChannelList(category?.value, searchValue, 0);
    }
  };

  const handleSearchBtn = () => {
    dispatch(setInitializeChannelVideo());
    fetchChannelList(category?.value, searchValue, 0);
  };

  const handelInfiniteScroll = () => {
    setBeforeScrollY(window.scrollY);

    if (document.body.style.position !== 'fixed') {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        fetchChannelList(category?.value, searchValue, channelVideoPageNo + 1);
      }
    }
  };

  useEffect(() => {
    dispatch(setInitializeChannelVideo());
    fetchChannelList('N', '', 0);
    if (channelId) {
      dispatch(
        getChannelTopVideo({
          channelId,
          orderType: 'T',
          search: '',
          pageNo: 0,
          pageSize: 24,
        }),
      );
    }
  }, []);

  useEffect(() => {
    const tempOptions: IOptionType[] = categoryOptions.map((data, idx) => {
      const key = `${idx}`;
      return {
        value: data.value,
        label: (
          <div key={data.value + key} style={{ display: 'flex' }}>
            {data.label}
          </div>
        ),
      };
    });
    setCategoryValue(tempOptions);
    setCategory(tempOptions[0]);
  }, []);

  useEffect(() => {
    if (channelVideoStatus === RequestStatus.SUCCESS) {
      setLoadFlag(true);
    }
  }, [channelVideoStatus]);

  useEffect(() => {
    window.scroll(0, beforeScrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);

    return () => {
      window.removeEventListener('scroll', handelInfiniteScroll);
    };
  }, [channelVideoPageNo, channelVideoTotalElements]);

  return {
    channelId,
    channelVideo,
    channelVideoTotalElements,
    category,
    categoryValue,
    handleSelect,
    isShowSetting,
    setIsShowSetting,
    searchValue,
    handleChangeFilterText,
    handlePress,
    handleSearchBtn,
    channelVideoTop,
    loadFlag,
  };
};

export default useVideos;
