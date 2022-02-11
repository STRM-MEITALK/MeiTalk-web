import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.tablet`
    padding:${theme.hsM} 0;
  `};
`;

interface IReplayWrapper {
  showComment?: boolean;
}

export const PCWrapper = styled.div<IReplayWrapper>`
  width: 90%;
  margin: 0 auto;

  ${({ showComment }) =>
    !showComment &&
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

export const ReplayWrapper = styled.div<IReplayWrapper>`
  width: 72%;
  transition: 0.6s;
  ${({ showComment }) =>
    !showComment &&
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

export const CommentWrapper = styled.div`
  width: 28%;
  margin-left: 25px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  `};
`;

export const CannelBlock = styled.div<IReplayWrapper>`
  width: 71%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};

  ${({ showComment }) =>
    !showComment &&
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
