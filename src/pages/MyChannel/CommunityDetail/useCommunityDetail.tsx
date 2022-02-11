import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { PAGE_URL } from '@path';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@stores/index';
import {
  getCommunityDetail,
  deleteCommunity,
  updateCommunity,
  initializeCommunityDetail,
  initializeCommentList,
} from '@slice/communitySlice';
import { handleErrorModal } from '@slice/globalModalSlice';

const useCommunityDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [searchParam, setSearchParams] = useSearchParams();
  const [showEditor, setShowEditor] = useState(false);
  const [contentTemp, setContentTemp] = useState('');
  const [isShowTBM, setIsShowTBM] = useState(false);

  const { isMe, userProfile, communityDetail, deleteStatus, updateStatus } = useSelector(
    ({ studio, community }: RootState) => ({
      isMe: studio.getChannelInfo.data.isMe,
      userProfile: studio.getChannelInfo.data.userProfile,
      communityDetail: community.communityDetail.data,
      deleteStatus: community.deleteCommunity.status,
      updateStatus: community.updateCommunity.status,
    }),
  );

  const onUpdate = useCallback(() => {
    if (channelId && communityDetail.id !== null) {
      dispatch(updateCommunity({ channelId, communityId: communityDetail.id, contents: contentTemp }));
    }
  }, [channelId, communityDetail.id, contentTemp]);

  const handleShowEditor = useCallback(
    (show: boolean) => {
      setContentTemp(communityDetail.contents);
      setShowEditor(show);
    },
    [communityDetail.contents],
  );

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContentTemp(value);
  }, []);

  const onDelete = useCallback(() => {
    setIsShowTBM(true);
  }, []);

  const callDelete = useCallback(() => {
    if (channelId && communityDetail.id) {
      dispatch(deleteCommunity({ channelId, communityId: communityDetail.id }));
    }
  }, [channelId, communityDetail.id]);

  const changeToEditor = useCallback(() => {
    setShowEditor(!showEditor);
  }, [showEditor]);

  const goBack = useCallback(() => {
    navigate(`${PAGE_URL.MY_CHANNEL}${PAGE_URL.CHANNEL_COMMUNITY}/${channelId}`);
  }, [channelId]);

  useEffect(() => {
    if (deleteStatus === RequestStatus.SUCCESS) {
      window.location.href = `${PAGE_URL.MY_CHANNEL}${PAGE_URL.CHANNEL_COMMUNITY}/${channelId}`;
    } else if (deleteStatus === RequestStatus.FAIL) {
      setIsShowTBM(false);
      dispatch(handleErrorModal(true));
    }
  }, [deleteStatus]);

  useEffect(() => {
    if (updateStatus === RequestStatus.SUCCESS) {
      setShowEditor(false);
    } else if (updateStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [updateStatus]);

  useEffect(() => {
    setContentTemp(communityDetail.contents);
  }, [communityDetail.contents]);

  useEffect(() => {
    const contentId = searchParam.get('contentId');
    if (contentId !== null) {
      dispatch(getCommunityDetail({ contentId: parseInt(contentId) }));
    }
  }, [searchParam]);

  useEffect(() => {
    return () => {
      dispatch(initializeCommunityDetail());
      dispatch(initializeCommentList());
    };
  }, []);

  return {
    isMe,
    channelId,
    userProfile,
    communityDetail,
    showEditor,
    contentTemp,
    isShowTBM,
    goBack,
    handleShowEditor,
    changeToEditor,
    onChangeContent,
    onUpdate,
    onDelete,
    callDelete,
    setIsShowTBM,
  };
};

export default useCommunityDetail;
