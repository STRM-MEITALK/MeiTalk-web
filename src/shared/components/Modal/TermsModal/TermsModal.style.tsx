import styled, { css } from 'styled-components';
import { IIsShow, IScrollY } from './TermsModalType';

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
  width: 343px;
  height: 401px;
  position: absolute;
  top: ${({ scrollY }) => `${scrollY + window.innerHeight / 2 - 401 / 2}px`};
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${({ theme }) => theme.color.modalMenuBg};
  padding: 20px 0px 20px 20px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.modalSpeed};

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}

  ${({ theme }) => theme.media.tablet`
     width: 343px;
  height: 401px;
  `};
`;

export const CloaseWrapper = styled.div`
  padding-right: 20px;
`;
export const CloseBtn = styled.img`
  display: block;
  margin-left: auto;
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 20px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
`;

export const ContentsWrapper = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: center;

  height: 90%;
  padding: 7% 3% 10%;
`;

export const Contents = styled.div`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};

  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 6px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.color.bg16};
  }
`;
