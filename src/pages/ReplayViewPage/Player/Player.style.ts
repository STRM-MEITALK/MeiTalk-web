import styled, { css } from 'styled-components';
import loading from '@images/loadingSpinner.png';

export const PlayerWrapper = styled.div<{ showComment: boolean; isFullScreen: boolean }>`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;

  ${({ showComment, isFullScreen }) =>
    showComment
      ? css`
          padding-bottom: 56.2%;
        `
      : css`
          padding-bottom: ${isFullScreen ? '56.2%' : '35%'};
        `};

  ${({ theme, isFullScreen }) => theme.media.tablet`
    padding-bottom: ${isFullScreen ? 0 : '56.2%'};
    height: 100%;
  `};
`;

export const Buffer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  background-image: url('${loading}');
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  ${({ theme }) => theme.media.mobile`
    width: 30px;
    height: 30px;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
  `};
`;
