import React, { useRef, useState, useEffect, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import isLogin from '@lib/isLogin';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@stores/index';
import { getCommentList, postComment } from '@slice/commentSlice';
import { handleLoginModal } from '@slice/globalModalSlice';

const useComment = () => {
  const dispatch = useDispatch();
  const { vodId } = useParams();
  let postCommentMR = false;

  const [commentText, setCommentText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [beforeScrollHeight, setBeforeSrollHeight] = useState(0);

  const commentScrollRef = useRef<HTMLDivElement>(null);

  const { commentList, pageNo, totalElements, totalComments, commentListStatus, postCommentStatus } = useSelector(
    ({ comment }: RootState) => ({
      commentList: comment.commentList.data.list,
      pageNo: comment.commentList.data.pageNo,
      totalElements: comment.commentList.data.totalElements,
      totalComments: comment.commentList.data.totalComments,
      postCommentList: comment.postComment.data,
      commentListStatus: comment.commentList.status,
      postCommentStatus: comment.postComment.status,
    }),
  );

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
    if (vodId) {
      if (isLogin()) {
        if (commentText !== '' && !postCommentMR) {
          postCommentMR = true;
          dispatch(postComment({ type: 'comment', contentId: parseInt(vodId), content: commentText }));
        }
      } else {
        if (commentText !== '') {
          dispatch(handleLoginModal(true));
        }
      }
    }
  }, [commentText]);

  const handelInfiniteScroll = () => {
    if (commentScrollRef.current) {
      if (commentScrollRef.current.scrollTop === 0 && !(totalElements === commentList.length)) {
        setBeforeSrollHeight(commentScrollRef.current.scrollHeight);
        fetchCommentList(pageNo + 1);
      }
    }
  };

  const fetchCommentList = useCallback((pageNo) => {
    if (vodId) {
      dispatch(getCommentList({ vodId, pageNo, pageSize: 20 }));
    }
  }, []);

  useEffect(() => {
    if (postCommentStatus === RequestStatus.SUCCESS) {
      postCommentMR = false;
      if (commentScrollRef.current) {
        commentScrollRef.current.scrollTop = commentScrollRef.current.scrollHeight;
      }
      setCommentText('');
    } else if (postCommentStatus === RequestStatus.FAIL) {
      postCommentMR = false;
      setCommentText('');
    }
  }, [postCommentStatus]);

  useEffect(() => {
    if (commentListStatus === RequestStatus.SUCCESS) {
      if (commentScrollRef.current) {
        if (pageNo > 0) {
          commentScrollRef.current.scrollTop = commentScrollRef.current.scrollHeight - beforeScrollHeight;
        } else {
          commentScrollRef.current.scrollTop = commentScrollRef.current.scrollHeight;
        }
      }
    }
  }, [commentListStatus]);

  useEffect(() => {
    fetchCommentList(0);
  }, []);

  return {
    commentScrollRef,
    commentText,
    commentList,
    isFocus,
    totalElements,
    totalComments,
    commentListStatus,
    onEnterComment,
    setIsFocus,
    onChangeComment,
    onEnterkeyPress,
    handelInfiniteScroll,
  };
};

export default useComment;
