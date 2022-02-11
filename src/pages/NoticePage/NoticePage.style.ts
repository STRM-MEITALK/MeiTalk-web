import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.tablet`
    padding:${theme.hsM} 0;
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.tablet`
      width: 95%;
  `};
`;

export const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 3% 0;
  margin-bottom: 3%;
  background: ${({ theme }) => theme.color.bg05};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs46};
  font-family: ${({ theme }) => theme.fmMedium};
  color: ${({ theme }) => theme.color.fc01};
  margin-bottom: 44px;
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs18};
  `};
`;

export const CategoryTitle = styled.h1`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fs24};
  font-family: ${({ theme }) => theme.fmSBold};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs16};
      margin-bottom: 20px;
  `};
`;

export const CategorySubTitle = styled.h1`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmMedium};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs14};
  `};
`;
