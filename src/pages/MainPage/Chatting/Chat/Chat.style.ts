import styled, { keyframes, css } from 'styled-components';

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

const chatAnimation2 = keyframes`
  0% {
    transform: translateY(100%)
  }
  100% {
    transform: translateY(0)
  }
`;

export const SCChatContianer = styled.div<{ isLast: boolean }>`
  width: 80%;
  display: flex;
  margin-left: 34px;
  margin-top: 12px;
  margin-bottom: 25px;

  ${({ isLast }) =>
    isLast &&
    css`
      animation-name: ${chatAnimation};
      animation-duration: 0.3s;
    `}

  ${({ theme }) => theme.media.tablet`
    margin-left: 23px;
    margin-bottom: 21px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 15px;
  `}
`;

export const SCChat = styled.div`
  width: 80%;
  margin-left: 13px;
`;

export const SCChatText01 = styled.p`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc06};
  font-family: ${({ theme }) => theme.fmRegular};
  margin-bottom: 4px;
  line-height: 1;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs11}
  `}
`;

export const SCChatText02 = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  word-break: keep-all;
  word-wrap: break-word;
  line-height: 1;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10}
  `}
`;
