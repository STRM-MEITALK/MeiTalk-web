import styled, { css } from 'styled-components';
import { IisFocus, IChatHeight } from '@src/type/chattingType';

interface IIsFullScreen {
  isFullScreen: boolean;
}

export const SCContainer = styled.div<IIsFullScreen>`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ isFullScreen }) =>
    isFullScreen
      ? css`
          background: none;
        `
      : css`
          background: ${({ theme }) => theme.color.bg01};
        `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

export const SCHeader = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  text-align: center;
  background: ${({ theme }) => theme.color.bg02};
  position: absolute;
  top: 0;

  ${({ theme }) => theme.media.tablet`
    height: 48px;
    position: relative;
    border-radius: 10px 10px 0 0;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14}
  `}
`;

export const SCHeaderBtn = styled.button`
  width: ${({ theme }) => theme.ic18};
  height: ${({ theme }) => theme.ic18};
  position: absolute;
  right: 20px;
  background: none;
  border: none;
  outline: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const SCHeaderImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SCChatsContainer = styled.div<IChatHeight>`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 8%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 4px;

  ${({ theme, chatHeight }) => theme.media.tablet`
    height: ${chatHeight && chatHeight - 126}px;
    position: relative;
  `}
`;

export const SCGradient = styled.div`
  width: 100%;
  height: 69px;
  position: absolute;
  top: 0;
  background: ${({ theme }) => `linear-gradient(${theme.color.bg05} 0%, ${theme.color.rgbaBg01})`};
  z-index: 10;

  ${({ theme }) => theme.media.tablet`
    height: 38px;
  `}
`;

export const SCChats = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${({ theme }) => theme.color.bg10};
  }
`;

export const SCFooter = styled.div<IIsFullScreen>`
  width: 100%;
  height: 12%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isFullScreen }) =>
    isFullScreen
      ? css`
          background: none;
        `
      : css`
          background: ${({ theme }) => theme.color.bg02};
        `}

  ${({ theme }) => theme.media.tablet`
    height: 78px;
    position: relative;
  `}
`;

export const SCSubmitContainer = styled.div<IisFocus>`
  width: 85%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.bg02};
  border: 1px solid ${({ theme }) => theme.color.lc08};

  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      background: ${theme.color.bg03};
      border: 1px solid ${theme.color.lc03};

      & > button {
        color: ${theme.color.fc04};
      }
    `}

  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `}
`;

export const SCInput = styled.input<{ isLiveFinish: boolean }>`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  padding-left: 14px;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme, isLiveFinish }) => (isLiveFinish ? theme.color.fc09 : theme.color.fc04)};

  ::placeholder {
    ${({ theme }) => css`
      font-size: ${theme.fs16};
      font-family: ${theme.fmLight};
      color: ${theme.color.fc09};
    `};
  }

  &:focus {
    ::placeholder {
      color: ${({ theme }) => theme.color.fc04};
    }
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14}
  `}
`;

export const SCButton = styled.button<{ isLiveFinish: boolean }>`
  min-width: fit-content;
  height: 100%;
  border: none;
  background: none;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc09};
  padding-right: 14px;

  ${({ isLiveFinish }) =>
    !isLiveFinish &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14}
  `}
`;

export const SCButton2 = styled.button<{ isLiveFinish: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  background: none;

  ${({ isLiveFinish }) =>
    !isLiveFinish &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const SCButtonImg = styled.img`
  ${({ theme }) => css`
    width: ${theme.ic24};
    height: ${theme.ic24};
  `}
`;

export const SCBanContainer = styled.div`
  display: flex;
  height: 200px;
`;
