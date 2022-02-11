import React from 'react';
import { useTranslation } from 'react-i18next';
import * as STC from './NoticePage.style';
import Accordion from './Accordion';
import useNoticePage from './useNoticePage';

const NoticePage = () => {
  const { t } = useTranslation();
  const { noticeList, handleReadNotice } = useNoticePage();
  return (
    <STC.Container>
      <STC.Wrapper>
        <STC.Title>{t('notice_upper')}</STC.Title>
        <STC.FAQWrapper>
          <Accordion noticeList={noticeList} handleReadNotice={handleReadNotice} />
        </STC.FAQWrapper>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default NoticePage;
