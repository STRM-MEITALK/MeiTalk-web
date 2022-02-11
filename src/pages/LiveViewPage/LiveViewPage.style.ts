import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.tablet`
    padding:${theme.hsM} 0;
  `};
`;

interface ILiveWrapper {
  showChat: boolean;
}

export const PCWrapper = styled.div<ILiveWrapper>`
  width: 90%;
  margin: 0 auto;

  ${({ showChat }) =>
    !showChat &&
    css`
      width: 100%;
    `};
`;

export const MobileWrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: block;
  `};
`;

export const LiveWrapper = styled.div<ILiveWrapper>`
  width: 73%;
  transition: 0.6s;

  ${({ showChat }) =>
    !showChat &&
    css`
      width: 100%;
    `};

  .fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const ChattingWrapper = styled.div<{ fullScreen: boolean }>`
  width: 27%;
  margin-left: 40px;

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      height: 95%;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 20;
    `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-left: 0;
  `};
`;

export const CannelBlock = styled.div<ILiveWrapper>`
  width: 71%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};

  ${({ showChat }) =>
    !showChat &&
    css`
      width: 90%;
      margin: 0 auto;
    `};
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
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

export const DetailText = styled.div<{ isShowDetail: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: 1;
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
`;

export const Arrow = styled.img`
  width: 10px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export const StreamList = styled.div<{ isShow: boolean }>`
  .infinite-scroll-component__outerdiv {
    ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
  }

  .infinite {
    width: 90%;
    margin: 3% auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ${({ theme }) => theme.media.tablet`
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    padding-top:3%;
    background-color:${theme.color.bg04};
  `};
  }

  ${({ theme, isShow }) => theme.media.tablet`
    display: ${isShow ? 'none' : 'flex'};
  `};
`;
