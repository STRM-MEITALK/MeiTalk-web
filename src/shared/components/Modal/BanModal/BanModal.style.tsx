import styled, { css } from 'styled-components';
import { IIsShow } from './BanModalType';

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

  ${({ theme }) => theme.media.tablet`
      width: 90%;
  `};
`;

export const TopWrapper = styled.div`
  width: 80%;
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  text-align: center;
  line-height: 1.5;
`;

export const ContentsWrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
  margin: 0 auto 10px;
`;

export const Text02 = styled(Text)`
  white-space: pre-line;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
`;
