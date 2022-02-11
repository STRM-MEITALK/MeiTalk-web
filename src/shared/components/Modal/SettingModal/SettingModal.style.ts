import styled, { css } from 'styled-components';

export const SettingModal = styled.div`
  position: absolute;
  bottom: 75px;
  right: 8%;
  padding: 7px 22px;
  backdrop-filter: blur(30px);
  transition: ${({ theme }) => theme.modalSpeed};
  user-select: none;
  z-index: 3;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    cursor: pointer;

    .title {
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};

      img {
        width: 5px;
        margin-right: 10px;
      }
    }

    .type {
      color: ${({ theme }) => theme.color.point};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmLight};
    }
  }

  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const SettingWrapepr = styled.div`
  width: 209px;
`;

export const SpeedSetting = styled.div`
  width: 209px;

  .row {
    display: flex;
    justify-content: flex-start;
    padding: 8px 0;

    p {
      width: 33.33%;
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmLight};
      cursor: pointer;

      img {
        width: 5px;
        margin-right: 10px;
      }
    }

    p.tc {
      text-align: center;
    }

    p.tr {
      text-align: right;
    }

    .title {
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmRegular};
      text-align: left;
    }

    .selected {
      color: ${({ theme }) => theme.color.point};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmLight};
    }
  }
`;

export const CaptionSetting = styled.div`
  width: 265px;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;

    p {
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmLight};
      cursor: pointer;

      img {
        width: 5px;
        margin-right: 10px;
      }
    }

    .title {
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmRegular};
    }

    .selected {
      color: ${({ theme }) => theme.color.point};
      font-size: ${({ theme }) => theme.fs14};
      font-family: ${({ theme }) => theme.fmLight};
    }
  }
`;

export const QualitySetting = styled.div`
  width: 209px;

  .row {
    display: flex;
    justify-content: flex-start;
    padding: 8px 0;
    .title {
      color: ${({ theme }) => theme.color.fc01};
      font-size: ${({ theme }) => theme.fs14};
      text-align: left;

      img {
        width: 5px;
        margin-right: 10px;
      }
    }
  }
`;

export const OptionItem = styled.p`
  width: 33.33%;
  display: inline-block;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  padding: 8px 0;
  cursor: pointer;

  &.selected {
    color: ${({ theme }) => theme.color.point};
    font-size: ${({ theme }) => theme.fs14};
    font-family: ${({ theme }) => theme.fmLight};
  }

  &.tr {
    text-align: right;
  }

  &.tc {
    text-align: center;
  }
`;
