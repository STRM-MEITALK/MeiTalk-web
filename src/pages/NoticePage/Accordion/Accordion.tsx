import React from 'react';
import * as STC from './Accordion.style';
import AccordionItem from './AccordionItem';
import { IAccordionProps } from '../NoticePageType';

const Accordion = ({ noticeList, handleReadNotice }: IAccordionProps) => {
  return (
    <STC.Container>
      {noticeList?.map((notice) => (
        <AccordionItem notice={notice} key={notice.id} handleReadNotice={handleReadNotice} />
      ))}
    </STC.Container>
  );
};

export default Accordion;
