import styled, { css } from 'styled-components';

export const Container = styled.div<{ showEditor: boolean }>`
  width: 100%;
  padding: 20px;
  margin-bottom: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.lc07};

  ${({ theme, showEditor }) =>
    showEditor &&
    css`
      background-color: ${theme.color.bg05};
    `};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    margin-bottom: 5%;
  `};
`;

export const CommunityHeader = styled.div`
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
  white-space: pre-line;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommunityFooter = styled.div`
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

  ${({ theme }) => theme.media.tablet`
    min-height: 150px;
  `};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CommentImage = styled.img`
  width: ${({ theme }) => theme.ic20};
`;

export const CommentCount = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  margin-left: 5px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs14};
  `};
`;
