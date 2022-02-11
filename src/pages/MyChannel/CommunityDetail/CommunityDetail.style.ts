import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.tablet`
    padding: 0 5%;
  `};
`;

export const CommunityHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0 3%;

  ${({ theme }) => theme.media.tablet`
     margin: 2% 0 5%;
  `};

  ${({ theme }) => theme.media.mobile`
    margin: 4% 0 8%;
  `};
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & > img {
    width: ${({ theme }) => theme.ic24};
  }

  & > p {
    color: ${({ theme }) => theme.color.point};
    font-size: ${({ theme }) => theme.fs18};
  }

  ${({ theme }) => theme.media.mobile`
    & > img {
      width: ${theme.ic18};
    }

    & > p {
      font-size: ${theme.fs14};
    }
  `};
`;

export const DetailContainer = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 4%;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 7%;
  `};
`;

export const DetailHeader = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelName = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  margin-left: 10px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const Content = styled.div`
  width: 100%;
  height: 70%;
  margin: 20px 0;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: pre-line;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const DetailFooter = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div > div {
    margin: 0 10px 0 0;
  }
`;

export const Editor = styled.textarea`
  width: 100%;
  height: 70%;
  min-height: 200px;
  margin: 20px 0;
  padding: 10px 15px;
  outline: none;
  resize: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};

  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;
