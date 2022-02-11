import React from 'react';
import { IAfterVideoType } from '@type/studioType';
import { numberWithComma } from '@lib/numberWithComma';

import Profile from '@components/Profile';

import ViewImg from '@images/mystudio_view.png';
import LikeImg from '@images/mystudio_like.png';

import * as STC from './MyChannelItemInfo.style';

const MyChannelItemInfo = ({ item }: { item: IAfterVideoType }) => {
  return (
    <STC.Wrapper>
      <STC.TitleWrapper>
        <STC.Title>{item.title}</STC.Title>
      </STC.TitleWrapper>
      <STC.WrapperBlock>
        <STC.ProfileWrapper>
          <Profile type="ps26" src={item.profile} channelId={item.channelId} />
          <STC.ChannelName>{item.name}</STC.ChannelName>
        </STC.ProfileWrapper>

        <STC.Block>
          <STC.Flex>
            <STC.Icon src={ViewImg} alt="view" />
            <STC.InfoText>{numberWithComma(item.viewCount)}</STC.InfoText>
            <STC.InfoTextThin>•</STC.InfoTextThin>
          </STC.Flex>
          <STC.Flex>
            <STC.Icon src={LikeImg} alt="like" />
            <STC.InfoText>{numberWithComma(item.likeCount)}</STC.InfoText>
            <STC.InfoTextThin>•</STC.InfoTextThin>
          </STC.Flex>
          <STC.Flex className="date">
            <STC.InfoText>{item.streamTime.split(' ')[0]}</STC.InfoText>
          </STC.Flex>
        </STC.Block>
      </STC.WrapperBlock>
    </STC.Wrapper>
  );
};

export default MyChannelItemInfo;
