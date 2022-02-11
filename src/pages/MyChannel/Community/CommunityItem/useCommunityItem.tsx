import React, { useEffect, useCallback, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import RequestStatus from '@lib/RequestStatus';
import { ICommunityType } from '@type/communityType';
import { RootState } from '@stores/index';
import { deleteCommunity, updateCommunity } from '@slice/communitySlice';
import { handleErrorModal } from '@slice/globalModalSlice';
import { PAGE_URL } from '@src/shared/constant/path';

const useCommunityItem = ({ item }: { item: ICommunityType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [contentTemp, setContentTemp] = useState(item.contents);
  const [showEditor, setShowEditor] = useState(false);
  const [isShowTBM, setIsShowTBM] = useState(false);

  const { isMe, userProfile, deleteStatus, updateStatus, ucData } = useSelector(({ studio, community }: RootState) => ({
    isMe: studio.getChannelInfo.data.isMe,
    userProfile: studio.getChannelInfo.data.userProfile,
    deleteStatus: community.deleteCommunity.status,
    updateStatus: community.updateCommunity.status,
    ucData: community.updateCommunity.data,
  }));

  const onUpdate = useCallback(() => {
    if (channelId) {
      dispatch(updateCommunity({ channelId, communityId: item.id, contents: contentTemp }));
    }
  }, [channelId, item.id, contentTemp]);

  const onDelete = useCallback(() => {
    setIsShowTBM(true);
  }, []);

  const callDelete = useCallback(() => {
    if (channelId) {
      dispatch(deleteCommunity({ channelId, communityId: item.id }));
    }
  }, [channelId, item.id]);

  const onChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContentTemp(value);
  }, []);

  const changeToEditor = useCallback(() => {
    setShowEditor(!showEditor);
  }, [showEditor]);

  const handleShowEditor = useCallback(
    (show: boolean) => {
      setContentTemp(item.contents);
      setShowEditor(show);
    },
    [item.contents],
  );

  const goToDetail = useCallback(() => {
    navigate(`${PAGE_URL.MY_CHANNEL}${PAGE_URL.CHANNEL_COMMUNITY_DETAIL}/${channelId}?contentId=${item.id}`);
  }, [channelId, item.id]);

  useEffect(() => {
    if (deleteStatus === RequestStatus.SUCCESS) {
      setIsShowTBM(false);
    }
  }, [deleteStatus]);

  useEffect(() => {
    if (updateStatus === RequestStatus.SUCCESS && ucData?.id === item.id) {
      setShowEditor(false);
    } else if (updateStatus === RequestStatus.FAIL && ucData?.id === item.id) {
      dispatch(handleErrorModal(true));
    }
  }, [updateStatus, ucData, item.id]);

  return {
    isMe,
    userProfile,
    showEditor,
    contentTemp,
    isShowTBM,
    onChangeContent,
    onUpdate,
    onDelete,
    callDelete,
    changeToEditor,
    handleShowEditor,
    goToDetail,
    setIsShowTBM,
  };
};

export default useCommunityItem;
