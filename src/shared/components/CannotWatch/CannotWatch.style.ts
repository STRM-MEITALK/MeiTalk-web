import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.mobile`
    padding: ${theme.hsM} 0;
  `};
`;

export const Wrapper = styled.div`
  width: 660px;
  padding: 50px;
  background-color: ${({ theme }) => theme.color.bg07};
  text-align: center;

  ${({ theme }) => theme.media.mobile`
    width: 90%;
    padding: 40px 20px;
  `};
`;

export const Icon = styled.img`
  width: 110px;
  height: 110px;

  ${({ theme }) => theme.media.mobile`
    width: 55px;
    height: 55px;
  `};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs28};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  margin: 30px auto;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `};
`;

export const Msg = styled.p`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc02};
  font-family: ${({ theme }) => theme.fmLight};
  margin: 30px auto;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const ButtonWrapper = styled.div`
  width: 390px;
  margin: 0 auto;

  ${({ theme }) => theme.media.mobile`
    width:100%;
  `};
`;
