import styled, { css } from 'styled-components';

export const ControlsWrapper = styled.div``;

export const Container = styled.div<{ isShow: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  padding: 0 23px;
  background-color: ${({ theme }) => theme.color.rgbaBg02};
  opacity: 0;
  transition: opacity 0.5s;

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
    `};

  ${({ theme }) => theme.media.mobile`
    padding: 0 20px 0 16px;
  `};
`;

export const CenterWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${({ theme }) => theme.media.mobile`
    z-index: 2;
  `};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  ${({ theme }) => theme.media.mobile`
    height: auto;
    padding-bottom: 3%;
  `};
`;

export const SeekRange = styled.div<{ value: number }>`
  width: 100%;
  margin-bottom: 7px;

  input[type='range'] {
    -webkit-appearance: none;
    height: 3px;
    width: 100%;
    background: ${({ theme, value }) => `linear-gradient(
      to right,
      ${theme.red} 0%,
      ${theme.red} ${value}%,
      ${theme.color.lc06} ${value}%,
      ${theme.color.lc06} 100%
    )`};
    border-radius: 5px;
    outline: none;
    border: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.red};
    background: ${({ theme }) => theme.red};

    ${({ theme }) => theme.media.mobile`
      width: 8px;
      height: 8px;
      border-radius: 4px;
    `};
  }

  input::-moz-range-thumb {
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.red};
    background: ${({ theme }) => theme.red};

    ${({ theme }) => theme.media.mobile`
      width: 8px;
      height: 8px;
      border-radius: 4px;
    `};
  }
`;

export const SettingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img<{ isShowVolume?: boolean }>`
  width: ${({ theme }) => theme.ic26};
  height: ${({ theme }) => theme.ic26};
  margin: 0 11px;
  cursor: pointer;

  ${({ theme, isShowVolume }) => theme.media.tablet`
    ${
      isShowVolume &&
      css`
        display: none;
      `
    }
  `};

  ${({ theme }) => theme.media.mobile`
    margin: 0 6px;
  `};
`;

export const ControllIcon = styled.img`
  width: ${({ theme }) => theme.ic68};
  height: ${({ theme }) => theme.ic68};
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic36};
    height: ${theme.ic36};
  `};
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const VolumeRange = styled.div<{ value: number }>`
  position: absolute;
  top: -270%;
  left: -25%;
  transform: rotate(-90deg);
  z-index: 4;

  ${({ theme }) => theme.media.tablet`
    position: static;
    transform: translate(0,0) rotate(0deg);
    display: flex;
    align-items: center;
    justify-content: center;
  `};

  input {
    -webkit-appearance: none;
    height: 3px;
    width: 54px;
    background: ${({ theme, value }) => `linear-gradient(
      to right,
      ${theme.color.lc10} 0%,
      ${theme.color.lc10} ${value}%,
      ${theme.color.lc06} ${value}%,
      ${theme.color.lc06} 100%
    )`};
    border-radius: 10px;
    outline: none;
    border: none;

    ${({ theme }) => theme.media.tablet`
      width:100%;
      height: 4px;
    `};
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 9px;
    height: 9px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.color.bg09};
    background: ${({ theme }) => theme.color.bg09};

    ${({ theme }) => theme.media.mobile`
      width: 8px;
      height: 8px;
      border-radius: 4px;
    `};
  }

  input::-moz-range-thumb {
    -moz-appearance: none;
    width: 9px;
    height: 9px;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.color.bg09};
    background: ${({ theme }) => theme.color.bg09};

    ${({ theme }) => theme.media.mobile`
      width: 8px;
      height: 8px;
      border-radius: 4px;
    `};
  }
`;

export const VolumePCWrapper = styled.div`
  position: relative;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const VolumeMobileWrapper = styled.div<{ isShowVolume: boolean }>`
  display: none;

  ${({ theme, isShowVolume }) => theme.media.tablet`
    position: relative;
    display: flex;
    align-items:center;

    ${
      isShowVolume &&
      css`
        width: 144px;
        left: -5px;
        backdrop-filter: blur(30px);
        padding: 0 10px 0 5px;
      `
    }
  `};

  ${({ theme, isShowVolume }) => theme.media.mobile`
    ${
      isShowVolume &&
      css`
        width: 114px;
      `
    }
  `};
`;

export const Caption = styled.div`
  width: 30%;
  max-height: 30%;
  position: absolute;
  top: 3%;
  right: 2%;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.rgbaBg11};
  overflow-y: auto;
  z-index: 2;

  ${({ theme }) => theme.media.mobile`
    width: 40%;
    max-height: 30%;
    bottom: 25%;
    padding: 10px;
  `};
`;

export const Gradient = styled.div`
  width: 100%;
  height: 50%;
  max-height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => `linear-gradient(${theme.color.rgbaBg03}, ${theme.color.rgbaBg01})`};

  ${({ theme }) => theme.media.tablet`
    height: 38px;
  `}
`;

export const CaptionText = styled.p`
  color: ${({ theme }) => theme.color.fc02};
  font-size: ${({ theme }) => theme.fs18};
  word-break: break-word;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10};
  `};
`;

export const NoCaptionText = styled.p`
  color: ${({ theme }) => theme.color.fc02};
  font-size: ${({ theme }) => theme.fs18};
  word-break: break-word;

  ${({ theme }) => theme.media.mobile`
  font-size: ${theme.fs10};
`};
`;
