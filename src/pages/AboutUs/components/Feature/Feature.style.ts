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
  width: 100%;
  display: flex;
  padding: 0 7%;
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
    margin-top: 100px;
    padding: 0 10%;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-top: 50px;
  `}
`;

export const InnerContainer = styled.div<{ direction: boolean }>`
  width: 100%;
  display: flex;

  ${({ direction }) =>
    !direction &&
    css`
      justify-content: flex-end;
    `}

  ${({ theme }) => theme.media.tablet`
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentsContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 20px;
  `}
`;

export const FeatureIcon = styled.img`
  width: 100px;
  object-fit: contain;
  margin-right: 20px;

  ${({ theme }) => theme.media.mobile`
    width: 40px;
  `}
`;

export const TextContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  word-break: keep-all;
  word-wrap: break-word;

  ${({ theme }) => css`
    font-family: ${theme.fmMedium};
    font-size: ${theme.fs30};
    color: ${theme.color.fc01};
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `}
`;

export const Description = styled.span`
  white-space: pre-line;
  margin-top: 30px;

  ${({ theme }) => css`
    font-family: ${theme.fmRegular};
    font-size: ${theme.fs20};
    color: ${theme.color.fc02};
  `}

  ${({ theme }) => theme.media.tablet`
    text-align: left;
    margin-top: 30px;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    margin-top: 10px;
  `}
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 15px;
  background: ${({ theme }) => `linear-gradient(to right, ${theme.color.lc02} 30%, ${theme.color.aboutUsFeatureLine})`};

  ${({ theme }) => theme.media.tablet`
    height: 2px;
    text-align: center;
    margin-top: 30px;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
    margin: 0;
  `}
`;
