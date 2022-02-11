import { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores';
import { deleteCommentStudio, getReplyList } from '@slice/commentSlice';
import { IReplyType, ICommentType } from '@type/commentType';

const useCommentItem = ({ item }: { item: ICommentType }) => {
  const dispatch = useDispatch();

  const [showReply, setShowReply] = useState(false);
  const [replyListById, setReplyListById] = useState<IReplyType[]>([]);
  const [myPostReply, setMyPostReply] = useState<IReplyType[]>([]);
  const [menu, setMenu] = useState(false);
  const [isShowTBM, setIsShowTBM] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { replyList, postReplyList } = useSelector(({ comment }: RootState) => ({
    replyList: comment.replyList.data,
    postReplyList: comment.postReply.data,
  }));

  const onHandleShowReply = useCallback(() => {
    setShowReply(!showReply);
  }, [showReply]);

  const onHandleShowMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onDeleteComment = useCallback(() => {
    dispatch(deleteCommentStudio({ id: item.id, type: 'comment' }));
    setIsShowTBM(false);
  }, [item.id]);

  const onClickMenu = useCallback(
    (type: 'D' | 'R') => {
      switch (type) {
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
    showReply,
    replyListById,
    myPostReply,
    menu,
    menuRef,
    isShowTBM,
    setIsShowTBM,
    onHandleShowReply,
    onHandleShowMenu,
    onClickMenu,
    onDeleteComment,
  };
};

export default useCommentItem;
