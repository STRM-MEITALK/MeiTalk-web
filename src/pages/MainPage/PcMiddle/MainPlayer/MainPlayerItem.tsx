import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IStreamListType } from '@type/streamType';
import * as STC from './MainPlayerItem.style';

const MainPlayerItem = ({ item }: { item: IStreamListType }) => {
  const { t } = useTranslation();

  return (
    <STC.StreamItem>
      <STC.StreamWrapper>
        <STC.StreamInnerWrapper>
          <STC.StreamInnerBlock>
            <STC.StreamInnerWrapperImage src={item.thumbnail ? item.thumbnail : undefined} />
          </STC.StreamInnerBlock>
          {!item.isLive && <STC.StreamTime>{item.streamLen}</STC.StreamTime>}
        </STC.StreamInnerWrapper>
        {item.isLive && <STC.SmallLiveTag>{t('common_live')}</STC.SmallLiveTag>}
      </STC.StreamWrapper>
    </STC.StreamItem>
  );
};

export default MainPlayerItem;
