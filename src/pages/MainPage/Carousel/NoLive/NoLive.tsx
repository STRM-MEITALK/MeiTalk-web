import React from 'react';
import { useTranslation } from 'react-i18next';

import userProfileImg from '@images/userProfile.png';

import livePcIconImg from '@images/live-pc.png';
import liveBackgroundImg from '@images/live-bg.png';
import GettingIcon from '@images/getting-ico.png';

import * as STC from './NoLive.style';

const MainMiddle = ({ currentMenu }: { currentMenu: number }) => {
  const { t } = useTranslation();
  return (
    <STC.Container>
      <STC.Content>
        <img src={GettingIcon} alt="" />
        <STC.ReadyText>{currentMenu === 0 ? t('no_live_contents') : t('no_vod_contents')}</STC.ReadyText>
      </STC.Content>
    </STC.Container>
  );
};

export default MainMiddle;
