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
  display: flex;
  margin-top: 12px;
  margin-bottom: 13px;

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

export const SCTriangle = styled.div`
  width: 10px;
  height: 8px;
  border-top: 8px solid ${({ theme }) => theme.color.lc02};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: 5px;
  padding-bottom: 2px;
`;

export const SCChat = styled.div`
  width: 70%;
  margin-left: 13px;
  position: relative;
`;

export const SCChatInnerContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  margin-bottom: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const SCChatText01 = styled.p`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc06};
  font-family: ${({ theme }) => theme.fmRegular};
  line-height: 1;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14}
  `}
`;

export const SCChatText02 = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  word-break: keep-all;
  word-wrap: break-word;
  line-height: 1.5;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12}
  `}
`;

export const SCEliminateBtn = styled.button`
  width: 101px;
  height: 34px;
  position: absolute;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc02};
  border: none;
  outline: none;
  padding: 0;
  background: linear-gradient(45deg, #333, #000);

  &:hover {
    cursor: pointer;
  }
`;
