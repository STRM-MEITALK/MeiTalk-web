import styled, { css } from 'styled-components';
import { IIsShow } from './ShareModalType';

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
  width: 474px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.modalBg};
  padding: 12px 12px 20px;
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

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc07};
  font-family: ${({ theme }) => theme.fmMedium};
`;

export const CloseBtn = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  cursor: pointer;
`;

export const IconList = styled.div`
  padding: 20px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 2%;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
`;

export const IconText = styled.p`
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs14};
`;

export const CopyBlock = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.modalCopy};
  border: 1px solid ${({ theme }) => theme.color.lc05};
  padding: 0 15px;
`;

export const LinkTextWrapper = styled.div`
  width: 80%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track:horizontal {
    background: ${({ theme }) => theme.color.modalCopy};
  }

  ::-webkit-scrollbar-thumb:horizontal {
    background: ${({ theme }) => theme.color.bg10};
  }
`;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs14};
`;

export const Copy = styled.a`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmMedium};
  cursor: pointer;
`;
