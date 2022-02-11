import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Flex = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const DataWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;
  background: ${({ theme }) => theme.color.bg05};

  ${({ theme }) => theme.media.tablet`
    width: 90%;
    margin-top: 40px;
    padding: 6% 0;
  `};
`;

export const DataTextWrapper = styled.div<{ isBottom?: boolean }>`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ isBottom }) =>
    isBottom &&
    css`
      margin-top: 20px;
    `};

  ${({ theme, isBottom }) => theme.media.tablet`
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
  `};
`;

export const DataTitle = styled.h1`
  width: 25%;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc02};

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-bottom: 10px;
  `};
`;

export const DataContentWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const DataContent = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc02};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10};
  `};
`;

export const CopyImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CopyItem = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
`;

export const VisibleIcon = styled(CopyItem)`
  margin-left: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;

  ${({ theme }) => theme.media.tablet`
    width: 80%;
    margin-top: 20%;
    text-align: center;
  `};
`;

export const ContentTitle = styled.h1`
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs46};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs20};
  `};
`;

export const ContentWrapper = styled.div`
  width: 600px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `};
`;

export const ExplanationText = styled.h1`
  margin-top: 60px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
    margin-top: 14%;
    font-size: ${theme.fs14};
  `};

  & > a {
    color: ${({ theme }) => theme.color.point};
    text-decoration: underline;
  }
`;

export const ExplanationImg = styled.img`
  width: 600px;
  height: 463px;
  margin-top: 30px;
  ${({ theme }) => theme.media.tablet`
    width: 100%;
    height: auto;  
  `};
`;

export const ButtonWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  text-align: center;
  padding: 19px 0 16px 0;
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs32};
  color: ${({ theme }) => theme.color.fc07};
  background: ${({ theme }) => theme.color.point};

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs20};
    padding: 10px 0 7px 0;
  `};
`;
