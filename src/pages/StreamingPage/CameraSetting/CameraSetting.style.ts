import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 2% 0;
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs46};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs22};
  `};
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  background: ${({ theme }) => theme.color.bg05};
  padding: 5% 0;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 390px;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `};
`;

export const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;
