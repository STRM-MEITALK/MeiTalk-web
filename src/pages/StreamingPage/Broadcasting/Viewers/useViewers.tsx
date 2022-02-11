import { getViewers, postEliminate } from '@api/liveViewApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IUserList, IChattingUnsubscribe } from '@type/chattingType';
import { RootState } from '@src/stores';

const useViewers = (handlePressBan: IChattingUnsubscribe) => {
  const [userList, setUserList] = useState<IUserList[]>([]);
  const [filterUserList, setFilterUserList] = useState<IUserList[]>([]);
  const [filterText, setFilterText] = useState('');
  const [checkUserList, setCheckUserList] = useState<any>(new Set());

  const { chatKey } = useSelector(({ broad }: RootState) => ({
    chatKey: broad.chatKey,
  }));

  useEffect(() => {
    if (chatKey) {
      getViewers({
        chatKey,
      }).then((res) => {
        setUserList(res.data.data.userInfo.filter((el: any) => el.userName));
      });
    }
  }, [chatKey]);

  useEffect(() => {
    setFilterUserList([...userList]);
  }, [userList]);

  const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const handleClickSearch = () => {
    setFilterUserList(userList.filter((el: any) => el.userName.includes(filterText)));
    setCheckUserList((prev: any) => new Set([...prev].filter((el) => el.name.includes(filterText))));
  };

  const addBanList = (name: string, id: string, cuid: string) => {
    setCheckUserList((prev: any) => new Set([...prev, { name, id, cuid }]));
  };

  const removeBanList = (name: string) => {
    setCheckUserList((prev: any) => new Set([...prev].filter((el) => el.name !== name)));
  };

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSearch();
    }
  };

  const handleBan = () => {
    handlePressBan(checkUserList, 'v', '');

    setTimeout(() => {
      getViewers({
        chatKey,
      }).then((res) => {
        setUserList(res.data.data.userInfo.filter((el: any) => el.userName));
      });
    }, 0);
    setFilterText('');
  };

  return {
    filterUserList,
    filterText,
    handleChangeFilterText,
    handleClickSearch,
    addBanList,
    removeBanList,
    handlePress,
    handleBan,
  };
};

export default useViewers;
