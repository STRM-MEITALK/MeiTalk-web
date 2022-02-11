import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5% 7%;
`;

export const CommentBlock = styled.div`
  width: ${({ theme }) => `calc(100% - ${theme.ps36} - 13px)`};
  margin-left: 13px;

  ${({ theme }) => theme.media.tablet`
    width: 90%;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 84%;
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccountName = styled.p`
  color: ${({ theme }) => theme.color.fc06};
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommentDate = styled.p`
  color: ${({ theme }) => theme.color.fc06};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs12};
`;

export const CommentText = styled.p<{ isDeleted: boolean }>`
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

export const ReplyButton = styled.input`
  margin-right: 11px;
  padding: 2px 9px 3px 10px;
  text-align: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.lc06};
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmLight};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    padding: 1px 6px 2px 7px;
    font-size: ${theme.fs10};
    border: 1px solid ${theme.color.lc03};
  `};
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentImg = styled.img`
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
  margin-right: 10px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};

  &.report {
    margin-right: 0;
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const ReplyInputContent = styled.div`
  text-align: right;
`;

export const ReplyInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0;
  padding: 7px 15px 8px;
  border: 1px solid ${({ theme }) => theme.color.lc03};
  background-color: ${({ theme }) => theme.color.bg03};

  ${({ theme }) => theme.media.mobile`
    padding: 6px 15px;
  `};
`;

export const ReplyInput = styled.input`
  width: -webkit-fill-available;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.fc05};
  font-size: ${({ theme }) => theme.fs12};
  outline: none;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};

  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.mobile`
    max-width: 80%;
    font-size: ${theme.fs11};
  `};
`;

export const ReplyBtn = styled.input`
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs12};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs11};
  `};
`;

export const CancelButton = styled.input`
  padding: 4px 11px 3px 12px;
  text-align: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.lc06};
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmMedium};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    padding: 2px 5px 1px 6px;
    font-family: ${theme.fmLight};
    font-size: ${theme.fs10};
  `};
`;

export const ReplyWrapper = styled.div``;

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
