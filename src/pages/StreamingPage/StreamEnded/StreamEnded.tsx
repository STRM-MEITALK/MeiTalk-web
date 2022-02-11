import React from 'react';
import { useTranslation } from 'react-i18next';
import GettingIcon from '@images/getting-ico.png';
import * as STC from './StreamEnded.style';

const StreamEnded = () => {
  const { t } = useTranslation();

  return (
    <STC.Wrapper>
      <STC.Content>
        <STC.Text>{t('ready_stream_msg')}</STC.Text>
      </STC.Content>
    </STC.Wrapper>
  );
};

export default StreamEnded;
