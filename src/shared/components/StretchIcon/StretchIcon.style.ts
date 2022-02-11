import styled, { css } from 'styled-components';

export const Container = styled.div<{ isShow: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  justify-content: right;
  transition: 0.2s;

  ${({ isShow }) =>
    isShow
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`;

export const ShareItemBlockWrapper = styled.div<{ isHoverShare: boolean }>`
  width: 24px;
  overflow: hidden;
  margin-left: auto;
  transition: width 0.2s;

  &:first-child {
    margin-bottom: 5px;
  }

  ${({ isHoverShare }) =>
    isHoverShare &&
    css`
      width: 100px;
    `};
`;

export const ShareItemBlock = styled.div`
  width: 100px;
  position: relative;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.stretch};
`;

export const SaveItemBlockWrapper = styled.div<{ isHoverSave: boolean }>`
  width: 24px;
  overflow: hidden;
  margin-left: auto;
  transition: width 0.2s;

  &:first-child {
    margin-bottom: 5px;
  }

  ${({ isHoverSave }) =>
    isHoverSave &&
    css`
      width: 100px;
      & > div {
        right: 0;
      }
    `};
`;

export const SaveItemBlock = styled.div`
  width: 100px;
  position: relative;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.stretch};
`;

export const IconText = styled.p`
  font-size: ${({ theme }) => theme.fs10};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  line-height: 19px;
  padding: 5px;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
`;
