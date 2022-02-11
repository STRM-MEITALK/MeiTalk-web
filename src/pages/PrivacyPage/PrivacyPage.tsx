/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import * as STC from './PrivacyPage.style';

const PrivacyPage = () => {
  const { t } = useTranslation();
  return (
    <STC.Container>
      <STC.PolicyTitle>{t('regist_terms4')}</STC.PolicyTitle>

      <STC.TextContainer>
        <STC.Title>{t('policy_overview')}</STC.Title>
        <STC.Text>
          <Trans i18nKey="policy_overview_1">
            MeiTalk, Inc. (hereinafter, "<strong>MeiTalk</strong>" "<strong>we</strong>" "<strong>us</strong>" and
            <strong>our</strong>) Privacy Policy is designed to help you understand how we collect, use, and share your
            personal information and to assist you in exercising your privacy rights.
          </Trans>
        </STC.Text>
        <STC.Text>
          <Trans i18nKey="policy_overview_2">
            This Privacy Policy (hereinafter, this "<strong>Policy</strong>") shall take effect when MeiTalk, Inc.
            starts to provide MeiTalk Prototype Services (hereinafter, the "<strong>Platform</strong>").
          </Trans>
        </STC.Text>
        <STC.Text>
          <Trans i18nKey="policy_overview_3">
            'We are committed to protecting the privacy rights of our subscribers, members, and users (collectively or
            individually "<strong>you</strong>" or "<strong>users</strong>") who use the MeiTalk platform.'
          </Trans>
        </STC.Text>
        <STC.Text>{t('policy_overview_4')}</STC.Text>
        <STC.Title>{t('policy_scope')}</STC.Title>
        <STC.SubTitle>{t('policy_scope_personal')}</STC.SubTitle>
        <STC.Text>{t('policy_scope_personal_1')}</STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_2')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_2')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_3')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_3')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_4')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_4')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_5')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_5')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_6')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_6')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_7')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_7')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_8')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_8')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_9')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_9')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_10')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_10')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_11')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_11')}
        </STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('policy_scope_personal_title_12')}</strong>
          </STC.Underline>
          {t('policy_scope_personal_content_12')}
        </STC.Text>
        <STC.Title>{t('policy_information')}</STC.Title>
        <STC.Text>{t('policy_information_content')}</STC.Text>
        <STC.SubTitle>{t('policy_information_howto')}</STC.SubTitle>
        <STC.Text>{t('policy_information_howto_content')}</STC.Text>
        <STC.Text>{t('policy_information_howto_content_title')}</STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_1')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_2')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_3')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_4')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(e)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_5')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(f)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_6')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(g)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_7')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(h)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_8')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(i)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_9')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(j)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_10')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(k)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_11')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(l)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_12')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(m)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_13')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(n)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_14')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(o)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('policy_information_howto_content_1_15')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_information_howto_content_2_title')}</strong>
          </STC.Underline>
          {t('policy_information_howto_content_2_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_information_howto_content_3_title')}</strong>
          </STC.Underline>
          {t('policy_information_howto_content_3_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_information_howto_content_4_title')}</strong>
          </STC.Underline>
          {t('policy_information_howto_content_4_content')}
        </STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <strong> {t('policy_information_howto_content_5_1_title')}</strong>
            {t('policy_information_howto_content_5_1_contnet')}
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <strong> {t('policy_information_howto_content_5_2_title')}</strong>
            {t('policy_information_howto_content_5_2_contnet')}
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <strong> {t('policy_information_howto_content_5_3_title')}</strong>
            {t('policy_information_howto_content_5_3_contnet')}
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <strong> {t('policy_information_howto_content_5_4_title')}</strong>
            {t('policy_information_howto_content_5_4_contnet')}
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.Title>{t('policy_disclosing')}</STC.Title>
        <STC.Text>{t('policy_disclosing_content_1')}</STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_1_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_1_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_2_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_2_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_3_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_3_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_4_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_4_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_5_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_5_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_6_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_6_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_7_title')}</strong>
          </STC.Underline>
          {t('policy_disclosing_content_2_7_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_disclosing_content_2_8_title')}</strong>
          </STC.Underline>
          <br />
          {t('policy_disclosing_content_2_8_content')}
        </STC.Text>
        <STC.Title>{t('policy_choice_title')}</STC.Title>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_choice_1_title')}</strong>
          </STC.Underline>
          <br />
          {t('policy_choice_1_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_choice_2_title')}</strong>
          </STC.Underline>
          <br />
          {t('policy_choice_2_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_choice_3_title')}</strong>
          </STC.Underline>
          <br />
          {t('policy_choice_3_content')}
        </STC.Text>
        <STC.Text>
          .
          <STC.Underline>
            <strong>{t('policy_choice_4_title')}</strong>
          </STC.Underline>
          <br />
          {t('policy_choice_4_content')}
          <br />
          <STC.A href="www.networkadvertising.org/managing/opt_out.asp" target="_blank">
            www.networkadvertising.org/managing/opt_out.asp
          </STC.A>
          <br />
          <STC.A href="http://www.youronlinechoices.eu/" target="_blank">
            http://www.youronlinechoices.eu/
          </STC.A>
          <br />
          <STC.A href="https://youradchoices.ca/choices/" target="_blank">
            https://youradchoices.ca/choices/
          </STC.A>
          <br />
          <STC.A href="www.aboutads.info/choices/" target="_blank">
            www.aboutads.info/choices/
          </STC.A>
          <br />
          {t('policy_choice_4_content_1')}
        </STC.Text>
        <STC.Title>{t('policy_rights')}</STC.Title>
        <STC.Text>{t('policy_rights_content')}</STC.Text>
        <STC.Title>{t('policy_data')}</STC.Title>
        <STC.Text>{t('policy_data_content')}</STC.Text>

        <STC.Title>{t('policy_security')}</STC.Title>
        <STC.Text>{t('policy_security_content')}</STC.Text>

        <STC.Title>{t('policy_thrid_party')}</STC.Title>
        <STC.Text>{t('policy_thrid_party_content')}</STC.Text>

        <STC.Title>{t('policy_children')}</STC.Title>
        <STC.Text>{t('policy_children_content')}</STC.Text>

        <STC.Title>{t('policy_supervisory')}</STC.Title>
        <STC.Text>{t('policy_supervisory_content_1')}</STC.Text>
        <STC.Text>{t('policy_supervisory_content_2')}</STC.Text>

        <STC.Title>{t('policy_change')}</STC.Title>
        <STC.Text>{t('policy_change_content')}</STC.Text>

        <STC.Title>{t('policy_contact')}</STC.Title>
        <STC.Text>
          {t('policy_contact_content')} {t('policy_contact_content_1')}
        </STC.Text>
      </STC.TextContainer>
    </STC.Container>
  );
};

export default PrivacyPage;
