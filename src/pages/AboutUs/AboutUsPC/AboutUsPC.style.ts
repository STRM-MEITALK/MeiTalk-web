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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.hsP} 0;
  background-color: ${({ theme }) => theme.color.background};
  margin-bottom: 100px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const TextWrapper = styled.div`
  max-width: 40%;
  z-index: 5;
  opacity: 0;
  transform: translateY(50px);
  animation-name: ${fadeIn};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  z-index: 0;
`;

export const Icon = styled.img`
  width: 393px;
  height: 225px;
  margin-right: 200px;
  margin-bottom: 70px;
  z-index: 5;
`;

export const Description = styled.span`
  white-space: pre-line;
  line-height: 2;
  text-align: left;

  ${({ theme }) => css`
    font-family: ${theme.fmRegular};
    font-size: ${theme.fs20};
    color: ${theme.color.fc02};
  `}
`;

export const InnerContainer2 = styled(InnerContainer)`
  flex-direction: column;
  margin-top: 480px;
  padding: 0;
`;

export const DesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

export const BlankDiv = styled.div`
  width: 100%;
  height: 150px;
`;
