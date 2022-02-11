import styled, { css } from 'styled-components';
import { IisFocus, ICommentHeightType } from './CommentType';

export const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.bg01};

  ${({ theme }) => theme.media.tablet`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `};
`;

export const Header = styled.div`
  width: 100%;
  height: 8%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  text-align: center;
  background: ${({ theme }) => theme.color.bg02};

  ${({ theme }) => theme.media.tablet`
    height: 48px;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommentCount = styled.p`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc02};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    margin-left: 10px;
    font-size: ${theme.fs12};
  `}
`;

export const HeaderBtn = styled.button`
  width: ${({ theme }) => theme.ic18};
  height: ${({ theme }) => theme.ic18};
  position: absolute;
  right: 20px;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CommentContainer = styled.div<ICommentHeightType>`
  height: 78%;
  position: absolute;
  top: 8%;
  bottom: 17%;
  left: 0;
  right: 0;
  padding: 6% 4px 6% 0;
  overflow-x: hidden;
  overflow-y: auto;

  ${({ theme, commentHeight }) => theme.media.tablet`
    height: ${commentHeight ? commentHeight - 126 : commentHeight}px;
    position: relative;
    top: 0;
    bottom: 0;
    padding: 3% 4px 3% 0;
  `};

  ${({ theme }) => theme.media.mobile`
    padding: 6% 4px 6% 0;
  `};
`;

export const NoCommentContainer = styled.div<ICommentHeightType>`
  height: 78%;
  position: absolute;
  top: 8%;
  bottom: 17%;
  left: 0;
  right: 0;
  padding-right: 4px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, commentHeight }) => theme.media.tablet`
  height: ${commentHeight ? commentHeight - 126 : commentHeight}px;
  position: relative;
  top: 0;
  bottom: 0;
`};
`;

export const NoComment = styled.p`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc06};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const CommentList = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 14%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.bg02};

  ${({ theme }) => theme.media.tablet`
    position: relative;
    height: 78px;
  `}
`;

export const SubmitContainer = styled.div<IisFocus>`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 9px 15px 8px;
  background: ${({ theme }) => theme.color.bg02};
  border: 1px solid ${({ theme }) => theme.color.lc08};

  ${({ isFocus }) =>
    isFocus &&
    css`
      background: ${({ theme }) => theme.color.bg03};
      border: 1px solid ${({ theme }) => theme.color.lc03};

      & > input {
        &::placeholder {
          color: ${({ theme }) => theme.color.ph03};
        }
      }

      & > button {
        color: ${({ theme }) => theme.color.fc04};
      }
    `}

  ${({ theme }) => theme.media.tablet`
    width: 85%;
  `}
`;

export const Input = styled.input`
  width: 85%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};

  ::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.mobile`
    width: 80%;
    font-size: ${theme.fs14}
  `}
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc08};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14}
  `}
`;
