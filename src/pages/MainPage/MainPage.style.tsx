import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.tablet`
    padding:${theme.hsM} 0;
  `};
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: block;
  `};
`;

export const LiveWrapper = styled.div`
  width: 100%;
  position: relative;
  transition: 0.6s;
`;

export const ChattingWrapper = styled.div`
  width: 27%;
  margin-left: 40px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const PlayerWrapper = styled.div<{ isFullScreen: boolean }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.2%;

  ${({ isFullScreen }) =>
    isFullScreen
      ? css`
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        `
      : css`
          position: relative;
          width: 100%;
          height: 0;
        `}
`;

export const MainImg = styled.img`
  width: 100%;
  height: auto;
`;

export const StreamList = styled.div`
  width: 83%;
  margin: 3% auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    background-color:${theme.color.bg04};
  `}
`;

export const StreamListTopButton = styled.div<{ tabOverScrollCheck: boolean }>`
  width: 60px;
  height: 60px;
  position: fixed;
  cursor: pointer;
  background-color: #000;
  border-radius: 50%;
  bottom: 5%;
  right: 2%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ theme }) => theme.media.tablet`
  display:none;
`};
  ${({ tabOverScrollCheck }) =>
    tabOverScrollCheck &&
    css`
      opacity: 1;
    `};
`;

export const StreamListTopButtonDirection = styled.img`
  width: 30%;
  height: 15%;
  /* object-fit: cover; */
`;

export const StreamListGridButton = styled.div<{ tabOverScrollCheck: boolean }>`
  width: 60px;
  height: 60px;
  position: fixed;
  cursor: pointer;
  background-color: #000;
  border-radius: 50%;
  bottom: 15%;
  right: 2%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${({ theme }) => theme.media.tablet`
  display:none;
`};
  ${({ tabOverScrollCheck }) =>
    tabOverScrollCheck &&
    css`
      opacity: 1;
    `};
`;

export const StreamListGridButtonDirection = styled.img`
  width: 60%;
  height: 60%;
`;

export const MainTopGradientDiv = styled.div<{ visibleLiveList: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: ${({ theme }) => theme.color.rgbaBg02};
  transition: opacity 0.5s;

  ${({ visibleLiveList }) =>
    visibleLiveList &&
    css`
      opacity: 1;
    `};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  ${({ theme }) => theme.media.tablet`
    justify-content: flex-start;
  `};
`;

export const MainTopGradientGoToLive = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmBold};
  font-size: ${({ theme }) => theme.fs28};

  ${({ theme }) => theme.media.tablet`
    transform: translate(40%, -60%);
  `};
`;
export const MainTopGradientGoToLiveText = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmBold};
  font-size: ${({ theme }) => theme.fs28};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;
export const MainTopGradientGoToLiveDiv = styled.div`
  padding-bottom: 2%;
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const MainTopGradientGoToLiveImg = styled.img`
  width: ${({ theme }) => theme.ic42};
  ${({ theme }) => theme.media.tablet`
    width: ${theme.ic24};
  `};
`;

export const MobileMiddle = styled.div`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display:block;
  `};
`;

export const NoListBlock = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.point};
  margin: 0 10%;
  padding: 4% 0;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmLight};
  text-align: center;

  ${({ theme }) => theme.media.mobile`
    margin: 0;
    padding: 13% 0 4%;
    font-size: ${theme.fs14};
  `};
`;

export const LiveFramePC = styled.div`
  width: 80%;
  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const LiveFrameMobile = styled.div`
  width: 100%;
  display: none;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 0;
  }

  ${({ theme }) => theme.media.tablet`
    display: block;
    padding: 4% 0 6%;
  `};

  ${({ theme }) => theme.media.mobile`
    display: block;
    padding: 4% 0 6%;
  `};
`;

export const MotionVideo = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -10%;
  left: 0;
  transition: '0.6s';
  background: ${({ theme }) => theme.color.bg17};

  ${({ theme }) => theme.media.tablet`
    top: 0;
  `};
`;
