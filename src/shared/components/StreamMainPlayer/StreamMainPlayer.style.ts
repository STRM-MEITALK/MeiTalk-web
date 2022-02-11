import styled, { css } from 'styled-components';

export const Container = styled.div<{ thumbnail: null | string }>`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 57%;

  ${({ thumbnail }) =>
    thumbnail &&
    css`
      background-image: url('${thumbnail}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      display: flex;
      align-items: center;
      justify-content: center;
    `};

  .react-player__preview {
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`;

export const Gradient = styled.div<{ isMouseOver: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  ${({ isMouseOver }) =>
    !isMouseOver &&
    css`
      background-image: ${({ theme }) =>
        `linear-gradient(to bottom, ${theme.color.rgbaBg05} 55%, ${theme.color.bg17})`}; ;
    `};
  ${({ theme }) => theme.media.tablet`
    opacity:0;
  `};
`;
