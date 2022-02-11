import styled, { css } from 'styled-components';
import { IProfileType } from './ProfileType';

export const Wrapper = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div<IProfileType>`
  cursor: pointer;
  overflow: hidden;
  background-color: #111;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.lc05};

  ${({ theme, type }) => css`
    width: ${theme[type]};
    height: ${theme[type]};
  `};

  ${({ theme, tType }) => theme.media.tablet`
    ${
      tType &&
      css`
        width: ${theme[tType]};
        height: ${theme[tType]};
      `
    }
  `};

  ${({ theme, mType }) => theme.media.mobile`
    ${
      mType &&
      css`
        width: ${theme[mType]};
        height: ${theme[mType]};
      `
    }
  `};
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Crown = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);

  ${({ theme }) => css`
    width: ${theme.ic24};
    height: ${theme.ic24};
  `};
`;
