import { useEffect, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentStudio } from '@slice/commentSlice';
import { IReplyType } from '@type/commentType';

const useReplyItem = ({ item }: { item: IReplyType }) => {
  const dispatch = useDispatch();

  const [menu, setMenu] = useState(false);
  const [isShowTBM, setIsShowTBM] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const onHandleShowMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onDeleteReply = useCallback(() => {
    dispatch(deleteCommentStudio({ id: item.id, type: 'reply' }));
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
    menu,
    menuRef,
    isShowTBM,
    setIsShowTBM,
    onHandleShowMenu,
    onClickMenu,
    onDeleteReply,
  };
};

export default useReplyItem;
