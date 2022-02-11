import React from 'react';
import { useTranslation } from 'react-i18next';
import arrowDown from '@images/arrow-down.png';
import arrowUp from '@images/arrow-up.png';
import newIcon from '@images/new.png';
import { IAccordionItemProps } from '../../NoticePageType';
import * as STC from './AccordionItem.style';
import useAccordionItem from './useAccordionItem';

const AccordionItem = ({ notice, handleReadNotice }: IAccordionItemProps) => {
  const { t } = useTranslation();
  const { parentRef, childRef, isOpen, handleButtonClick } = useAccordionItem();

  return (
    <STC.Container>
      <STC.TitleWrapper
        onClick={(e) => {
          handleButtonClick(e);
          handleReadNotice(notice.id);
        }}
        isOpen={isOpen}
      >
        <STC.ContentContainer>
          <STC.Title isOpen={isOpen}>1.</STC.Title>
          <STC.ContentWrapper>
            <STC.TitleSction>
              <STC.IconWrapper>
                <STC.Title isOpen={isOpen}>{t(`${notice.title}`)}</STC.Title>
                {!notice.isRead && <STC.NewImage src={newIcon} />}
              </STC.IconWrapper>
              <STC.ArrowImage src={isOpen ? arrowUp : arrowDown} />
            </STC.TitleSction>
            <STC.DateText isOpen={isOpen}>2022-02-10</STC.DateText>
          </STC.ContentWrapper>
        </STC.ContentContainer>
      </STC.TitleWrapper>
      <STC.DescriptionWrapper ref={parentRef} isOpen={isOpen}>
        <STC.Description ref={childRef}>
          <div>{t(`${notice.description1}`)}</div>
          <br />
          <STC.Notice1ContentDiv>
            <STC.NoticeContentDivFirst>{t(`${notice.description2}`)}</STC.NoticeContentDivFirst>
            {t(`${notice.description2_1}`)}
          </STC.Notice1ContentDiv>
          <br />
          <STC.Notice1ContentDiv>
            <STC.NoticeContentDivFirst>{t(`${notice.description3}`)}</STC.NoticeContentDivFirst>
            {t(`${notice.description3_1}`)}
          </STC.Notice1ContentDiv>
          <br />
          <STC.Notice1ContentDiv>
            <STC.NoticeContentDivFirst>{t(`${notice.description4}`)}</STC.NoticeContentDivFirst>
            {t(`${notice.description4_1}`)}
          </STC.Notice1ContentDiv>
          <br />
          <div>{t(`${notice.description5}`)}</div>
        </STC.Description>
      </STC.DescriptionWrapper>
    </STC.Container>
  );
};

export default AccordionItem;
