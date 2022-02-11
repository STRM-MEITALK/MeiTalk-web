import styled, { css } from 'styled-components';

interface ILiveWrapper {
  showChat: boolean;
}

export const PCVideoInfo = styled.div<ILiveWrapper>`
  ${({ showChat }) =>
    !showChat &&
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

export const TimeWrapper = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
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

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 10px;

  &.time {
    ${({ theme }) => theme.media.tablet`
    margin-left:-7px;
  `};
  }
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 20px;
  margin-top: 12px;
  cursor: pointer;
`;

export const ViewCntText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
`;

export const LiveTag = styled.div`
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  margin-right: 10px;
  padding: 0 10px;
  margin-top: 1px;
  color: ${({ theme }) => theme.color.fc02};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
`;

export const OfflineTag = styled.div`
  background-color: ${({ theme }) => theme.offline};
  text-align: center;
  margin-right: 10px;
  margin-top: 1px;
  padding: 0 10px;
  color: ${({ theme }) => theme.fcOffline};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
`;

export const TimeText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fs16};
`;
