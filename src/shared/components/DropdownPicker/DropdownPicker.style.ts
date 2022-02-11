import styled, { css } from 'styled-components';
import Select from 'react-select';
import { IDropdownPickerProps } from './DropdownPickerType';

export const CustomSelect = styled(Select)<IDropdownPickerProps>`
  width: 100%;
  .Select__control {
    cursor: pointer;
  }

  & .Select {
    &__control {
      display: flex;
      align-items: center;
      border-radius: 0;
      border: none;
      height: 100%;
      background: none;
      border-top: 2px ${({ theme }) => theme.color.lc03} solid;
      border-bottom: 2px ${({ theme }) => theme.color.lc03} solid;
      :hover {
        border-top: 2px ${({ theme }) => theme.color.lc03} solid;
        border-bottom: 2px ${({ theme }) => theme.color.lc03} solid;
      }
      &--is-focused {
        box-shadow: none;
      }
    }
    &__single-value {
      font-family: ${({ theme }) => theme.fmRegular};
      color: ${({ theme, controllerColor }) => theme.color[controllerColor ?? 'fc01']};

      div {
        display: flex;
        align-items: center;
        font-family: ${({ theme }) => theme.fmRegular};

        img {
          margin-top: 0;
        }
      }
    }
    &__menu {
      background: none !important;
      backdrop-filter: blur(30px);
      ${({ theme, isBackground }) =>
        isBackground &&
        css`
          background: rgba(0, 0, 0, 0.5) !important;
        `}
      border: 0;
      box-shadow: none;
      border-radius: 0;
      margin-top: 0;
      &-list {
        padding: 0;
        justify-content: center;
        align-items: center;
      }
      :hover {
        border: 0;
      }
    }

    &__option {
      height: 40px;
      display: 'flex';
      align-items: 'center';
      padding: 9px 0px 9px 15px;
      font-family: ${({ theme }) => theme.fmRegular};
      color: ${({ theme, optionColor }) => theme.color[optionColor ?? 'fc01']};
      background: none !important;
      backdrop-filter: blur(30px);
      border: 0;
      cursor: pointer;

      div {
        display: flex;
        align-items: center;
        font-family: ${({ theme }) => theme.fmRegular};

        img {
          margin-top: 0;
        }
      }
    }
  }
`;
