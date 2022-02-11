import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 15px 0;

  & > div:first-child {
    margin-top: 5px;

    ${({ theme }) => theme.media.tablet`
      margin-top: 0;
    `};
  }
`;

export const AccountName = styled.p`
  color: ${({ theme }) => theme.color.fc06};
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const ReplyDate = styled.p`
  color: ${({ theme }) => theme.color.fc06};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs12};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReplyText = styled.p<{ isDeleted: boolean }>`
  margin: 4px 0 10px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  word-break: break-word;
  white-space: pre-line;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    line-height: 19px;
  `};

  ${({ isDeleted, theme }) =>
    isDeleted &&
    css`
      color: ${theme.color.fc09};
    `};
`;

export const ReplyInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ReplyImg = styled.img`
  width: ${({ theme }) => theme.ic20};
  height: ${({ theme }) => theme.ic20};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
  width: ${theme.ic16};
  height: ${theme.ic16};
`};
`;

export const CntText = styled.p`
  margin-left: 4px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmMedium};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    font-family: ${theme.fmLight};
  `};
`;

export const ReplyBlock = styled.div`
  width: 85%;
  margin-left: 5px;

  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 80%;
  `};
`;

export const More = styled.div`
  position: relative;
`;

export const MoreWrapper = styled.div`
  min-width: 70px;
  position: absolute;
  top: 0;
  transform: translate(-100%, 0);
  padding: 5px 0;
  background-color: ${({ theme }) => theme.color.background};
`;

export const MoreBtn = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc01};
  padding: 6px 15px;
  cursor: pointer;
`;

export const EditBox = styled.div`
  width: 100%;
  padding: 12px 15px 10px;
  margin-bottom: 13px;
  background-color: ${({ theme }) => theme.color.bg03};
  border: 1px solid ${({ theme }) => theme.color.lc03};
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  resize: none;
  outline: none;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs12};
`;

export const EditBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const EditBtn = styled.p<{ type?: string }>`
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc04};

  ${({ theme, type }) =>
    type === 'U' &&
    css`
      color: ${theme.color.point};
    `};
  cursor: pointer;
`;
