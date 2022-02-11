import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 198px;
  position: absolute;
  right: 7.5%;
  bottom: 75%;
  background: ${({ theme }) => theme.color.bg11};
  padding: 0 10px;
`;

export const Title = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fs18};
    color: ${theme.color.fc01};
  `}
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.ic36};
    height: ${theme.ic36};
  `}
`;

export const IconText = styled.div`
  margin-top: 5px;

  & + & {
    margin-top: 0;
  }

  ${({ theme }) => css`
    font-size: ${theme.fs16};
    color: ${theme.color.fc01};
  `}
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 86px;
  background: ${({ theme }) => theme.color.bg12};
  margin: 0 10px;
`;
