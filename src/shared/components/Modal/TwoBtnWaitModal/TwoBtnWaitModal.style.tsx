import styled, { css } from 'styled-components';
import { IIsShow, IScrollY } from './TwoBtnWaitModalType';

export const Wrapper = styled.div<IIsShow>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.modalW};
  z-index: 999;

  ${({ isShow }) =>
    !isShow &&
    css`
      visibility: hidden;
    `};
`;

export const Modal = styled.div<IIsShow & IScrollY>`
  width: 342px;
  height: auto;
  position: absolute;
  top: ${({ scrollY }) => `${scrollY + window.innerHeight / 2 - 191 / 2}px`};
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.color.modalMenuBg};
  padding: 20px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.modalSpeed};

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}

  ${({ theme }) => theme.media.tablet`
      width: 343px;
      height: 191px;
  `};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 6%;
  height: 70%;
`;

export const Contetns = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  margin-top: auto;
`;

export const Indicator = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
