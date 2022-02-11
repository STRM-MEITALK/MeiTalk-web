import React from 'react';
import { IStreamListType } from '@type/streamType';
import { numberFormatter } from '@lib/numberFormatter';
import useGoToChannel from '@hooks/useGoToChannel';
import Profile from '@components/Profile';
import ViewImg from '@images/view.png';
import GreyLikeImg from '@images/like.png';
import timeImg from '@images/time-mobile.png';
import * as STC from './MainListItemInfo.style';

const MainListItemInfo = ({ item, isMouseOver }: { item: IStreamListType; isMouseOver: boolean }) => {
  const { goToChannel } = useGoToChannel({ channelId: item.channelId });

  return (
    <STC.Wrapper isMouseOver={isMouseOver}>
      <STC.WrapperBlock>
        <Profile type="ps36" src={item.profile} channelId={item.channelId} />
        <STC.Block>
          <STC.Title>{item.title}</STC.Title>
          <STC.BottomInfo>
            <STC.ChannelName onClick={goToChannel}>{item.name}</STC.ChannelName>
            {item.isLive && (
              <>
                <STC.Flex className="date">
                  <STC.Icon src={timeImg} alt="view" />
                  <STC.InfoText>{item.streamTime}</STC.InfoText>
                </STC.Flex>
                <STC.Split>•</STC.Split>
              </>
            )}
            <STC.Flex>
              <STC.Icon src={ViewImg} alt="view" />
              <STC.InfoText>{numberFormatter(item.viewCount)}</STC.InfoText>
            </STC.Flex>
            <STC.Split>•</STC.Split>
            <STC.Flex>
              <STC.Icon src={GreyLikeImg} alt="like" />
              <STC.InfoText>{numberFormatter(item.likeCount)}</STC.InfoText>
            </STC.Flex>
            {!item.isLive && (
              <>
                <STC.Split>•</STC.Split>
                <STC.Flex className="date">
                  <STC.InfoText>{item.streamTime}</STC.InfoText>
                </STC.Flex>
              </>
            )}
          </STC.BottomInfo>
        </STC.Block>
      </STC.WrapperBlock>
    </STC.Wrapper>
  );
};

export default MainListItemInfo;
