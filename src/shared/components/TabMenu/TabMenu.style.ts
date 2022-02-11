import styled, { css, keyframes } from 'styled-components';
import { ITabProps, ISliderStyleProps } from './TabMenuType';

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button<ITabProps>`
  width: 100%;
  padding: 20px 0px;
  font-size: ${({ theme }) => theme.fs22};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc01};
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.color.point};

      font-family: ${({ theme }) => theme.fmMedium};
    `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    padding: 10px 0px;
  `}
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px ${({ theme }) => theme.color.lc10} solid;
  transform: translateY(-1px);
`;

export const inactiveTab = {
  opacity: 0.65,
};

export const TabSlider = styled.div<ISliderStyleProps>`
  z-index: 2;
  width: ${({ width }) => `${width}px`};
  height: 8px;
  background-color: ${({ theme }) => theme.color.point};
  transition: 0.2s;
  transform: ${({ width, index }) => `translateX(${width * index}px)`};

  ${({ theme }) => theme.media.tablet`
      height: 6px;
  `}
`;
