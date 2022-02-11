import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { RootState } from '@src/stores';
import useToast from '@components/Toast/useToast';
import { updateVodInfo, deleteVod, setInitializeUpdate, getStudioEditInfo } from '@slice/studioSlice';
import { handleAccessDenyModal } from '@slice/globalModalSlice';
import { IOptionType } from '@components/DropdownPicker/DropdownPickerType';
import useCategory from '@hooks/useCategory';
import useInnerWidth from '@hooks/useInnerWidth';
import { sizes } from '@styles/media';

const useMyStudioEdit = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { vodId } = useParams();
  const { callToast } = useToast();
  const navigate = useNavigate();
  const { updateResponse, deleteVodResponse, getVideoInfo, myVideoRes } = useSelector(({ studio }: RootState) => ({
    updateResponse: studio.updateResponse.response.output,
    deleteVodResponse: studio.deleteVodResponse.response.output,
    getVideoInfo: studio.getVideoInfo.data,
    myVideoRes: studio.getVideoInfo.response.output,
  }));

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [chatShow, setChatShow] = useState(true);
  const [commentHeight, setCommentHeight] = useState<number | undefined>(0);
  const commentHeightRef = useRef<HTMLDivElement>(null);
  const [radioTrue, setRadioTrue] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [isShowTBM, setIsShowTBM] = useState(false);
  const { category, categoryOptions, setCategory } = useCategory();
  const { innerWidth } = useInnerWidth();

  const getCommentHeight = useCallback(() => {
    if (commentHeightRef.current) {
      setCommentHeight(window.innerHeight - commentHeightRef.current?.offsetTop - 7);
    }
  }, []);

  const fetchReplayViewInfo = useCallback(() => {
    if (vodId) {
      dispatch(getStudioEditInfo({ vodId }));
    }
  }, []);

  const handleTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length <= 100) {
        setTitle(e.target.value);
      }
    },
    [title],
  );

  const handleDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [description],
  );

  const handleChat = useCallback(() => {
    setChatShow(!chatShow);
  }, [chatShow]);

  const handleRadio = useCallback(() => {
    setRadioTrue(!radioTrue);
  }, [radioTrue]);

  const handleBroadCategory = (data: IOptionType) => {
    setCategory(data);
  };

  const handleBroadData = (data: any) => {
    if (categoryOptions) {
      setCategory(categoryOptions[data - 1]);
    }
  };

  const onClickDeleteBtn = () => {
    if (vodId) {
      dispatch(deleteVod({ vodId }));
    }
  };

  const onClickEditBtn = () => {
    if (vodId) {
      dispatch(
        updateVodInfo({
          vodId,
          vodTitle: title,
          vodDetail: description,
          vodCategory: category.value,
          public: radioTrue,
        }),
      );
    }
  };

  const handleClickBack = useCallback(() => {
    window.location.href = PAGE_URL.MY_STUDIO;
  }, []);

  useEffect(() => {
    if (innerWidth < sizes.tablet) {
      setChatShow(false);
    }
  }, [innerWidth]);

  useEffect(() => {
    if (getVideoInfo) {
      setTitle(getVideoInfo.title);
      setDescription(getVideoInfo.detail);
      setRadioTrue(getVideoInfo.isPublic);
      handleBroadData(getVideoInfo.category);
    } else {
      navigate('/', { replace: true });
      dispatch(handleAccessDenyModal(true));
    }
  }, [getVideoInfo]);

  useEffect(() => {
    if (title.length === 0) {
      setBtnDisable(true);
    } else if (title.length > 0) {
      setBtnDisable(false);
    }
  }, [title]);

  useEffect(() => {
    fetchReplayViewInfo();
    window.addEventListener('resize', getCommentHeight);
  }, []);

  useEffect(() => {
    if (chatShow) {
      getCommentHeight();
    }
  }, [chatShow]);

  useEffect(() => {
    if (updateResponse === 0) {
      callToast(t('edit_successfully'));
      dispatch(setInitializeUpdate());
    } else if (updateResponse === -44) {
      navigate('/', { replace: true });
      dispatch(handleAccessDenyModal(true));
    }
  }, [updateResponse]);

  useEffect(() => {
    if (deleteVodResponse === 0) {
      window.location.href = PAGE_URL.MY_STUDIO;
    } else if (deleteVodResponse === -44) {
      navigate('/', { replace: true });
      dispatch(handleAccessDenyModal(true));
    }
  }, [deleteVodResponse]);

  useEffect(() => {
    if (myVideoRes === -44) {
      navigate('/', { replace: true });
      dispatch(handleAccessDenyModal(true));
    }
  }, [myVideoRes]);

  return {
    handleClickBack,
    title,
    handleTitle,
    description,
    handleDescription,
    chatShow,
    handleChat,
    commentHeightRef,
    commentHeight,
    radioTrue,
    handleRadio,
    btnDisable,
    isShowTBM,
    setIsShowTBM,
    onClickEditBtn,
    onClickDeleteBtn,
    category,
    categoryOptions,
    handleBroadCategory,
    getVideoInfo,
  };
};

export default useMyStudioEdit;
