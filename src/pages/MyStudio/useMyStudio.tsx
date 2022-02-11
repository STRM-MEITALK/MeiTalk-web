import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import { PAGE_URL } from '@path';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import { getMyVideo, setInitializeMyVideo } from '@slice/studioSlice';

const useMyStudio = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [category, setCategory] = useState<IOptionType>();
  const [categoryValue, setCategoryValue] = useState<IOptionType[]>();

  const [publicCategory, setPublicCategory] = useState<IOptionType>();
  const [publicCategoryValue, setPublicCategoryValue] = useState<IOptionType[]>();

  const [searchValue, setSearchValue] = useState('');
  const [isShowSetting, setIsShowSetting] = useState(false);

  const { myVideo, myVideoTotalElements, myVideoPageNo } = useSelector(({ studio }: RootState) => ({
    myVideo: studio.myVideoList.data.streams,
    myVideoTotalElements: studio.myVideoList.data.totalElements,
    myVideoPageNo: studio.myVideoList.data.pageNo,
  }));

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
  const handleClickBack = useCallback(() => {
    window.location.href = PAGE_URL.MY_PAGE;
  }, []);

  const fetchMyVideoList = useCallback(
    (pageNo, isPublic, type, search) => {
      if (pageNo === 0 || myVideo.length < myVideoTotalElements) {
        dispatch(
          getMyVideo({
            isPublic,
            orderType: type,
            search,
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [myVideo, myVideoTotalElements, myVideoPageNo],
  );

  const handelInfiniteScroll = () => {
    if (document.body.style.position !== 'fixed') {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
        fetchMyVideoList(myVideoPageNo + 1, publicCategory?.value, category?.value, searchValue);
      }
    }
  };

  const handlePublicSelect = useCallback(
    (value) => {
      setPublicCategory(value);
      dispatch(setInitializeMyVideo());
      fetchMyVideoList(0, value.value, category?.value, searchValue);
    },
    [searchValue, category],
  );

  const handleSelect = useCallback(
    (value) => {
      setCategory(value);
      dispatch(setInitializeMyVideo());
      fetchMyVideoList(0, publicCategory?.value, value.value, searchValue);
    },
    [searchValue, publicCategory],
  );

  const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.length > 0) {
      dispatch(setInitializeMyVideo());
      fetchMyVideoList(0, publicCategory?.value, category?.value, searchValue);
    }
  };

  const handleSearchBtn = () => {
    if (searchValue.length > 0) {
      dispatch(setInitializeMyVideo());
      fetchMyVideoList(0, publicCategory?.value, category?.value, searchValue);
    }
  };

  useEffect(() => {
    const tempCategoryOptions: IOptionType[] = categoryOptions.map((data, idx) => {
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
    setCategoryValue(tempCategoryOptions);
    setCategory(tempCategoryOptions[0]);
  }, []);

  useEffect(() => {
    const tempPublicCategoryOptions: IOptionType[] = publicOptions.map((data, idx) => {
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
    setPublicCategoryValue(tempPublicCategoryOptions);
    setPublicCategory(tempPublicCategoryOptions[0]);
  }, []);

  useEffect(() => {
    fetchMyVideoList(0, '', 'N', '');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);

    return () => {
      window.removeEventListener('scroll', handelInfiniteScroll);
    };
  }, [myVideoPageNo, myVideoTotalElements]);

  return {
    handleClickBack,
    myVideoTotalElements,
    handleSelect,
    category,
    categoryValue,
    handleChangeFilterText,
    publicCategory,
    publicCategoryValue,
    handlePublicSelect,
    myVideo,
    searchValue,
    handlePress,
    handleSearchBtn,
    isShowSetting,
    setIsShowSetting,
  };
};

export default useMyStudio;
