/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import * as STC from './TermsPage.style';

const TermsPage = () => {
  const { t } = useTranslation();
  return (
    <STC.Container>
      <STC.TermsTitle>{t('regist_terms2')}</STC.TermsTitle>

      <STC.TextContainer>
        <STC.Title>{t('terms_title_1')}</STC.Title>
        <STC.Text>
          <Trans i18nKey="terms_content_introduction_1">
            Welcome to the MeiTalk prototype service operated by MeiTalk, Inc. (hereinafter, "<strong>MeiTalk</strong>"
            or "<strong>We</strong>" or "<strong>Us</strong>"). These Terms and Conditions help define the relationship
            between MeiTalk and you as you interact with our Services. Other services offered by MeiTalk may be subject
            to separate terms.
          </Trans>
        </STC.Text>
        <STC.Text>{t('terms_content_introduction_2')}</STC.Text>
        <STC.Text>{t('terms_content_introduction_3')}</STC.Text>

        <STC.Title>{t('terms_title_2')}</STC.Title>
        <STC.Text>{t('terms_content_accept_1')}</STC.Text>
        <STC.Text>{t('terms_content_accept_2')}</STC.Text>

        <STC.Title>{t('terms_title_3')}</STC.Title>
        <STC.Text>{t('terms_content_changes_1')}</STC.Text>

        <STC.Title>{t('terms_title_4')}</STC.Title>
        <STC.Text>{t('terms_content_your_1')}</STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_your_1')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_membership_1')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_your_2')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_Third_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_Third_2')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_your_3')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_minor_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_minor_2')}</STC.Text>
            <STC.Text>{t('terms_inner_content_minor_3')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Title>{t('terms_title_5')}</STC.Title>
        <STC.Text>{t('terms_content_access_1')}</STC.Text>
        <STC.Text>{t('terms_content_access_2')}</STC.Text>

        <STC.Title>{t('terms_title_6')}</STC.Title>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_content_1')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_posting')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_content_2')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_permission_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_permission_2')}</STC.Text>
            <STC.Text>{t('terms_inner_content_permission_3')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_content_3')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_removal_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_removal_2')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_content_4')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_content_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_content_2')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(e)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_content_5')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_copyright_1')}</STC.Text>
            <STC.Text>{t('terms_inner_content_copyright_2')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Title>{t('terms_title_7')}</STC.Title>
        <STC.Text>{t('terms_content_prohibited_1')}</STC.Text>
        <STC.Text>{t('terms_content_prohibited_2')}</STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_1')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_2')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_3')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_4')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(e)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_5')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(f)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_6')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(g)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_7')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(h)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_8')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(i)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_9')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(j)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_10')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(k)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_11')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(l)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_12')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(m)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_13')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(n)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_14')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(o)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_15')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(p)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_16')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(q)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_17')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(r)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_prohibited_18')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Text>{t('terms_content_prohibited_3')}</STC.Text>
        <STC.Text>{t('terms_content_prohibited_4')}</STC.Text>

        <STC.Title>{t('terms_title_8')}</STC.Title>
        <STC.Text>{t('terms_content_account_1')}</STC.Text>
        <STC.Text>
          <STC.Underline>
            <strong>{t('terms_content_account_2')}</strong>
          </STC.Underline>
          {t('terms_content_account_3')}
        </STC.Text>

        <STC.Title>{t('terms_title_9')}</STC.Title>
        <STC.Text>{t('terms_content_suspension_1')}</STC.Text>
        <STC.Text>{t('terms_content_suspension_2')}</STC.Text>

        <STC.Title>{t('terms_title_10')}</STC.Title>
        <STC.Text>{t('terms_content_indemnity')}</STC.Text>

        <STC.Title>{t('terms_title_11')}</STC.Title>
        <STC.Text>{t('terms_content_limitation_1')}</STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_1')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_2')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_3')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_4')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(e)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_5')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(f)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_6')}</STC.NumberingContent>
        </STC.MarginWrapper>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(g)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_limitation_7')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Text>{t('terms_content_limitation_2')}</STC.Text>
        <STC.Text>{t('terms_content_limitation_3')}</STC.Text>
        <STC.Text>{t('terms_content_limitation_4')}</STC.Text>

        <STC.Title>{t('terms_title_12')}</STC.Title>
        <STC.Text>{t('terms_content_exclusion_1')}</STC.Text>
        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_exclusion_1')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_exclusion_2')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_exclusion_3')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>{t('terms_inner_content_exclusion_4')}</STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Text>{t('terms_content_exclusion_2')}</STC.Text>
        <STC.Text>{t('terms_content_exclusion_3')}</STC.Text>

        <STC.Title>{t('terms_title_13')}</STC.Title>
        <STC.Text>{t('terms_content_governing')}</STC.Text>

        <STC.Title>{t('terms_title_14')}</STC.Title>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(a)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_1')}</strong>
            </STC.Underline>
            <STC.Text>
              <Trans i18nKey="terms_inner_content_1">
                We each agree that any dispute, claim, or controversy arising out of or relating to these Terms or the
                breach, termination, enforcement, interpretation or validity thereof or the use of the Services
                (collectively, “<strong>Disputes</strong>”) will be resolved{' '}
                <strong>
                  solely by binding, individual arbitration and not in a class, representative or consolidated action or
                  proceeding.
                </strong>
                You and MeiTalk agree that the U.S. Federal Arbitration Act governs the interpretation and enforcement
                of these Terms, and that you and MeiTalk are each waiving the right to a trial by jury or to participate
                in a class action. This arbitration provision shall survive termination of these Terms.
              </Trans>
            </STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(b)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_2')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_2')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(c)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_3')}</strong>
            </STC.Underline>
            <STC.Text>
              <Trans i18nKey="terms_inner_content_3">
                The arbitration will be conducted by the American Arbitration Association (“<strong>AAA</strong>”) under
                its Consumer Arbitration Rules (the “<strong>AAA Rules</strong>”) then in effect, except as modified by
                these Terms. The AAA Rules are available at www.adr.org or by calling 1-800-778-7879. A party who wishes
                to start arbitration must submit a written Demand for Arbitration to AAA and give notice to the other
                party as specified in the AAA Rules. The AAA provides a form Demand for Arbitration at www.adr.org. Any
                arbitration hearings will take place in Los Angeles County, California, provided that the arbitrator may
                select a different location if the arbitrator determines that the location set forth herein is
                unreasonably burdensome to you. The parties agree that the arbitrator shall have exclusive authority to
                decide all issues relating to the interpretation, applicability, enforceability, and scope of this
                arbitration agreement.
              </Trans>
            </STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(d)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_4')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_4')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(e)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_5')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_5')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(f)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_6')}</strong>
            </STC.Underline>
            <STC.Text>
              <Trans i18nKey="terms_inner_content_6">
                <strong>
                  YOU AND MEITALK AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL
                  CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                </strong>
                Further, if the parties’ dispute is resolved through arbitration, the arbitrator may not consolidate
                another person's claims with your claims and may not otherwise preside over any form of a representative
                or class proceeding. If this specific provision is found to be unenforceable, then the entirety of this
                Dispute Resolution section shall be null and void.
              </Trans>
            </STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(g)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_7')}</strong>
            </STC.Underline>
            <STC.Text>{t('terms_inner_content_7')}</STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.MarginWrapper>
          <STC.Numbering>
            <strong>(h)</strong>
          </STC.Numbering>
          <STC.NumberingContent>
            <STC.Underline>
              <strong>{t('terms_inner_title_8')}</strong>
            </STC.Underline>
            <STC.Text>
              <Trans i18nKey="terms_inner_content_8">
                With the exception of any of the provisions in Section 14(f) of these Terms ("
                <strong>Class Action Waiver</strong>"), if an arbitrator or court of competent jurisdiction decides that
                any part of these Terms is invalid or unenforceable, the other parts of these Terms will still apply.
              </Trans>
            </STC.Text>
          </STC.NumberingContent>
        </STC.MarginWrapper>

        <STC.Text>
          <strong>{t('terms_bottom')}</strong>
        </STC.Text>
      </STC.TextContainer>
    </STC.Container>
  );
};

export default TermsPage;
