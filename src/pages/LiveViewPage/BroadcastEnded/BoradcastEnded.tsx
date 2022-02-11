import React from 'react';
import { useTranslation } from 'react-i18next';
import GettingIcon from '@images/getting-ico.png';
import * as STC from './BroadcastEnded.style';

const BoradcastEnded = () => {
  const { t } = useTranslation();

  return (
    <STC.Container>
      <STC.Wrapper>
        <STC.Content>
          <STC.Icon src={GettingIcon} alt="icon" />
          <STC.Text>{t('end_broadcast_msg')}</STC.Text>
        </STC.Content>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default BoradcastEnded;
