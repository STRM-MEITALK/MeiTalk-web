import React, { useRef, useState, useEffect, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import isLogin from '@lib/isLogin';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@stores/index';
import { getCommentList, postComment } from '@slice/communitySlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useComment = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParams] = useSearchParams();
  let postCommentMR = false;

  const [commentText, setCommentText] = useState('');
  const [beforeScrollY, setBeforeScrollY] = useState(0);

  const { commentList, pageNo, totalElements, totalComments, commentListStatus, postCommentStatus, scrollY } =
    useSelector(({ community, globalModal }: RootState) => ({
      commentList: community.commentList.data.list,
      pageNo: community.commentList.data.pageNo,
      totalElements: community.commentList.data.totalElements,
      totalComments: community.commentList.data.totalComments,
      postCommentList: community.postComment.data,
      commentListStatus: community.commentList.status,
      postCommentStatus: community.postComment.status,
      scrollY: globalModal.scrollY,
    }));

  const onChangeComment = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  }, []);

  const onEnterkeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnterComment();
      }
    },
    [commentText],
  );

  const onEnterComment = useCallback(() => {
    const contentId = searchParam.get('contentId');
    if (contentId) {
      if (isLogin()) {
        if (commentText !== '' && !postCommentMR) {
          postCommentMR = true;
          setBeforeScrollY(scrollY);
          dispatch(postComment({ type: 'communityComment', contentId: parseInt(contentId), content: commentText }));
        }
      } else {
        if (commentText !== '') {
          dispatch(handleLoginModal(true));
        }
      }
    }
  }, [commentText, scrollY]);

  const fetchCommentList = useCallback(
    (pageNo) => {
      const contentId = searchParam.get('contentId');
      if (contentId) {
        setBeforeScrollY(scrollY);
        dispatch(getCommentList({ communityId: contentId, pageNo, pageSize: 20 }));
      }
    },
    [scrollY, searchParam],
  );

  useEffect(() => {
    if (postCommentStatus === RequestStatus.SUCCESS || postCommentStatus === RequestStatus.FAIL) {
      postCommentMR = false;
      setCommentText('');
      window.scrollTo(0, beforeScrollY);
    }
  }, [postCommentStatus]);

  useEffect(() => {
    if (commentListStatus === RequestStatus.SUCCESS) {
      window.scrollTo(0, beforeScrollY);
    }
  }, [commentListStatus]);

  useEffect(() => {
    fetchCommentList(0);
  }, []);

  return {
    commentText,
    commentList,
    totalElements,
    totalComments,
    commentListStatus,
    pageNo,
    onEnterComment,
    onChangeComment,
    onEnterkeyPress,
    fetchCommentList,
  };
};

export default useComment;
