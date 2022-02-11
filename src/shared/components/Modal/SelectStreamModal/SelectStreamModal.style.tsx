import styled, { css } from 'styled-components';
import { IIsShow, IScrollY, IIsSelected } from './SelectStreamModalType';

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
  height: 332px;
  position: absolute;
  top: ${({ scrollY }) => `${scrollY + window.innerHeight / 2 - 332 / 2}px`};
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

  ${({ theme }) => theme.media.mobile`
      width: 256px;
      height: 270px;
  `};
`;

export const CloaseWrapper = styled.div``;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const CloseBtn = styled.img`
  display: block;
  margin-left: auto;
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  cursor: pointer;
`;

export const SelectButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 30px;
  ${({ theme }) => theme.media.mobile`
    margin-bottom: 24px;

  `};
`;

export const SelectButton = styled.div<IIsSelected>`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 130px;
  border: 1px ${({ theme, isSelected }) => (isSelected ? theme.color.point : theme.color.lc04)} solid;
  ${({ theme }) => theme.media.mobile`
    width: 100px;
    height: 100px;
  `};
`;

export const SelectButtonImage = styled.img`
  margin: 0 auto;
  margin-top: 30px;
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
  ${({ theme }) => theme.media.mobile`
      margin-top: 20px;
      width: ${theme.ic36};
      height: ${theme.ic36};
  `};
`;

export const SelectButtonText = styled.h1<IIsSelected>`
  margin-top: 12px;
  text-align: center;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.point : theme.color.fc01)};
  ${({ theme }) => theme.media.mobile`
      margin-top: 8px;
      font-size: ${theme.fs12};
  `};
`;
