import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  getAfterVideo,
  getLikedVideo,
  getMyVideo,
  setInitialize,
  setInitializeMyVideo,
  setInitializeChannelVideo,
  getChannelVideoList,
} from '@slice/studioSlice';

const useFilterModal = ({
  type,
  isShowSetting,
  setIsShowSetting,
  searchValue,
  channelId,
}: {
  type: string;
  isShowSetting: boolean;
  setIsShowSetting: (_: boolean) => void;
  searchValue: string;
  channelId?: string;
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const publicOptions = [
    {
      value: '',
      label: t('common_all'),
    },
    {
      value: 'false',
      label: t('common_private'),
    },
    {
      value: 'true',
      label: t('common_public'),
    },
  ];

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

  const [publicTemp, setPublicTemp] = useState<string>('');
  const [categoryTemp, setCategoryTemp] = useState<string>('N');

  const onHandleCategory = (data: string) => {
    setCategoryTemp(data);
  };

  const onHandlePublic = (data: string) => {
    setPublicTemp(data);
  };

  const onSaveSetting = () => {
    if (type === 'saved') {
      dispatch(setInitialize());
      dispatch(
        getAfterVideo({
          type: categoryTemp,
          search: searchValue,
          pageNo: 0,
          pageSize: 24,
        }),
      );
    } else if (type === 'liked') {
      dispatch(setInitialize());
      dispatch(
        getLikedVideo({
          type: categoryTemp,
          search: searchValue,
          pageNo: 0,
          pageSize: 24,
        }),
      );
    } else if (type === 'studio') {
      dispatch(setInitializeMyVideo());
      dispatch(
        getMyVideo({
          isPublic: publicTemp,
          orderType: categoryTemp,
          search: searchValue,
          pageNo: 0,
          pageSize: 24,
        }),
      );
    } else if (type === 'channel' && channelId) {
      dispatch(setInitializeChannelVideo());
      dispatch(
        getChannelVideoList({
          channelId,
          orderType: categoryTemp,
          search: searchValue,
          pageNo: 0,
          pageSize: 24,
        }),
      );
    }

    setIsShowSetting(false);
  };

  return {
    onSaveSetting,
    categoryOptions,
    onHandleCategory,
    categoryTemp,
    publicOptions,
    publicTemp,
    onHandlePublic,
  };
};

export default useFilterModal;
