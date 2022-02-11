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

export const SCContainer = styled.div<{ isShowChat: boolean }>`
  width: 335px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 50px;
  display: flex;
  flex-direction: column;
  padding-top: 10%;

  ${({ isShowChat }) =>
    !isShowChat &&
    css`
      opacity: 0;
    `}

  ${({ theme }) => theme.media.tablet`
    width: 40%;
    right: 0;
  `}

  ${({ theme }) => theme.media.mobile`
    width: 50%;
    padding-top: 5%;
  `}
`;

export const SCChatsContainer = styled.div`
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet`
    height: 90%;
  `}
`;

export const SCChats = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
