import React from 'react';
import { IStreamListType } from '@type/streamType';
import ViewImg from '@images/view-list.png';
import Profile from '@components/Profile';
import * as STC from './MainPlayerItemInfo.style';

const MainPlayerItemInfo = ({ item }: { item: IStreamListType }) => {
  return (
    <STC.Wrapper>
      <STC.WrapperBlock>
        <Profile type="ps36" src={item.profile} channelId={item.channelId} />
        <STC.Block>
          <STC.Title>{item.title}</STC.Title>
          <STC.BottomInfo>
            <STC.ChannelName>{item.name}</STC.ChannelName>
            <STC.Flex>
              <STC.Icon src={ViewImg} alt="view" />
              <STC.InfoText>{item.viewCount}</STC.InfoText>
            </STC.Flex>
          </STC.BottomInfo>
        </STC.Block>
      </STC.WrapperBlock>
    </STC.Wrapper>
  );
};

export default MainPlayerItemInfo;
