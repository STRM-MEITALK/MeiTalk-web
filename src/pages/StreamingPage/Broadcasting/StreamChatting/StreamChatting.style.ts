import styled, { css, keyframes } from 'styled-components';
import { IisFocus } from './StreamChattingType';

interface IChatHeight {
  chatHeight: number | undefined;
}

const chatAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  90% {
    transform: translateX(-10px)
  }
  100% {
    transform: translateX(0)
  }
`;

export const SCContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.bg01};
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
  width: ${({ theme }) => theme.ic36};
  height: ${({ theme }) => theme.ic36};
  position: absolute;
  right: 0;
  background: none;
  border: none;
  outline: none;
  margin-right: 20px;
  padding: 0;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic18};
    height: ${theme.ic18};
    margin-right: 11px;
  `}
`;

export const SCHeaderImg = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic18};
    height: ${theme.ic18};
  `}
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
    height: ${chatHeight ? chatHeight - 126 : chatHeight}px;
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
    background: #ccc;
  }
`;

export const SCFooter = styled.div`
  width: 100%;
  height: 12%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.bg02};

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

  ${({ isFocus }) =>
    isFocus &&
    css`
      background: ${({ theme }) => theme.color.bg03};
      border: 1px solid ${({ theme }) => theme.color.lc03};

      & > button {
        color: ${({ theme }) => theme.color.fc04};
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

export const SCBanContainer = styled.div`
  display: flex;
  height: 200px;
`;
