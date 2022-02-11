import React from 'react';
import Bitcoin from '@images/bitcoin.png';
import Binancecoin from '@images/binancecoin.png';
import Streamcoin from '@images/streamcoin.png';
import { useTranslation } from 'react-i18next';
import * as Style from './Donate.style';
import useDonate from './useDonate';

const Donate = () => {
  const { t } = useTranslation();
  const { showToast } = useDonate();

  return (
    <Style.Container>
      <Style.Title>{t('donate_to_channel')}</Style.Title>

      <Style.IconContainer>
        <Style.IconWrapper onClick={showToast}>
          <Style.Icon src={Bitcoin} />
          <Style.IconText>{t('bitcoin')}</Style.IconText>
        </Style.IconWrapper>

        <Style.VerticalLine />

        <Style.IconWrapper onClick={showToast}>
          <Style.Icon src={Binancecoin} />
          <Style.IconText>{t('binance')}</Style.IconText>
          <Style.IconText>{t('coin')}</Style.IconText>
        </Style.IconWrapper>

        <Style.VerticalLine />

        <Style.IconWrapper onClick={showToast}>
          <Style.Icon src={Streamcoin} />
          <Style.IconText>{t('stream')}</Style.IconText>
          <Style.IconText>{t('coin')}</Style.IconText>
        </Style.IconWrapper>
      </Style.IconContainer>
    </Style.Container>
  );
};

export default Donate;
