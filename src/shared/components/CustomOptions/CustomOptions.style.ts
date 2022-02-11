import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const Selected = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid ${({ theme }) => theme.color.lc09};
  border-bottom: 1px solid ${({ theme }) => theme.color.lc09};
  background-color: transparent;
  padding: 10px 15px;

  & > p {
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.color.point};
    font-family: ${({ theme }) => theme.fmRegular};
  }

  & > img {
    width: 10px;
  }
`;

export const OptionWrapper = styled.ul<{ customHeight: number }>`
  width: 100%;
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(30px);
  overflow-y: auto;

  ${({ customHeight }) =>
    customHeight > 0 &&
    css`
      height: ${customHeight}px;
    `};
`;

export const Option = styled.li`
  margin: 10px 15px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmRegular};
  text-shadow: 0 2px 5px ${({ theme }) => theme.color.ts01};
`;
