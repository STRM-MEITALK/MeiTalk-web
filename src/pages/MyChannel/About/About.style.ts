import styled, { css } from 'styled-components';
import { IButtonProps } from '@components/Button/ButtonType';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const Header = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc01};
  width: 80%;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs18};
      width: 100%;
      padding: 0 16px;
  `}
`;

export const Block = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
      margin-bottom: 14px;
      width: 100%;
      padding: 0 16px;
  `}
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EditBtn = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.mobile`
      width: ${theme.ic14};
      height: ${theme.ic14};
  `}
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  height: 378px;
  padding: 12px 15px;
  margin: 24px 0;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  resize: none;
  background: none;
  outline: none;
  text-decoration: none;

  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};

  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.tablet`
      height: 114px;
      font-size: ${theme.fs14};
      margin-top: 14px;
  `}
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  line-height: 19px;
  display: flex;
  min-width: 12%;
  padding-right: 30px;

  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs16};
      min-width: 35%;
  `}
`;

export const Content = styled.div`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  line-height: 19px;

  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs14};
  `}
`;

export const Description = styled.div`
  width: 100%;
  word-break: break-all;
  white-space: pre-line;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  line-height: 19px;
  margin-top: 40px;
  margin-left: 10px;

  ::placeholder {
    font-family: ${({ theme }) => theme.fmLight};
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs14};
      margin-top: 20px;
      margin-bottom: 30%;
      margin-left: 0;
      padding: 0 10px;
  `}
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
      justify-content: center;
      margin-bottom: 30%;
  `}
`;

export const Button = styled.div<IButtonProps>`
  display: flex;
  width: 7%;
  height: 30px;
  justify-content: center;
  box-sizing: border-box;
  user-select: none;
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
  margin-right: 2%;

  ${({ theme, type, disable }) => {
    if (disable) {
      return css`
        background: ${theme.color.bg11};
        color: ${theme.color.fc05};
      `;
    } else if (type === 'primary') {
      return css`
        background: ${theme.color.point};
        color: ${theme.color.fc07};
      `;
    } else if (type === 'secondary') {
      return css`
        border: 1px ${theme.color.point} solid;
        color: ${theme.color.point};
      `;
    } else if (type === 'gray') {
      return css`
        background: ${theme.color.lc04};
        color: ${theme.color.fc02};
      `;
    } else {
      return '';
    }
  }};

  &:hover {
    ${({ theme, type, disable }) => {
      if (disable === false && type === 'primary') {
        return css`
          background: ${theme.color.bg06};
        `;
      } else if (disable === false && type === 'secondary') {
        return css`
          box-shadow: 0 0 6px 0 ${theme.color.point};
        `;
      } else {
        return '';
      }
    }};
  }

  ${({ theme }) => theme.media.tablet`
      width: 25%;
  `}
`;

export const BtnText = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs14};
  line-height: 28px;
`;
