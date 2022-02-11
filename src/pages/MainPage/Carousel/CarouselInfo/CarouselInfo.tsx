import React from 'react';
import { IStreamListType } from '@type/streamType';
import { numberWithComma } from '@lib/numberWithComma';
import useGoToChannel from '@hooks/useGoToChannel';
import Profile from '@components/Profile';
import ViewImg from '@images/view-list.png';
import GreyLikeImg from '@images/like-list.png';
import timeImg from '@images/time-mobile.png';
import * as STC from './CarouselInfo.style';

const CarouselInfo = ({ item }: { item: IStreamListType }) => {
  const { goToChannel } = useGoToChannel({ channelId: item.channelId });

  return (
    <STC.Wrapper className="info">
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
              <STC.InfoText>{numberWithComma(item.viewCount)}</STC.InfoText>
            </STC.Flex>
            <STC.Split>•</STC.Split>
            <STC.Flex>
              <STC.Icon src={GreyLikeImg} alt="like" />
              <STC.InfoText>{numberWithComma(item.likeCount)}</STC.InfoText>
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

export default CarouselInfo;
