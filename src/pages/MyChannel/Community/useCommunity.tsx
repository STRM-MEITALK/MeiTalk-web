import React, { useEffect, useCallback, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@stores/index';
import { getCommunityList, postCommunity, initializeCommunityList } from '@slice/communitySlice';
import { handleErrorModal } from '@slice/globalModalSlice';

const useCommunity = () => {
  const dispatch = useDispatch();
  const { channelId } = useParams();
  const [showEditor, setShowEditor] = useState(false);
  const [contents, setContents] = useState('');

  const { isMe, userProfile, communityList, communityListStatus, pageNo, totalElements, pcStatus } = useSelector(
    ({ community, studio }: RootState) => ({
      isMe: studio.getChannelInfo.data.isMe,
      userProfile: studio.getChannelInfo.data.userProfile,
      communityList: community.communityList.data.communityList,
      communityListStatus: community.communityList.status,
      pageNo: community.communityList.data.pageNo,
      totalElements: community.communityList.data.totalElements,
      pcStatus: community.postCommunity.status,
    }),
  );

  const fetchCommunityList = useCallback(
    (pageNo: number) => {
      if (channelId) {
        dispatch(getCommunityList({ channelId, pageNo, pageSize: 10 }));
      }
    },
    [channelId],
  );

  const handleShowEditor = useCallback((show: boolean) => {
    if (!show) {
      setContents('');
    }

    setShowEditor(show);
  }, []);

  const onChangeEditor = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  }, []);

  const onPost = useCallback(() => {
    if (channelId && contents !== '') {
      dispatch(postCommunity({ channelId, contents }));
    }
  }, [channelId, contents]);

  useEffect(() => {
    if (pcStatus === RequestStatus.SUCCESS) {
      handleShowEditor(false);
    } else if (pcStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [pcStatus]);

  useEffect(() => {
    fetchCommunityList(0);

    return () => {
      dispatch(initializeCommunityList());
    };
  }, []);

  return {
    showEditor,
    contents,
    communityList,
    communityListStatus,
    pageNo,
    totalElements,
    isMe,
    userProfile,
    handleShowEditor,
    onChangeEditor,
    onPost,
    fetchCommunityList,
  };
};

export default useCommunity;
