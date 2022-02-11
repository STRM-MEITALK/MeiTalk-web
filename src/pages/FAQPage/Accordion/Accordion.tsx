import React from 'react';
import * as STC from './Accordion.style';
import AccordionItem from './AccordionItem';
import { IAccordionProps } from '../FAQPageType';

const Accordion = ({ faqList }: IAccordionProps) => {
  return (
    <STC.Container>
      {faqList?.list?.map((faq) => (
        <AccordionItem faq={faq} key={faq.id} />
      ))}
    </STC.Container>
  );
};

export default Accordion;
