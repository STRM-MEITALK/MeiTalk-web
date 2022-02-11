export interface INoticeItem {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description2_1: string;
  description3: string;
  description3_1: string;
  description4: string;
  description4_1: string;
  description5: string;

  date: string;
  isRead?: boolean;
}

export interface INoticeList {
  list: INoticeItem[];
}

export interface IAccordionProps {
  noticeList: INoticeItem[];
  handleReadNotice: (_: number) => void;
}

export interface IAccordionItemProps {
  notice: INoticeItem;
  handleReadNotice: (_: number) => void;
}
