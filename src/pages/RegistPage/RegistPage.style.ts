import styled, { css } from 'styled-components';
import { IisNameFocus, IisInputFocus, IisPwInputFocus } from './RegistType';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs46};
  font-family: ${({ theme }) => theme.fmMedium};
  color: ${({ theme }) => theme.color.fc01};
  margin-bottom: 2%;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
    margin-top: 2%;
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

export const InputTitle = styled.p`
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc02};
  margin-bottom: 1.5%;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const PwWrapper = styled.div<IisPwInputFocus>`
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

export const Input = styled.input<IisInputFocus>`
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

  ::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}

  ${({ checkPhone }) =>
    checkPhone &&
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

export const InputName = styled.input<IisNameFocus>`
  width: 48%;
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

  ${({ checkName }) =>
    checkName &&
    css`
      border-color: ${({ theme }) => theme.red};
    `}
`;

export const NameContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SelectBox = styled.select`
  width: 291px;
  height: 35px;
  font-size: 15px;
  margin-bottom: 3px;
  background-color: ${({ theme }) => theme.color.bg15};
  border: 0;
`;

export const GuideWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bg11};
  padding: 3% 5%;
  flex-direction: column;
  margin-bottom: 5%;

  ${({ theme }) => theme.media.tablet`
      padding: 4% 8%;
  `}
`;

export const GuideTitle = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc03};
  margin-bottom: 8px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}
`;

export const GuideInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GuideInfoTab = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc03};
  margin-right: 5px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `}
`;

export const GuideInfo = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc04};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `}
`;

export const TermsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TermsInfoWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10%;
`;

export const TermsInfo = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc04};
  margin-right: 5px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `}
`;

export const TermsInfoPoint = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.point};
  cursor: pointer;
  margin-right: 5px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `}
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 3%;
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

export const ButtonSignIn = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.bg05};
  border: 1px solid ${({ theme }) => theme.color.point};
  color: ${({ theme }) => theme.color.point};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px 0 ${({ theme }) => theme.color.point};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Warning = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.red};
  margin-top: 1%;

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

export const CheckIcon = styled.img`
  width: ${({ theme }) => theme.ic20};
  height: ${({ theme }) => theme.ic20};
  margin-right: 3%;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic20};
    height: ${theme.ic20};
  `};
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

export const CountryImg = styled.img`
  width: ${({ theme }) => theme.ic26};
  height: ${({ theme }) => theme.ic18};
  margin-right: 10px;
  margin-top: auto;
`;
