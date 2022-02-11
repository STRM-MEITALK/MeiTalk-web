import styled, { css } from 'styled-components';

export const MobileVideoInfo = styled.div`
  display: block;
`;

export const PaddingWrapper = styled.div`
  padding: 10px 4% 0;
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.fc01};
  margin-bottom: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
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

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `};
`;

export const TimeWrapper = styled.div`
  width: 110px;
  margin-right: 18px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.mobile`
    width: 100px;
    margin-right: 5px;
  `};
`;

export const TimeText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  padding-bottom: 1px;
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14};
  `}
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic18};
  height: ${({ theme }) => theme.ic18};
  margin-right: 8px;

  &.time {
    width: ${({ theme }) => theme.ic24};
    height: ${({ theme }) => theme.ic24};
  }

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic14};
    height: ${theme.ic14};
    margin-right: 8px;

    &.time{
      width: ${theme.ic20};
      height: ${theme.ic20};
    }
  `};
`;

export const ViewCntText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CannelBlock = styled.div`
  width: 100%;
  padding: 4% 4% 6%;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelText = styled.p`
  max-width: 90%;
  word-break: break-all;
  color: ${({ theme }) => theme.color.fc01};
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmLight};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    max-width: 80%;
    font-size: ${theme.fs16};
    font-family: ${theme.fmRegular};
  `}
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4%;
`;

export const DetailText = styled.div<{ isShowDetail: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc03};

  ${({ isShowDetail }) =>
    isShowDetail &&
    css`
      -webkit-line-clamp: unset;
    `};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    margin-top: 2.5%;
  `};
`;

export const IconWrapper = styled.div`
  padding: 4% 7%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
`;

export const LiveTag = styled.div`
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  padding: 0 10px;
  margin-right: 10px;
  margin-top: 1px;
  color: ${({ theme }) => theme.color.fc02};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};

  ${({ theme }) => theme.media.mobile`
    min-width: 50px;
    font-size: ${theme.fs12};
    padding: 2px 6px 0;
    margin-top: 1px;
  `}
`;

export const OfflineTag = styled.div`
  background-color: ${({ theme }) => theme.offline};
  text-align: center;
  padding: 0 10px;
  margin-right: 10px;
  margin-top: 1px;
  color: ${({ theme }) => theme.fcOffline};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    padding: 2px 6px 0;
    margin-top: 1px;
  `}
`;
