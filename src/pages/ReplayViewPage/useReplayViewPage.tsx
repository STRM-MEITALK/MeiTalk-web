import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@src/stores';
import { getStreamList } from '@slice/streamSlice';
import { getReplayViewInfo, updateViewCount } from '@slice/replayViewSlice';
import { initializeComment } from '@slice/commentSlice';
import useToast from '@components/Toast/useToast';
import { sizes } from '@styles/media';
import { handleErrorModal } from '@src/stores/slice/globalModalSlice';

const useReplayViewPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { vodId } = useParams();
  const { callToast } = useToast();
  const [commentHeight, setCommentHeight] = useState<number | undefined>(0);
  const [isShowSM, setIsShowSM] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [showComment, setShowComment] = useState<boolean>(window.innerWidth > sizes.tablet);
  const [isShowTitle, setIsShowTitle] = useState(false);
  const windowHeight = window.innerHeight;

  const commentHeightRef = useRef<HTMLDivElement>(null);

  const { replayViewInfoStatus, replayViewInfo, streamList, pageNo, totalElements, captionLang } = useSelector(
    ({ replayView, stream, player }: RootState) => ({
      replayViewInfoStatus: replayView.replayViewInfo.status,
      replayViewInfo: replayView.replayViewInfo.data,
      streamList: stream.streamListInfo.data.streams,
      pageNo: stream.streamListInfo.data.pageNo,
      totalElements: stream.streamListInfo.data.totalElements,
      captionLang: player.captionLang,
    }),
  );

  const getCommentHeight = useCallback(() => {
    if (commentHeightRef.current) {
      setCommentHeight(windowHeight - commentHeightRef.current?.offsetTop - 7);
    }
  }, []);

  const fetchStreamList = useCallback(
    (pageNo) => {
      if (vodId) {
        dispatch(
          getStreamList({
            type: 'ALL',
            pageNo,
            pageSize: 24,
            vodId: parseFloat(vodId),
          }),
        );
      } else {
        dispatch(
          getStreamList({
            type: 'ALL',
            pageNo,
            pageSize: 24,
          }),
        );
      }
    },
    [vodId],
  );

  const fetchReplayViewInfo = useCallback(() => {
    if (vodId) {
      dispatch(getReplayViewInfo({ vodId }));
    }
  }, []);

  const fetchUpdateViewCount = useCallback(() => {
    if (vodId) {
      dispatch(updateViewCount({ vodId }));
    }
  }, []);

  const onHandleShowComment = useCallback(
    (flag: boolean) => {
      setShowComment(flag);
    },
    [showComment],
  );

  useEffect(() => {
    dispatch(initializeComment());
  }, [showComment]);

  useEffect(() => {
    if (replayViewInfoStatus === RequestStatus.SUCCESS) {
      getCommentHeight();
    } else if (replayViewInfoStatus === RequestStatus.FAIL) {
      dispatch(handleErrorModal(true));
    }
  }, [replayViewInfoStatus]);

  useEffect(() => {
    if (showComment) {
      getCommentHeight();
    }
  }, [showComment]);

  useEffect(() => {
    window.addEventListener('resize', getCommentHeight);
    fetchReplayViewInfo();
    fetchStreamList(0);
    fetchUpdateViewCount();

    return () => window.removeEventListener('resize', getCommentHeight);
  }, []);

  return {
    replayViewInfo,
    replayViewInfoStatus,
    commentHeightRef,
    commentHeight,
    streamList,
    pageNo,
    totalElements,
    isShowSM,
    isShowDetail,
    showComment,
    isShowTitle,
    setCommentHeight,
    fetchStreamList,
    setIsShowSM,
    setIsShowDetail,
    onHandleShowComment,
    setIsShowTitle,
  };
};

export default useReplayViewPage;
