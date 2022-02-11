import styled, { css } from 'styled-components';

interface IReplayWrapper {
  showComment: boolean;
}

export const PCVideoInfo = styled.div<IReplayWrapper>`
  ${({ showComment }) =>
    !showComment &&
    css`
      width: 90%;
      margin: 0 auto;
    `};

  & > div {
    margin: 20px 0;
  }

  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.fc01};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h1<{ isShowTitle: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};

  ${({ isShowTitle }) =>
    isShowTitle &&
    css`
      -webkit-line-clamp: unset;
    `};
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 20px;
  margin-top: 12px;
  cursor: pointer;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fs16};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 10px;
`;

export const ViewCntText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
`;
