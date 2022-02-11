/* eslint-disable no-else-return */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.tablet`
    margin: 5% 0 0;
  `};

  ${({ theme }) => theme.media.mobile`
    margin: 7% 0 0;
  `};
`;

export const WrapperBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.time {
    ${({ theme }) => theme.media.mobile`
        margin-left: 2%;
        margin-right: 4%;
    `};
  }

  &.date {
    margin: 0 0 0 2%;
  }
`;

export const Block = styled.div`
  width: 80%;
  margin-left: 15px;

  ${({ theme }) => theme.media.tablet`
    width: 95%;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 80%;
  `};
`;

export const Title = styled.h1`
  max-height: 23px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
`;

export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-left: auto;
`;

export const ChannelName = styled.p`
  max-width: 40%;
  display: flex;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 2%;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    max-width: 70%;
  `};
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
`;

export const SmallIcon = styled.img`
  width: ${({ theme }) => theme.ic16};
  height: ${({ theme }) => theme.ic16};
  margin-right: 5px;
`;
export const Split = styled.span`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmThin};
`;
