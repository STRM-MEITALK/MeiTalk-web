import styled, { css } from 'styled-components';
import { IIsShow } from './TwoBtnModalType';

export const Wrapper = styled.div<IIsShow>`
  position: fixed;
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

export const Modal = styled.div<IIsShow>`
  width: 343px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.modalMenuBg};
  padding: 20px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.modalSpeed};

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}

  ${({ theme }) => theme.media.mobile`
      width: 90%;
  `};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 10%;

  height: 70%;
`;

export const Contetns = styled.h1`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  white-space: pre-line;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  margin-top: auto;
`;
