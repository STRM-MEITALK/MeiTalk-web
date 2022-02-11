import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isShow: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.modalW};
  z-index: 999;

  ${({ isShow }) =>
    !isShow &&
    css`
      visibility: hidden;
    `};
`;

export const Modal = styled.div<{ isShow: boolean }>`
  width: 343px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.modalMenuBg};
  padding: 20px;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.modalSpeed};

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `}

  ${({ theme }) => theme.media.mobile`
      width: 90%;
  `};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10% 0;
  height: 70%;
`;

export const Contetns = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  white-space: pre-line;
  line-height: normal;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
`;

export const Image = styled.img`
  width: 90px;
  margin-bottom: 30px;
`;
