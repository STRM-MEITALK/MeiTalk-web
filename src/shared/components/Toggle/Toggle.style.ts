import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.modalMenuBg};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  transition: background 0.5s;
  overflow: hidden;
`;

export const On = styled.div<{ isToggle: boolean }>`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.point};
  margin-left: 10px;
  transition: 0.5s;
  line-height: 0;
  ${({ isToggle }) =>
    isToggle
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const Off = styled.div<{ isToggle: boolean }>`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc06};
  margin-right: 10px;
  transition: 0.5s;
  line-height: 0;
  ${({ isToggle }) =>
    isToggle
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

export const Circle = styled.div<{ isToggle: boolean }>`
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: black;
  border-radius: 50%;
  left: 5%;
  transition: left 0.5s;
  ${({ theme, isToggle }) =>
    isToggle
      ? css`
          left: 61%;
          background-color: ${theme.color.point};
        `
      : css`
          background-color: ${theme.color.bg08};
        `}
`;
