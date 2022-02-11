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
  width: 85%;
  min-height: 30px;
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;

  ${({ isLast }) =>
    isLast &&
    css`
      animation-name: ${chatAnimation};
      animation-duration: 0.3s;
    `}

  ${({ theme }) => theme.media.tablet`
    width: 90%;
    margin-bottom: 21px;
  `}
`;

export const SCHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.bg13};
`;

export const SCChatText = styled.p`
  min-width: 70%;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc06};
  font-family: ${({ theme }) => theme.fmRegular};
  line-height: 1.5;
  text-align: center;
  background: ${({ theme }) => theme.color.bg01};
  padding: 0 10px;
  word-break: keep-all;
  word-wrap: break-word;

  ${({ theme }) => theme.media.tablet`
    min-width: 40%;
  `}

  ${({ theme }) => theme.media.mobile`
    min-width: 60%;
    font-size: ${theme.fs14}
  `}
`;
