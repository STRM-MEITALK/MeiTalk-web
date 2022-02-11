import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import StatusImg from '@images/404.png';
import Button from '@components/Button';
import * as STC from './NotFoundPage.style';

const NotFoundPage = () => {
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    window.location.href = PAGE_URL.MAIN;
  }, []);

  return (
    <STC.Container>
      <STC.Wrapper>
        <STC.StatusImg src={StatusImg} />
        <STC.Text>{t('not_found_page')}</STC.Text>
        <Button content={t('goto_main')} type="secondary" width="50%" handleClick={handleClick} />
      </STC.Wrapper>
    </STC.Container>
  );
};

export default NotFoundPage;
