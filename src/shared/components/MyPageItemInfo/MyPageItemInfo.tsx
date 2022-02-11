import React from 'react';
import { useTranslation } from 'react-i18next';
import { IAfterVideoType } from '@type/studioType';
import { numberWithComma } from '@lib/numberWithComma';
import useGoToChannel from '@hooks/useGoToChannel';

import Profile from '@components/Profile';

import TimeImg from '@images/time-pc.png';
import DeleteImg from '@images/delete-pc.png';
import ViewImg from '@images/mystudio_view.png';
import LikeImg from '@images/mystudio_like.png';

import * as STC from './MyPageItemInfo.style';
import useMyPageItemInfo from './useMyPageItemInfo';

const MyPageItemInfo = ({ item, activeTab }: { item: IAfterVideoType; activeTab: number }) => {
  const { t } = useTranslation();

  const { deleteOnClick } = useMyPageItemInfo();
  const { goToChannel } = useGoToChannel({ channelId: item.channelId });

  return (
    <STC.Wrapper>
      <STC.TitleWrapper>
        {item.isLive && <STC.SmallLiveTag>{t('common_live')}</STC.SmallLiveTag>}
        <STC.Title>{item.title}</STC.Title>
      </STC.TitleWrapper>
      <STC.WrapperBlock>
        <STC.ProfileWrapper>
          <Profile type="ps26" src={item.profile} channelId={item.channelId} />
          <STC.ChannelName onClick={goToChannel}>{item.name}</STC.ChannelName>
        </STC.ProfileWrapper>
        {item.displayFlag === 'Y' && (
          <STC.Block>
            {item.isLive && (
              <STC.Flex className="time">
                <STC.Icon src={TimeImg} alt="time" />
                <STC.InfoText>{item.streamTime}</STC.InfoText>
                <STC.InfoTextThin>•</STC.InfoTextThin>
              </STC.Flex>
            )}
            <STC.Flex>
              <STC.Icon src={ViewImg} alt="view" />
              <STC.InfoText>{numberWithComma(item.viewCount)}</STC.InfoText>
              <STC.InfoTextThin>•</STC.InfoTextThin>
            </STC.Flex>
            <STC.Flex>
              <STC.Icon src={LikeImg} alt="like" />
              <STC.InfoText>{numberWithComma(item.likeCount)}</STC.InfoText>
              {!item.isLive && <STC.InfoTextThin>•</STC.InfoTextThin>}
            </STC.Flex>

            {!item.isLive && (
              <STC.Flex className="date">
                <STC.InfoText>{item.streamTime}</STC.InfoText>
              </STC.Flex>
            )}
          </STC.Block>
        )}
      </STC.WrapperBlock>
      <STC.DeleteWrapper>
        <STC.Icon src={DeleteImg} alt="view" onClick={() => deleteOnClick(item.vodId, activeTab)} />
      </STC.DeleteWrapper>
    </STC.Wrapper>
  );
};

export default MyPageItemInfo;
