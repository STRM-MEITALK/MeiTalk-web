import styled, { css } from 'styled-components';
import { IContentWrapperProps } from './BroadcastingType';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Content = styled.div<{ isTop?: boolean }>`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${({ isTop }) =>
    isTop &&
    css`
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
    `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: block;
  `};
`;

export const LiveWrapper = styled.div`
  width: 73%;
  transition: 0.6s;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const ChattingWrapper = styled.div`
  position: relative;
  width: 27%;
  margin-left: 40px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  `};
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.2%;

  ${({ theme }) => theme.media.tablet`
    padding-bottom: 56.2%;
  `};
`;

export const PCVideoInfo = styled.div`
  & > div {
    margin-top: 20px;
  }
  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const InfoBlock = styled.div<{ isBtn?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.fc01};
  ${({ isBtn }) =>
    isBtn &&
    css`
      width: 140px;
    `}
`;

export const MarginBlock = styled.div<{ isMargin?: boolean }>`
  ${({ isMargin }) =>
    isMargin &&
    css`
      margin-right: 20px;
    `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ViewersIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

export const LiveTag = styled.div<{ isBroad: boolean }>`
  background-color: ${({ theme, isBroad }) => (isBroad ? theme.red : theme.offline)};
  text-align: center;
  margin-right: 10px;
  color: ${({ theme, isBroad }) => (isBroad ? theme.color.fc01 : theme.fcOffline)};
  font-family: ${({ theme }) => theme.fmMedieum};
  font-size: ${({ theme }) => theme.fs20};
  padding: 2px 7px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    padding: 2px 6px 0;
  `}
`;

export const Title = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs28};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `}
`;

export const ChattingBtn = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.lc04};
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs20};
  padding: 6px 13px 7px 12px;
  margin-left: 16px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin: 15px 0;
  `}

  ${({ theme }) => theme.media.mobile`
    margin: 8px 0;
    padding: 3px 7px 4px 8px;
    font-size: ${theme.fs12};
  `}
`;

export const MobileVideoInfo = styled.div`
  padding: 0 5%;
  display: none;

  ${({ theme }) => theme.media.tablet`
    display:block;
    padding:0;
  `};
`;

export const IconWrapper = styled.div`
  padding: 4% 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
`;

export const IconBlock = styled.div`
  color: ${({ theme }) => theme.color.fc01};
`;

export const ProfileWrapper = styled.div`
  color: ${({ theme }) => theme.color.fc01};
  display: flex;
  align-items: center;
  padding: 16px 0;

  ${({ theme }) => theme.media.tablet`
    padding: 4% 4%;
  `};
`;

export const MicIcon = styled.img`
  width: ${({ theme }) => theme.ic20};
  height: ${({ theme }) => theme.ic20};
  margin-right: 4px;
  margin-left: 20px;
`;

export const CamIcon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 4px;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic36};
  height: ${({ theme }) => theme.ic36};

  &.time {
    ${({ theme }) => theme.media.tablet`
    margin-left:-7px;
  `};
  }

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic32};
    height: ${theme.ic32};
  `}
`;

export const ViewCntText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs18};

  ${({ theme }) => theme.media.tablet`
    padding-bottom: 1px;
  `};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14}
  `}
`;

export const ChannelText = styled.p`
  max-width: 90%;
  word-break: break-all;
  color: ${({ theme }) => theme.color.fc01};
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fs24};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    max-width: 80%;
    font-size: ${theme.fs16};
  `}
`;

export const TimeText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  margin-right: 17px;
  font-size: ${({ theme }) => theme.fs18};

  ${({ theme }) => theme.media.tablet`
    margin-right: 3px;
    padding-bottom: 1px;
  `};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14};
  `}
`;

export const PaddingWrapper = styled.div`
  padding: 20px 4% 0;
`;

export const VideoList = styled.div<{ isShow: boolean }>`
  width: 85%;
  margin: 3% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme, isShow }) => theme.media.tablet`
    width: 100%;
    display: ${isShow ? 'none' : 'flex'};
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    padding-top:3%;
    background-color:${theme.color.bg04};
  `};
`;

export const VideoItem = styled.div`
  position: relative;
  flex-basis: 25%;

  ${({ theme }) => theme.media.grid3`
    flex-basis: 33%;
  `};

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
    padding: 0;
    max-width: 100%;
    background-color:${theme.color.background};
  `};
`;

export const VideoWrapper = styled.div`
  margin: 2% 20px 10%;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin: 0;
    padding-bottom: 4%;
  `};
`;

export const Video = styled.video`
  width: 100%;
`;

export const SmallLiveTag = styled.div`
  width: 40px;
  position: absolute;
  top: 2.3%;
  left: 3%;
  padding: 2px 7px;
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmBold};
  font-size: ${({ theme }) => theme.fs12};

  ${({ theme }) => theme.media.tablet`
    top: 0;
    left: 0;
  `};
`;

export const InfoWrapper = styled.div<IContentWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ ratio }) => ratio};
  margin-top: 10px;
  ${({ isRight }) =>
    isRight &&
    css`
      padding-right: 0;
    `}
  ${({ theme, isRight }) => theme.media.tablet`
    ${
      isRight &&
      css`
        padding-right: 20px;
      `
    }
    width: 100%;

  `};
`;

export const InfoContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  margin: 50px auto;
  width: 30%;
`;

export const ContraintWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContraintContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 15px;
  background: none;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const DetailInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px 15px;
  margin-top: 10px;
  margin-bottom: 40px;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  resize: none;
  background: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const BroadTitle = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const RequireText = styled.h1`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs10};
  `};
`;

export const Point = styled(RequireText)`
  margin-left: 5px;
  color: ${({ theme }) => theme.color.point};
`;

export const ContentMarginTitle = styled.h1`
  width: 30%;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const ConstraintContent = styled.h1`
  width: 70%;
  text-align: left;
  word-break: break-all;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc02};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    align-items: center;
  `};
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DataTextWrapper = styled.div<{ isBottom?: boolean }>`
  display: flex;
  width: 100%;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  ${({ isBottom }) =>
    isBottom &&
    css`
      margin-top: 20px;
    `};
`;

export const DataTitle = styled.h1`
  flex: 3;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
`;

export const DataContentWrapper = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const DataContent = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc02};
`;

export const CopyImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const CopyItem = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
`;

export const VisibleIcon = styled(CopyItem)`
  margin-left: 20px;
`;

export const StopModalContentTitle = styled.h1`
  margin-bottom: 10px;
  white-space: pre-line;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
`;

export const StopModalContentOption = styled.h1`
  white-space: pre-line;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
`;

export const ChattingPrepareWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: ${({ theme }) => theme.color.bg05};
`;

export const ChattingPrepareWrapText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14};
  `};
`;

export const PCWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const MobileWrapper = styled.div``;
