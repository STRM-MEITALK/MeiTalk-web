import React, { useState, useCallback, useEffect, KeyboardEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import isLogin from '@lib/isLogin';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@src/stores';
import { deleteCommentReply, getReplyList, postReply, updateComment, updateCommentLike } from '@slice/commentSlice';
import { IReplyType, ICommentType } from '@type/commentType';
import useToast from '@components/Toast/useToast';
import { handleLoginModal } from '@src/stores/slice/globalModalSlice';
import ReplayViewPage from '../../ReplayViewPage';

const useCommentItem = ({ item }: { item: ICommentType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { vodId } = useParams();
  const { callToast } = useToast();
  let posReplyMR = false;

  const [showReply, setShowReply] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replyListById, setReplyListById] = useState<IReplyType[]>([]);
  const [myPostReply, setMyPostReply] = useState<IReplyType[]>([]);
  const [menu, setMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [isShowTBM, setIsShowTBM] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { owner, replyList, postReplyList, postReplyStatus, updateCommentId, updateCommentStatus } = useSelector(
    ({ replayView, comment }: RootState) => ({
      owner: replayView.replayViewInfo.data.owner,
      replyList: comment.replyList.data,
      postReplyList: comment.postReply.data,
      postReplyStatus: comment.postReply.status,
      updateCommentId: comment.updateComment.data?.id,
      updateCommentStatus: comment.updateComment.status,
    }),
  );

  const onChangeReply = useCallback((e) => {
    setReplyText(e.target.value);
  }, []);

  const onHandleShowReply = useCallback(() => {
    setShowReply(!showReply);
  }, [showReply]);

  const onHandleShowInput = useCallback((flag: boolean) => {
    setReplyText('');
    setShowInput(flag);
  }, []);

  const onHandleShowMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onHandleEditContent = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
  }, []);

  const onCancelEdit = useCallback(() => {
    setIsEdit(false);
    setEditContent(item.commentContent);
  }, [item.commentContent]);

  const onUpdateComment = useCallback(() => {
    if (editContent !== '') {
      dispatch(updateComment({ contentId: item.id, type: 'comment', content: editContent }));
    }
  }, [item.id, editContent]);

  const onDeleteComment = useCallback(() => {
    dispatch(deleteCommentReply({ id: item.id, type: 'comment' }));
    setIsShowTBM(false);
  }, [item.id]);

  const onClickMenu = useCallback(
    (type: 'E' | 'D' | 'R') => {
      switch (type) {
        case 'E':
          setIsEdit(true);
          break;
        case 'D':
          setIsShowTBM(true);
          break;
        case 'R':
          break;
        default:
          break;
      }

      setMenu(false);
    },
    [item.id],
  );

  const onEnterkeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnterReply();
      }
    },
    [replyText],
  );

  const onEnterReply = useCallback(() => {
    if (vodId) {
      if (isLogin()) {
        if (replyText !== '' && !posReplyMR) {
          posReplyMR = true;
          dispatch(postReply({ type: 'reply', contentId: item.id, content: replyText }));
        }
      } else {
        if (replyText !== '') {
          dispatch(handleLoginModal(true));
        }
      }
    }
  }, [vodId, replyText]);

  const onToggleLike = useCallback(() => {
    if (vodId) {
      if (isLogin()) {
        dispatch(updateCommentLike({ contentId: item.id }));
      } else {
        dispatch(handleLoginModal(true));
      }
    }
  }, [vodId]);

  useEffect(() => {
    if (updateCommentStatus === RequestStatus.SUCCESS && item.id === updateCommentId) {
      callToast(t('edit_successfully'));
      setIsEdit(false);
    }
  }, [updateCommentStatus, item.id, updateCommentId]);

  useEffect(() => {
    setEditContent(item.commentContent);
  }, [item.commentContent]);

  useEffect(() => {
    if (postReplyList[item.id]) {
      setMyPostReply(postReplyList[item.id]);
    }
  }, [item.id, postReplyList]);

  useEffect(() => {
    if (showReply) {
      dispatch(getReplyList({ commentId: item.id }));
    }
  }, [item.id, showReply]);

  useEffect(() => {
    if (postReplyStatus === RequestStatus.FAIL || postReplyStatus === RequestStatus.SUCCESS) {
      setReplyText('');
      setShowInput(false);
      posReplyMR = false;
    }
  }, [postReplyStatus]);

  useEffect(() => {
    if (replyList[item.id]) {
      setReplyListById(replyList[item.id]);
    }
  }, [replyList, item.id]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return {
    owner,
    showReply,
    showInput,
    replyText,
    replyListById,
    myPostReply,
    menu,
    menuRef,
    isEdit,
    editContent,
    isShowTBM,
    setIsShowTBM,
    onChangeReply,
    onHandleShowReply,
    onHandleShowInput,
    onHandleShowMenu,
    onHandleEditContent,
    onEnterReply,
    onToggleLike,
    onEnterkeyPress,
    onClickMenu,
    onCancelEdit,
    onUpdateComment,
    onDeleteComment,
  };
};

export default useCommentItem;
