import styled, { css } from 'styled-components';
import { IisIdFocus, IisPwFocus } from './LoginType';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs46};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  margin-bottom: 2%;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
    margin-bottom: 7%;
  `}
`;

export const BottomWrapper = styled.div`
  width: 40%;
  padding: 3% 7%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bg05};

  ${({ theme }) => theme.media.tablet`
     width: 90%;
     padding: 8% 7%;
  `}
`;

export const InputContainer = styled.div`
  /* display: flex;
  background-color: red;
  justify-content: center; */
  width: 100%;
  margin-bottom: 10%;
  flex-direction: column;
`;

export const PwWrapper = styled.div<IisPwFocus>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.bg05};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.lc07};

  width: 100%;
  height: 40px;
  justify-content: space-between;

  ${({ checkPw }) =>
    checkPw &&
    css`
      border-color: ${({ theme }) => theme.red};
    `}
`;

export const PwIcon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic24};
    height: ${theme.ic24};
  `};
`;

export const InputTitle = styled.p`
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc02};
  margin-bottom: 2%;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `}
`;

export const Warning = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.red};
  margin-top: 2%;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10};
  `}
`;

export const WarningIcon = styled.img`
  width: ${({ theme }) => theme.ic13};
  height: ${({ theme }) => theme.ic13};
  margin-right: 5px;
  margin-top: 1px;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic11};
    height: ${theme.ic11};
  `};
`;

export const Input = styled.input<IisIdFocus>`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  background-color: ${({ theme }) => theme.color.bg05};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.lc07};
  padding: 2.5%;
  ::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
  outline: none;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}

  ${({ checkId }) =>
    checkId &&
    css`
      border-color: ${({ theme }) => theme.red};
    `}
`;

export const PwInput = styled.input`
  width: 90%;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  background-color: ${({ theme }) => theme.color.bg05};
  border: 0;
  padding: 2.5%;
  ::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
  outline: none;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.point};
  border: 0;
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.bg06};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignupBtn = styled.p`
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.point};
  margin: 3% 0;
  width: 100%;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `}
`;

export const SocialBtnTitle = styled.p`
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc04};
  margin: 15% 0 5% 0;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}
`;

export const SocialBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20% 5% 20%;

  ${({ theme }) => theme.media.tablet`
    margin: 0 10% 5% 10%;
  `};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic30};
  height: ${({ theme }) => theme.ic30};
  margin-right: 5px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
  `};
`;
