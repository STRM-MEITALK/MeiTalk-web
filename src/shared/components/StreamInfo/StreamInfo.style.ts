import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;

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
    margin-left: 2%;
    margin-right: 4%;

    ${({ theme }) => theme.media.mobile`
        margin-left: 2%;
        margin-right: 4%;
    `};
  }
`;

export const Block = styled.div`
  width: calc(100% - 51px);
  margin-left: 15px;
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
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  line-height: 23px;

  ${({ theme }) => theme.media.mobile`
    font-family: ${theme.fmRegular};
  `};
`;

export const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-left: auto;
`;

export const ChannelName = styled.div`
  max-width: 40%;
  height: 22px;
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
  vertical-align: middle;
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

export const Split = styled.span`
  margin: 0 5px;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmThin};
`;
