/* eslint-disable no-else-return */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  bottom: 6%;
  left: 5%;
  ${({ theme }) => theme.media.tablet`
    padding: 3% 4% 0;
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
    margin-left: 1%;
    margin-right: 2%;

    ${({ theme }) => theme.media.mobile`
        margin-left: 2%;
        margin-right: 4%;
    `};
  }

  &.date {
    margin: 0 2%;

    ${({ theme }) => theme.media.mobile`
      margin: 0 4%;
    `};
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
  max-height: 46px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs16};
  line-height: 23px;
`;

export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-left: auto;
`;

export const ChannelName = styled.p`
  max-width: 40%;
  height: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmMedium};
  margin-right: 2%;

  ${({ theme }) => theme.media.tablet`
    max-width: 70%;
  `};
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
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
