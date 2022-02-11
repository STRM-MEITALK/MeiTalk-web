import React, { useState, useEffect } from 'react';
import { INoticeItem } from './NoticePageType';
import { notice } from './data';

const useNoticePage = () => {
  const [noticeList, setNoticeList] = useState<INoticeItem[]>([]);

  useEffect(() => {
    const readNoticeList = window.localStorage.getItem('readNoticeList');
    const noticeData = notice.list.map((item) => {
      const temp: INoticeItem = item;
      if (readNoticeList?.includes(item.id.toString())) {
        temp.isRead = true;
      } else {
        temp.isRead = false;
      }
      return temp;
    });
    setNoticeList(noticeData);
  }, []);

  const handleReadNotice = (id: number) => {
    const noticeData = noticeList.map((notice) => {
      if (notice.id === id) {
        notice.isRead = true;
      }
      return notice;
    });
    let readNoticeList = window.localStorage.getItem('readNoticeList');
    if (readNoticeList && !readNoticeList?.includes(id.toString())) {
      readNoticeList = readNoticeList.concat(`,${id}`);
    } else if (!readNoticeList) {
      readNoticeList = id.toString();
    }
    window.localStorage.setItem('readNoticeList', readNoticeList);
    setNoticeList(noticeData);
  };

  return {
    noticeList,
    handleReadNotice,
  };
};

export default useNoticePage;
