import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import Button from '@components/Button';
import ExpiredImg from '@images/expired.png';
import * as STC from './CannotWatch.style';

const CannotWatch = () => {
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    window.location.href = PAGE_URL.MAIN;
  }, []);

  return (
    <STC.Container>
      <STC.Wrapper>
        <STC.Icon src={ExpiredImg} />
        <STC.Title>
          {t('cannot_watch_title_1')}
          <br />
          {t('cannot_watch_title_2')}
        </STC.Title>
        <STC.Msg>{t('cannot_watch_msg')}</STC.Msg>
        <STC.ButtonWrapper>
          <Button width="100%" content={t('common_home')} handleClick={handleClick} />
        </STC.ButtonWrapper>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default CannotWatch;
