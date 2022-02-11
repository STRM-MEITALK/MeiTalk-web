import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.hsP};
  color: white;

  ${({ theme }) => theme.media.tablet`
    padding-top: ${theme.hsM};
  `};
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const StatusImg = styled.img`
  width: 30%;
`;

export const Text = styled.h1`
  font-size: ${({ theme }) => theme.fs36};
  font-family: ${({ theme }) => theme.fmLight};
  margin: 10px 0 40px;
`;
