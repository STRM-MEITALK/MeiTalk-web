import styled from 'styled-components';

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
  margin-right: 20px;
  ${({ theme }) => theme.media.mobile`
      width: ${theme.ic24};
      height: ${theme.ic24};
  `};
  cursor: pointer;
  user-select: none;
`;
