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

export const TermsTitle = styled.div`
  font-size: ${({ theme }) => theme.fs46};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `}
`;

export const Title = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fs40};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `}
`;

export const SubTitle = styled(Title)`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fs32};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `}
`;

export const TextContainer = styled.div`
  width: 90%;
  padding: 3% 7%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 10%;
  ${({ theme }) => theme.media.tablet`
      width: 90%;
      padding: 3% 7%;
  `}
`;

export const Text = styled.div`
  width: 100%;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc04};
  line-height: 28.8px;
  white-space: pre-line;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
    line-height: 19.6px;
  `}
`;

export const Numbering = styled(Text)`
  width: fit-content;
  margin-right: 3px;
`;

export const NumberingContent = styled(Text)``;

export const Bold = styled(Text)`
  font-family: ${({ theme }) => theme.fmBold};
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const MarginWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  ${({ theme }) => theme.media.mobile`
    margin-left: 15px;
  `};
`;
