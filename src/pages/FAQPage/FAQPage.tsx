import React from 'react';
import { useTranslation } from 'react-i18next';
import * as STC from './FAQPage.style';
import Accordion from './Accordion';
import useFAQPage from './useFAQPage';

const FAQPage = () => {
  const { meitalk, accountIdPass, accountSignup, accountHelp, verification, myPage, myStudio, liveView } = useFAQPage();
  const { t } = useTranslation();
  return (
    <STC.Container>
      <STC.Wrapper>
        <STC.Title>{t(`faq`)}</STC.Title>
        <STC.FAQWrapper>
          <STC.CategoryTitle>MeiTalk</STC.CategoryTitle>
          <Accordion faqList={meitalk} />
        </STC.FAQWrapper>
        <STC.FAQWrapper>
          <STC.CategoryTitle>{t(`faq_account`)}</STC.CategoryTitle>
          <STC.CategorySubTitle>{t(`faq_username_password`)}</STC.CategorySubTitle>
          <Accordion faqList={accountIdPass} />
          <STC.CategorySubTitle>{t(`faq_registration_delete_my_account`)}</STC.CategorySubTitle>
          <Accordion faqList={accountSignup} />
          <STC.CategorySubTitle>{t(`faq_personal_information`)}</STC.CategorySubTitle>
          <Accordion faqList={accountHelp} />
        </STC.FAQWrapper>
        <STC.FAQWrapper>
          <STC.CategoryTitle>{t(`faq_verification`)}</STC.CategoryTitle>
          <Accordion faqList={verification} />
        </STC.FAQWrapper>
        <STC.FAQWrapper>
          <STC.CategoryTitle>{t(`faq_my_page`)}</STC.CategoryTitle>
          <Accordion faqList={myPage} />
        </STC.FAQWrapper>
        <STC.FAQWrapper>
          <STC.CategoryTitle>{t(`faq_my_studio`)}</STC.CategoryTitle>
          <Accordion faqList={myStudio} />
        </STC.FAQWrapper>
        <STC.FAQWrapper>
          <STC.CategoryTitle>{t(`faq_joining_a_live_streaming_video`)}</STC.CategoryTitle>
          <Accordion faqList={liveView} />
        </STC.FAQWrapper>
        <STC.BottomTextDiv>{t(`faq_bottom_text`)}</STC.BottomTextDiv>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default FAQPage;
