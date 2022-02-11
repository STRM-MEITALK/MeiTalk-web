import styled, { css } from 'styled-components';
import { IIsShow } from './ErrorModalType';

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
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningIcon = styled.img`
  width: ${({ theme }) => theme.ic55};
  height: ${({ theme }) => theme.ic55};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  margin-top: 20px;
  text-align: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10%;
  margin-bottom: 40px;
`;

export const Contents = styled.h1`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  text-align: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  margin-bottom: auto;
`;
