import styled, { css } from 'styled-components';

export const Container = styled.div<{ visible: boolean }>`
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

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `};

  ${({ theme }) => theme.media.mobile`
    padding: 0 20px 0 16px;
  `};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  padding: 20px 0;
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
      ${theme.color.bg14} ${value}%,
      ${theme.color.bg14} 100%
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
    background: ${({ theme }) => theme.red};

    ${({ theme }) => theme.media.mobile`
      width: 8px;
      height: 8px;
      border-radius: 4px;
    `};
  }
`;

export const SettingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const LiveButton = styled.button<{ isShowChat: boolean }>`
  width: fit-content;
  height: fit-content;
  color: ${({ theme, isShowChat }) => (isShowChat ? theme.color.fc10 : theme.color.fc01)};
  border: 1px solid ${({ theme }) => theme.color.point};
  outline: none;
  background: ${({ theme, isShowChat }) => (isShowChat ? theme.color.point : 'none')};

  padding: 3px 10px 5px;
  margin-right: 9px;
  font-size: ${({ theme }) => theme.fs16};

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const ControllButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  background: none;
  padding: 0;
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

export const VolumeRange = styled.div<{ value: number }>`
  z-index: 2;
  position: absolute;
  top: -270%;
  left: -25%;
  transform: rotate(-90deg);

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
      ${theme.color.bg09} 0%,
      ${theme.color.bg09} ${value}%,
      ${theme.color.bg14} ${value}%,
      ${theme.color.bg14} 100%
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
