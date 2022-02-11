import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import RequestStatus from '@lib/RequestStatus';
import { RootState } from '@src/stores';
import { updateReply, deleteCommentReply } from '@slice/communitySlice';
import { IReplyType } from '@type/communityType';
import useToast from '@components/Toast/useToast';

const useReplyItem = ({ item }: { item: IReplyType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { callToast } = useToast();

  const [menu, setMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [isShowTBM, setIsShowTBM] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const { owner, updateReplyId, updateReplyStatus } = useSelector(({ studio, community }: RootState) => ({
    owner: studio.getChannelInfo.data.userProfile.userNo,
    updateReplyId: community.updateReply.data?.id,
    updateReplyStatus: community.updateReply.status,
  }));

  const onHandleShowMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onHandleEditReply = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditContent(e.target.value);
  }, []);

  const onCancelEdit = useCallback(() => {
    setIsEdit(false);
    setEditContent(item.replyContent);
  }, [item.replyContent]);

  const onUpdateReply = useCallback(() => {
    if (editContent !== '') {
      dispatch(updateReply({ id: item.id, type: 'communityReply', content: editContent }));
    }
  }, [item.id, editContent]);

  const onDeleteReply = useCallback(() => {
    dispatch(deleteCommentReply({ id: item.id, type: 'communityReply' }));
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

  useEffect(() => {
    if (updateReplyStatus === RequestStatus.SUCCESS && item.id === updateReplyId) {
      callToast(t('edit_successfully'));
      setIsEdit(false);
    }
  }, [updateReplyStatus, item.id, updateReplyId]);

  useEffect(() => {
    setEditContent(item.replyContent);
  }, [item.replyContent]);

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
    menu,
    menuRef,
    isEdit,
    editContent,
    isShowTBM,
    setIsShowTBM,
    onHandleShowMenu,
    onHandleEditReply,
    onClickMenu,
    onCancelEdit,
    onUpdateReply,
    onDeleteReply,
  };
};

export default useReplyItem;
