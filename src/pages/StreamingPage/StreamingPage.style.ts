import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOnboarding: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: ${({ theme }) => theme.hsP} 0;
  ${({ isOnboarding }) =>
    isOnboarding &&
    css`
      padding-bottom: 0;
    `}
  ${({ theme, isOnboarding }) => theme.media.tablet`
      padding: ${theme.hsM} 0;
      ${
        isOnboarding &&
        css`
          padding-bottom: 0;
        `
      }
  `};
`;
