import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { RootState } from '@src/stores/index';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { handlePreparingModal } from '@slice/globalModalSlice';
import { getAfterVideo, getLikedVideo, setInitialize, setInitializeDelete } from '@slice/studioSlice';

const useMyPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [beforeScrollY, setBeforeScrollY] = useState<number>(0);
  const [category, setCategory] = useState<IOptionType>();
  const [categoryValue, setCategoryValue] = useState<IOptionType[]>();
  const [searchValue, setSearchValue] = useState('');
  const [isShowSetting, setIsShowSetting] = useState(false);
  const [isShowSettingLiked, setIsShowSettingLiked] = useState(false);
  const {
    userData,
    afterVideo,
    afterVideoTotalElements,
    afterVideoPageNo,
    likedVideo,
    likedVideoTotalElements,
    likedVideoPageNo,
    saveResult,
    likeResult,
  } = useSelector(({ auth, studio }: RootState) => ({
    userData: auth.loginInfo.data,
    afterVideo: studio.afterVideoList.data.streams,
    afterVideoTotalElements: studio.afterVideoList.data.totalElements,
    afterVideoPageNo: studio.afterVideoList.data.pageNo,
    likedVideo: studio.likedVideoList.data.streams,
    likedVideoTotalElements: studio.likedVideoList.data.totalElements,
    likedVideoPageNo: studio.likedVideoList.data.pageNo,
    likeResult: studio.deleteLikeResponse.response.output,
    saveResult: studio.deleteSaveResponse.response.output,
  }));

  const handleClickEdit = useCallback(() => {
    dispatch(handlePreparingModal(true));
  }, []);

  const handleClickStudio = useCallback(() => {
    window.location.href = PAGE_URL.MY_STUDIO;
  }, []);

  const handleClickChannel = useCallback(() => {
    window.location.href = `${PAGE_URL.MY_CHANNEL}/${userData.channelId}`;
  }, [userData]);

  const handleChange = (value: number) => {
    setSearchValue('');
    setActiveTab(value);
    setCategory(categoryOptions[0]);
  };

  useEffect(() => {
    dispatch(setInitialize());
    switch (activeTab) {
      case 0:
        fetchVideoList(0, 'N', '');
        break;
      case 1:
        fetchLikedVideoList(0, 'N', '');
        break;
      default:
        break;
    }
  }, [activeTab]);

  const tabsOptions = [
    {
      value: 0,
      label: t('mypage_tab1'),
    },
    {
      value: 1,
      label: t('mypage_tab3'),
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

  const fetchVideoList = useCallback(
    (pageNo, type, searchValue) => {
      if (pageNo === 0 || afterVideo.length < afterVideoTotalElements) {
        dispatch(
          getAfterVideo({
            type,
            search: searchValue,
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [afterVideo, afterVideoTotalElements, afterVideoPageNo],
  );

  const fetchLikedVideoList = useCallback(
    (pageNo, type, searchValue) => {
      if (pageNo === 0 || likedVideo.length < likedVideoTotalElements) {
        dispatch(
          getLikedVideo({
            type,
            search: searchValue,
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [likedVideo, likedVideoTotalElements, likedVideoPageNo],
  );

  const handleSelect = useCallback(
    (value) => {
      setCategory(value);
      dispatch(setInitialize());
      switch (activeTab) {
        case 0:
          fetchVideoList(0, value.value, searchValue);
          break;
        case 1:
          fetchLikedVideoList(0, value.value, searchValue);
          break;
        default:
          break;
      }
    },
    [searchValue, activeTab],
  );

  const handelInfiniteScroll = () => {
    setBeforeScrollY(window.scrollY);

    if (document.body.style.position !== 'fixed') {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        switch (activeTab) {
          case 0:
            fetchVideoList(afterVideoPageNo + 1, category?.value, searchValue);
            break;
          case 1:
            fetchLikedVideoList(likedVideoPageNo + 1, category?.value, searchValue);
            break;
          default:
            break;
        }
      }
    }
  };

  const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.length > 0) {
      dispatch(setInitialize());
      switch (activeTab) {
        case 0:
          fetchVideoList(0, category?.value, searchValue);
          break;
        case 1:
          fetchLikedVideoList(0, category?.value, searchValue);
          break;
        default:
          break;
      }
    }
  };

  const handleSearchBtn = () => {
    if (searchValue.length > 0) {
      dispatch(setInitialize());
      switch (activeTab) {
        case 0:
          fetchVideoList(0, category?.value, searchValue);
          break;
        case 1:
          fetchLikedVideoList(0, category?.value, searchValue);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const tempCountryOptions: IOptionType[] = categoryOptions.map((data, idx) => {
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
    setCategoryValue(tempCountryOptions);
    setCategory(tempCountryOptions[0]);
  }, [t]);

  useEffect(() => {
    window.scroll(0, beforeScrollY);
  }, [activeTab]);

  useEffect(() => {
    dispatch(setInitialize());
    fetchVideoList(0, 'N', '');
    fetchLikedVideoList(0, 'N', '');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);

    return () => {
      window.removeEventListener('scroll', handelInfiniteScroll);
    };
  }, [afterVideoPageNo, afterVideoTotalElements, likedVideoPageNo, likedVideoTotalElements]);

  useEffect(() => {
    if (saveResult === 0) {
      dispatch(setInitialize());
      fetchVideoList(0, category?.value, searchValue);
    } else if (likeResult === 0) {
      dispatch(setInitialize());
      fetchLikedVideoList(0, category?.value, searchValue);
    }
    dispatch(setInitializeDelete());
  }, [saveResult, likeResult]);

  return {
    userData,
    handleClickEdit,
    handleClickStudio,
    handleClickChannel,
    activeTab,
    handleChange,
    handleSelect,
    category,
    categoryValue,
    handleChangeFilterText,
    afterVideoTotalElements,
    searchValue,
    handlePress,
    afterVideo,
    likedVideo,
    likedVideoTotalElements,
    handleSearchBtn,
    tabsOptions,
    isShowSetting,
    setIsShowSetting,
    isShowSettingLiked,
    setIsShowSettingLiked,
  };
};

export default useMyPage;
