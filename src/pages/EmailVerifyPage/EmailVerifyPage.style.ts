import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};
`;

export const ContentsWrapper = styled.div`
  width: 35%;
  padding: 3% 5%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bg05};

  ${({ theme }) => theme.media.tablet`
     width: 90%;
     padding: 8% 7%;
  `}
`;

export const TopWrapper = styled.div`
  width: 100%;
  padding: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningIcon = styled.img`
  width: ${({ theme }) => theme.ic110};
  height: ${({ theme }) => theme.ic110};

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic55};
    height: ${theme.ic55};
  `};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs28};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  margin: 7% 0;
  text-align: center;

  ${({ theme }) => theme.media.tablet`
      margin-bottom: 7%;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `}
`;

export const Contents = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc02};
  line-height: 31px;
  margin-bottom: 7%;
  text-align: center;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    line-height: 19.6px;
  `}
`;

export const HighLightContents = styled.span`
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.point};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100%;
  padding: 2%;
  background-color: ${({ theme }) => theme.color.point};
  border: 0;
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
`;
