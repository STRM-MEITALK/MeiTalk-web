import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3% 0;
`;

export const CommentTitle = styled.h1`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs18};
  padding-left: 1%;

  ${({ theme }) => theme.media.tablet`
    padding-left: 5%;
  `};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `};
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  margin: 20px 0 50px;
  padding: 8px 15px;

  & > input {
    width: -webkit-fill-available;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color.fc01};
    font-size: ${({ theme }) => theme.fs16};
    font-family: ${({ theme }) => theme.fmLight};

    &::placeholder {
      color: ${({ theme }) => theme.color.ph01};
    }

    ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs14};
    `};
  }

  & > p {
    color: ${({ theme }) => theme.color.fc04};
    font-size: ${({ theme }) => theme.fs18};
    margin-left: 20px;
    cursor: pointer;

    ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs16};
    `};
  }
`;

export const NoCommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4% 0;

  ${({ theme }) => theme.media.tablet`
    padding: 2% 0 10%;
  `};

  ${({ theme }) => theme.media.mobile`
    padding: 0 0 20%;
  `};
`;

export const NoComment = styled.p`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc04};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommentList = styled.div`
  .infinite {
    overflow: visible !important;
  }
`;
