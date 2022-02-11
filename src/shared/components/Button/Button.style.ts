import styled, { css } from 'styled-components';
import { IButtonProps } from './ButtonType';

export const Wrapper = styled.div<IButtonProps>`
  display: flex;
  width: ${({ width }) => width};
  justify-content: center;
  box-sizing: border-box;
  user-select: none;
  margin: 0 auto;
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};

  ${({ theme, type, disable }) => {
    if (disable) {
      return css`
        background: ${theme.color.bg11};
        color: ${theme.color.fc05};
      `;
    } else if (type === 'primary') {
      return css`
        background: ${theme.color.point};
        color: ${theme.color.fc07};
      `;
    } else if (type === 'secondary') {
      return css`
        border: 1px ${theme.color.point} solid;
        color: ${theme.color.point};
      `;
    } else if (type === 'gray') {
      return css`
        background: ${theme.color.lc04};
        color: ${theme.color.fc02};
      `;
    } else {
      return '';
    }
  }};

  &:hover {
    ${({ theme, type, disable }) => {
      if (disable === false && type === 'primary') {
        return css`
          background: ${theme.color.bg06};
        `;
      } else if (disable === false && type === 'secondary') {
        return css`
          box-shadow: 0 0 6px 0 ${theme.color.point};
        `;
      } else {
        return '';
      }
    }};
  }
`;

export const Text = styled.h1<{ size?: string }>`
  padding: 9px 0;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 4px 0;
      font-size: ${({ theme }) => theme.fs14};
    `};
`;
