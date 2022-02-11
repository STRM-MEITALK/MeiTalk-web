import React from 'react';
import { useTranslation } from 'react-i18next';
import arrowDown from '@images/arrow-down.png';
import arrowUp from '@images/arrow-up.png';
import { IAccordionItemProps } from '../../FAQPageType';
import * as STC from './AccordionItem.style';
import useAccordionItem from './useAccordionItem';

const AccordionItem = ({ faq }: IAccordionItemProps) => {
  const { t } = useTranslation();
  const { parentRef, childRef, isOpen, handleButtonClick } = useAccordionItem();

  return (
    <STC.Container>
      <STC.TitleWrapper onClick={handleButtonClick} isOpen={isOpen}>
        <STC.Title isOpen={isOpen}>{t(`${faq.title}`)}</STC.Title>
        <STC.ArrowImage src={isOpen ? arrowUp : arrowDown} />
      </STC.TitleWrapper>
      <STC.DescriptionWrapper ref={parentRef} isOpen={isOpen}>
        <STC.Description ref={childRef}>{t(`${faq.description}`)}</STC.Description>
      </STC.DescriptionWrapper>
    </STC.Container>
  );
};

export default AccordionItem;
