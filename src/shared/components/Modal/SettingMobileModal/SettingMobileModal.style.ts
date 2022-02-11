import styled, { css } from 'styled-components';

export const SettingModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background-color: ${({ theme }) => theme.color.modalW};
  z-index: 999;

  ${({ theme }) => theme.media.tablet`
      display: block;
    `};
`;

export const Modal = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${({ theme }) => theme.color.modalMenuBg};

  ${({ theme }) => theme.media.landscape`
    width: 50%;
    padding: 25px 30px;
  `};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  text-align: center;
  margin: 20px 0 30px;

  ${({ theme }) => theme.media.landscape`
    margin: 10px 0 20px;
  `};
`;

export const Content = styled.div`
  margin-bottom: 30px;

  ${({ theme }) => theme.media.landscape`
    height: 150px;
    overflow-y: auto;
  `};
`;

export const OptionWrapper = styled.div`
  margin-bottom: 30px;

  & li {
    font-size: ${({ theme }) => theme.fs14};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.media.landscape`
    margin-bottom: 20px;
  `};
`;

export const OptionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  margin-bottom: 10px;
`;
