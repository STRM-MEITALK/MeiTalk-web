import styled, { css } from 'styled-components';

interface IReplayWrapper {
  showComment?: boolean;
}

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
  margin-bottom: 10px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.fc01};
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

export const DateText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 10px;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic14};
    height: ${theme.ic14};
    margin-right: 8px;
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

export const CannelBlock = styled.div<IReplayWrapper>`
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
    margin-top: 7px;
  `};
`;

export const IconWrapper = styled.div`
  padding: 4% 7%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};

  & > div {
    margin: 0;

    &:nth-child(1),
    &:nth-child(2) {
      margin: 0 5px;
    }
  }
`;
