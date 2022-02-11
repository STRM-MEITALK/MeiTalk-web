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
