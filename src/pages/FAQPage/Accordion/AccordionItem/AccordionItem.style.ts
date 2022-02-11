import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.color.bg05};
`;

export const TitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px ${({ theme }) => theme.color.lc03} solid;
  padding: 0 10px;
  color: ${({ theme }) => theme.color.fc01};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.fc01};
  }
`;

export const Title = styled.h1<{ isOpen?: boolean }>`
  padding: 20px 0;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme, isOpen }) => (isOpen ? theme.color.point : theme.color.fc01)};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs14};
  `};
`;

export const DescriptionWrapper = styled.div<{ isOpen: boolean }>`
  width: inherit;
  height: 0;
  overflow: hidden;
  opacity: 0;
  background: ${({ theme }) => theme.color.background};
  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      border-bottom: 2px ${theme.color.lc03} solid;
    `}
  transition: all 0.35s ease;
`;

export const Description = styled.h1`
  padding: 20px;
  white-space: pre-line;
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc04};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs12};
  `};
`;

export const ArrowImage = styled.img`
  width: 10px;
  height: 6px;
`;
