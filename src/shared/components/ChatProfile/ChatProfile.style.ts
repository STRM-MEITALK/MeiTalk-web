import styled, { css } from 'styled-components';

export const SCChatImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SCChatImg = styled.img`
  width: ${({ theme }) => theme.ps36};
  height: ${({ theme }) => theme.ps36};
  border: 1px solid ${({ theme }) => theme.color.lc05};
  border-radius: 50%;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ps20};
    height: ${theme.ps20};
  `}
`;

export const SCCrown = styled.img`
  position: absolute;
  top: -17px;
  ${({ theme }) => css`
    width: ${theme.ic24};
    height: ${theme.ic24};
  `}
`;
