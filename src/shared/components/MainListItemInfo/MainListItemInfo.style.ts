import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isMouseOver: boolean }>`
  position: absolute;
  width: 100%;
  bottom: 6%;
  transition: 0.2s;

  ${({ isMouseOver }) =>
    !isMouseOver
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};

  ${({ theme }) => theme.media.tablet`
    position: static;
    padding: 3% 0 7%;
  `};
`;

export const WrapperBlock = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 4%;
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

    margin-left: 2%;
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
  vertical-align: middle;
  align-items: center;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 2%;

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
