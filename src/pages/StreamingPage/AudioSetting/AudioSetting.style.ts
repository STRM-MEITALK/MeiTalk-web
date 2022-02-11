import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
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

export const MicImage = styled.img`
  width: 48px;
  height: 48px;
  user-select: none;
  margin: 100px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 47%;
`;
