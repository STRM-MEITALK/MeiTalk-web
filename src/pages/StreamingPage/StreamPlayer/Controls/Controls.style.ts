import styled, { css } from 'styled-components';

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

export const Wrapper = styled.div`
  width: 100%;
  height: 65px;
`;

export const SeekRange = styled.div`
  width: 100%;
  margin-bottom: 7px;
  input {
    width: 100%;
    height: 3px;
    -webkit-appearance: none;
    background: ${({ theme }) => theme.red};

    ${({ theme }) => theme.media.mobile`
      height: 1px;
    `};

    &::-webkit-slider-thumb {
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
  }
`;

export const SettingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ControllButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  background: none;
  padding: 0;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic26};
  height: ${({ theme }) => theme.ic26};
  margin: 0 11px;
  cursor: pointer;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic20};
    height: ${theme.ic20};
    margin: 0 6px;
  `};
`;
