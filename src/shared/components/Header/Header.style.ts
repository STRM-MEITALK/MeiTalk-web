import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isBackground: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${({ theme }) => theme.hsP};
  ${({ theme, isBackground }) =>
    isBackground
      ? css`
          background: ${theme.color.background};
        `
      : css`
          background: none;
        `};
  ${({ theme }) => theme.media.tablet`
    height: ${theme.hsM};
    padding: 0;
  `};
`;

export const Block = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet`
    width: 95%;
  `};
`;

export const LogoImage = styled.img`
  width: 117px;
  ${({ theme }) => theme.media.tablet`
    margin-left: 17px;
    width: 87px;
  `};
  cursor: pointer;
  user-select: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 5px;
  `};
`;

export const ImageWrapperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.media.tablet`
    padding: 10px;
  `};
`;

export const SearchImage = styled.img`
  width: ${({ theme }) => theme.ic36};
  height: ${({ theme }) => theme.ic36};
  ${({ theme }) => theme.media.tablet`
      width: ${theme.ic30};
      height: ${theme.ic30};
  `};
  cursor: pointer;
  user-select: none;
`;

export const MenuImage = styled.img`
  width: ${({ theme }) => theme.ic36};
  height: ${({ theme }) => theme.ic36};
  ${({ theme }) => theme.media.tablet`
      width: ${theme.ic30};
      height: ${theme.ic30};
  `};
  cursor: pointer;
  user-select: none;
`;
