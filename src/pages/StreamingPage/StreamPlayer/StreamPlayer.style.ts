import styled, { css } from 'styled-components';

export const PlayerWrapper = styled.div<{ isFullScreen: boolean }>`
  overflow: hidden;
  padding-bottom: 56.2%;

  ${({ isFullScreen }) => css`
    ${isFullScreen
      ? css`
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        `
      : css`
          position: relative;
          width: 100%;
          height: 0;
        `}
  `}

  ${({ theme }) => theme.media.tablet`
    padding-bottom: 56.2%;
  `};
`;
