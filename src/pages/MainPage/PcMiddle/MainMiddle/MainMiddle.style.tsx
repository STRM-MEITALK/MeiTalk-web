/* eslint-disable no-nested-ternary */

import styled, { css } from 'styled-components';
import Next from '@images/next.png';
import Pre from '@images/pre.png';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  margin: 5% 0;
  padding: 0 10%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LeftCotainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fs60};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
`;

export const TitleImgDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const TitleImg = styled.img`
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
`;

export const SubTitleWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const SubTitleImgDiv = styled.div`
  padding-left: 2%;
  padding-right: 14px;
`;

export const SubTitleRightWrapper = styled.div`
  width: 80%;
`;

export const SubTitleRightTopWrapper = styled.div`
  width: 80%;
  display: inline-block;
  justify-content: space-between;
  overflow: hidden;
`;

export const SubTitleRightBoottomWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
`;

export const SubTitleRightTopFirstText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
`;

export const SubTitleRightTopSecondText = styled.p`
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const SubTitleRightBottomFirstText = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;

  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  padding-right: 4%;
  align-items: center;
`;

export const SubTitleRightBottomSecondWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 4%;
`;

export const SubTitleRightBottomSecondImg = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
`;

export const SubTitleRightBottomSecondText = styled.p`
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
  padding-right: 4%;
`;

export const SubTitleRightBottomthirdText = styled.p`
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc04};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const RightContainer = styled.div`
  position: relative;
  z-index: 3;

  width: 52%;
  .slick-dots {
    bottom: -8%;
  }
  .slick-active .customDot {
    background-color: #dadd54;
  }
`;

export const RightPlayerDiv = styled.div``;

export const RightPlayer = styled.img<{ mouseOverCheck: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: red;
  transition: 1s;

  mask-image: ${({ theme }) => `linear-gradient(
    to left,
    ${theme.color.rgbaBg06} 0%,
    ${theme.color.rgbaBg07} 0%,
    ${theme.color.rgbaBg08} 0%,
    ${theme.color.rgbaBg09} 0%,
    ${theme.color.rgbaBg10} 0%
  )`};

  -webkit-mask-image: ${({ theme }) => `linear-gradient(
    to left,
    ${theme.color.rgbaBg06} 0%,
    ${theme.color.rgbaBg07} 0%,
    ${theme.color.rgbaBg08} 0%,
    ${theme.color.rgbaBg09} 0%,
    ${theme.color.rgbaBg10} 0%
  )`};

  ${({ mouseOverCheck }) =>
    mouseOverCheck &&
    css`
      mask-image: ${({ theme }) => `linear-gradient(
        to left,
        ${theme.color.rgbaBg06} 10%,
        ${theme.color.rgbaBg07} 25%,
        ${theme.color.rgbaBg08} 50%,
        ${theme.color.rgbaBg09} 75%,
        ${theme.color.rgbaBg10} 100%
      )`};

      -webkit-mask-image: ${({ theme }) => `linear-gradient(
        to left,
        ${theme.color.rgbaBg06} 10%,
        ${theme.color.rgbaBg07} 25%,
        ${theme.color.rgbaBg08} 50%,
        ${theme.color.rgbaBg09} 75%,
        ${theme.color.rgbaBg10} 100%
      )`};
    `};
`;

export const RightContainerGradient1 = styled.div<{ mouseOverCheck: boolean; currentIndex: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  opacity: 0;
  cursor: pointer;
  background-image: ${({ theme, currentIndex }) =>
    currentIndex === 0
      ? `linear-gradient(to right, ${theme.color.rgbaBg05} 70%, ${theme.color.bg17} 130%)`
      : currentIndex === 4
      ? `
    linear-gradient(to left, ${theme.color.rgbaBg05} 70%, ${theme.color.bg17} 130%)`
      : `linear-gradient(to right, ${theme.color.rgbaBg05} 70%, ${theme.color.bg17} 130%),
    linear-gradient(to left, ${theme.color.rgbaBg05} 70%, ${theme.color.bg17} 130%)`};

  ${({ mouseOverCheck }) =>
    mouseOverCheck &&
    css`
      transition: 0.5s;

      opacity: 1;
    `};
`;
export const BackgroundTextDiv = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  left: 2%;
  bottom: 20%;
  height: 50%;
  width: 98%;
  overflow: hidden;
  z-index: 1;
`;

export const BackgroundIndexWrapper = styled.div``;

export const BackgroundIndexDiv = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  bottom: 12.3%;
  height: 21%;
  left: 44%;
  height: 120px;
  text-align: center;
  z-index: 4;
`;

export const BackgroundIndexImg = styled.img`
  height: 100%;
  opacity: 0.7;
`;

export const RightSliderDiv = styled.div`
  position: relative;
`;

export const CustomNextArrow = styled.div<{ mouseOverCheck: boolean; currentIndex: number }>`
  content: '';
  width: 38px;
  height: 76px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
  cursor: pointer;
  background-image: url('${Next}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 4;
  opacity: 0;

  ${({ mouseOverCheck, currentIndex }) =>
    mouseOverCheck &&
    currentIndex !== 4 &&
    css`
      transition: 0.3s;
      opacity: 0.8;
    `};
`;

export const CustomPreArrow = styled.div<{ mouseOverCheck: boolean; currentIndex: number }>`
  content: '';
  width: 38px;
  height: 76px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translate(0, -50%);
  cursor: pointer;
  background-image: url('${Pre}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 4;
  opacity: 0;
  ${({ mouseOverCheck, currentIndex }) =>
    mouseOverCheck &&
    currentIndex !== 0 &&
    css`
      transition: 0.3s;
      opacity: 0.8;
    `};
`;

export const customDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.color.bg09};
  border-radius: 50%;
`;

export const customNonDot = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.color.bg09};
  border-radius: 50%;
`;

export const Split = styled.span`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmThin};
`;
