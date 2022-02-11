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
  height: 10%;
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
  height: 90%;
  position: absolute;
  top: 10%;
  bottom: 17%;
  left: 0;
  right: 0;
  padding-right: 4px;
  overflow-x: hidden;
  overflow-y: auto;

  ${({ theme, commentHeight }) => theme.media.tablet`
      height: ${commentHeight ? commentHeight - 90 : commentHeight}px;
      position: relative;
      top: 0;
      bottom: 0;
  `};
`;

export const CommentList = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  background: ${({ theme }) => `linear-gradient(${theme.color.bg05} 0%, ${theme.color.rgbaBg01})`};

  ${({ theme }) => theme.media.tablet`
    height: 38px;
  `}
`;

export const CommentNoList = styled.div`
  /* width: 100%; */
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.tablet`
      min-height: 290px;
  `}
`;
