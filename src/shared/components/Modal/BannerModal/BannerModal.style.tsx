import styled, { css } from 'styled-components';
import { IIsShow } from './BannerModalType';

export const Wrapper = styled.div<IIsShow>`
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

export const Modal = styled.div<IIsShow>`
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6% 0;
  height: 70%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmBold};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.mobile`
      width: 90%;
  `};
`;

export const DescriptionWrapper = styled.div`
  display: flex;
`;

export const DescriptionText = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  letter-spacing: -0.06px;
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12}
  `};
`;

export const DescriptionTitle = styled(DescriptionText)`
  color: ${({ theme }) => theme.color.fc01};
`;

export const DescriptionDetail = styled(DescriptionText)`
  flex: 1;
  /* white-space: pre-line; */
  white-space: nowrap;
  color: ${({ theme }) => theme.color.point};
`;

export const DescriptionAdditionalText = styled.div`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs12};
  letter-spacing: -0.06px;
`;

export const DescriptionAdditionalTitle = styled(DescriptionAdditionalText)`
  color: ${({ theme }) => theme.color.fc01};
`;

export const DescriptionAdditionalDetail = styled(DescriptionAdditionalText)`
  flex: 1;
  white-space: pre-line;
  color: ${({ theme }) => theme.color.point};
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-top: auto;
`;

export const PostBanner = styled.div`
  font-size: ${({ theme }) => theme.fs40};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc01};
`;

export const Label = styled.label`
  width: 90%;
  margin: 0 auto;
`;
