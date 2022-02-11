import React from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import footerFacebook from '@images/footerFacebook.png';
import footerYoutube from '@images/footerYoutube.png';
import footerInsta from '@images/footerInsta.png';
import footerTwit from '@images/footerTwit.png';
import footerTele from '@images/footerTele.png';
import footerLinked from '@images/footerLinked.png';
import overFooterFacebook from '@images/footerFacebook-over.png';
import overFooterYoutube from '@images/footerYoutube-over.png';
import overFooterInsta from '@images/footerInsta-over.png';
import overFooterTwit from '@images/footerTwit-over.png';
import overFooterTele from '@images/footerTele-over.png';
import overFooterLinked from '@images/footerLinked-over.png';
import more from '@images/more-large.png';
import * as STC from './Footer.style';
import ContactIcon from './ContactIcon';
import { ContactIconProps } from './ContactIcon/type';

const Footer = () => {
  const { t } = useTranslation();


  return (
    <STC.Wrapper>
      <STC.Line />
      <STC.MarginWrapper>
        <STC.ColumnWrapper>
          <STC.ContactWrapper>
            <STC.ContactTextWrapper>
              <STC.ContactText>{t('contact')}</STC.ContactText>
              <STC.WithUsText>&nbsp;{t('with_us')}</STC.WithUsText>
            </STC.ContactTextWrapper>
            <STC.ContactIconWrapper>
              {icons.map((icon: ContactIconProps) => {
                return (
                  <ContactIcon key={icon.link} link={icon.link} source={icon.source} overSource={icon.overSource} />
                );
              })}
            </STC.ContactIconWrapper>
          </STC.ContactWrapper>
          <STC.InfoWrapper>
            <STC.PolicyWrapper>
              <STC.PolicyText
                isFirst
                onClick={() => {
                  window.location.href = PAGE_URL.PRIVACY;
                }}
              >
                {t('privacy_policy')}
              </STC.PolicyText>
              <STC.PolicyText
                onClick={() => {
                  window.location.href = PAGE_URL.TERMS;
                }}
              >
                {t('terms_conditions')}
              </STC.PolicyText>
            </STC.PolicyWrapper>
            <STC.NoticeWrapper
              onClick={() => {
                window.location.href = PAGE_URL.NOTICE;
              }}
            >
              <STC.NoticeText
                PFontSize="fs20"
                PMobileFontSize="fs14"
                PfontFamily="fmRegular"
                PmarginRight="60px"
                PMobileMarginRight="30px"
                isCusor={true}
              >
                {t('notice')}
              </STC.NoticeText>
              <STC.NoticeText
                PFontSize="fs20"
                PMobileFontSize="fs12"
                PfontFamily="fmRegular"
                PmarginRight="58px"
                PMobileMarginRight="30px"
                isTitle={true}
              >
                {t('notice_title_1')}
              </STC.NoticeText>
              <STC.NoticeText
                PFontSize="fs12"
                PMobileFontSize="fs10"
                PfontFamily="fmLight"
                PmarginRight="20px"
                PMobileMarginRight="30px"
              >
                2022-02-10
              </STC.NoticeText>
              <STC.NoticeIconWrapper>
                <STC.NoticeIcon src={more} />
              </STC.NoticeIconWrapper>
            </STC.NoticeWrapper>
          </STC.InfoWrapper>
        </STC.ColumnWrapper>
        <STC.CopyRightText>Copyright © 2022 By MeiTalk. All Rights Reserved</STC.CopyRightText>
      </STC.MarginWrapper>
    </STC.Wrapper>
  );
};

export default Footer;
