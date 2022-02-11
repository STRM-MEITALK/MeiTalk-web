import { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@stores/index';
import { getCommentList } from '@slice/commentSlice';

const useComment = () => {
  const dispatch = useDispatch();
  const { vodId } = useParams();

  const [beforeScrollHeight, setBeforeSrollHeight] = useState(0);
  const commentScrollRef = useRef<HTMLDivElement>(null);

  const { commentList, pageNo, totalElements, totalComments, commentListStatus } = useSelector(
    ({ comment }: RootState) => ({
      commentList: comment.commentList.data.list,
      pageNo: comment.commentList.data.pageNo,
      totalElements: comment.commentList.data.totalElements,
      totalComments: comment.commentList.data.totalComments,
      postCommentList: comment.postComment.data,
      commentListStatus: comment.commentList.status,
    }),
  );

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
    commentList,
    totalComments,
    handelInfiniteScroll,
  };
};

export default useComment;
