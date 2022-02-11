import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import useToast from '@components/Toast/useToast';
import { editChannelInfo, setInitializeEditResponse, setGetChannelInfo } from '@slice/studioSlice';

const useAbout = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { callToast } = useToast();

  const { channelInfo, editResult } = useSelector(({ studio }: RootState) => ({
    channelInfo: studio.getChannelInfo.data,
    editResult: studio.editChannelInfo.response.output,
  }));

  const [description, setDescription] = useState<string>('');
  const [inputShow, setInputShow] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(true);

  const handleEditBtn = useCallback(() => {
    setInputShow(true);
  }, [inputShow]);

  const handleDescription = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [description],
  );

  const handleCancel = useCallback(() => {
    setDescription(channelInfo.description);
    setInputShow(false);
  }, [inputShow]);

  const handleSave = useCallback(() => {
    if (!btnDisable) {
      dispatch(setGetChannelInfo(description));
      dispatch(editChannelInfo({ channelId: channelInfo.channelId, description }));
    }
  }, [description]);

  useEffect(() => {
    if (editResult === 0) {
      callToast(t('common_saved'));
      setInputShow(false);
    }

    dispatch(setInitializeEditResponse());
  }, [editResult]);

  useEffect(() => {
    setDescription(channelInfo.description);
  }, [channelInfo.description]);

  useEffect(() => {
    if (description) {
      if (description.length <= 0) {
        setBtnDisable(true);
      } else {
        setBtnDisable(false);
      }
    }
  }, [description]);

  return {
    channelInfo,
    description,
    inputShow,
    btnDisable,
    handleDescription,
    handleEditBtn,
    handleCancel,
    handleSave,
  };
};

export default useAbout;
