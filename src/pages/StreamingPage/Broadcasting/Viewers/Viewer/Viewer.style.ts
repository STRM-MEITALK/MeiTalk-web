import styled from 'styled-components';

export const SCUser = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  & + & {
    margin-top: 22px;
  }
`;

export const SCCheck = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const SCImg = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 10px;
  border: 1px solid ${({ theme }) => theme.color.lc05};
  border-radius: 50%;
`;

export const SCText = styled.p`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc02};
  margin-left: 10px;
`;
