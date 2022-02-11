import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  .Toastify__toast-container {
    width: fit-content;
    position: fixed;
    text-align: center;

    .Toastify__toast {
      min-height: auto;
      background-color: ${({ theme }) => theme.color.point};
      border-radius: 0;

      .Toastify__toast-body {
        color: ${({ theme }) => theme.color.fc07};
        font-size: ${({ theme }) => theme.fs18};
        font-family: ${({ theme }) => theme.fmMedium};
        padding: 0 40px;
      }
    }

    &.Toastify__toast-container--bottom-center {
      left: 50%;
      bottom: 2%;
      transform: translateX(-50%);
    }
  }
`;
