import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 13px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    display: block;
    text-align: center;
  `};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 6px;

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
    margin-bottom: 5px;
  `};

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic20};
    height: ${theme.ic20};
  `};
`;

export const Text = styled.p`
  min-width: 12px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;
