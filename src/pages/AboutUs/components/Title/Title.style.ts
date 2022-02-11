import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 5;
`;

export const Title = styled.span`
  position: relative;
  z-index: 10;

  ${({ theme }) => css`
    font-family: ${theme.fmSBold};
    font-size: ${theme.fs140};
    color: ${theme.color.fc01};
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs46};
  `}
`;

export const ShadowTitleContainer = styled.div<{ left: number }>`
  position: absolute;
  top: -110px;
  display: flex;

  ${({ theme, left }) => css`
    font-family: ${theme.fmSBoldItalic};
    font-size: ${theme.fs160};
    color: ${theme.color.fc07};
    left: ${left}px;
  `};

  ${({ theme }) => theme.media.mobile`
    top: -35px;
    left: -15px;
  `}
`;

export const ShadowTitle = styled.span`
  white-space: pre;

  ${({ theme }) => css`
    font-family: ${theme.fmSBoldItalic};
    font-size: ${theme.fs160};
    color: ${theme.color.fc07};
  `};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs52};
  `}
`;
