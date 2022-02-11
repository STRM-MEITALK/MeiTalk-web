import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div<{ animation: boolean }>`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  opacity: 0;
  transform: translateY(50px);

  ${({ animation }) =>
    animation &&
    css`
      animation-name: ${fadeIn};
      animation-duration: 2s;
      animation-fill-mode: forwards;
    `}

  ${({ theme }) => theme.media.tablet`
    width: 80%;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  `}
`;

export const DesWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  ${({ theme }) => theme.media.tablet`
    width: 100%;  
    flex-direction: column;
  `}
`;

export const NumIcon = styled.img`
  height: 80px;
  object-fit: contain;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: 40px;
  `}

  ${({ theme }) => theme.media.mobile`
    height: 36px;
  `}
`;

export const Description = styled.span`
  word-break: keep-all;
  word-wrap: break-word;
  line-height: 2;

  ${({ theme }) => css`
    font-family: ${theme.fmRegular};
    font-size: ${theme.fs20};
    color: ${theme.color.fc02};
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `}
`;

export const DescriptionYellow = styled(Description)`
  ${({ theme }) => css`
    color: ${theme.color.fc11};
  `}
`;
