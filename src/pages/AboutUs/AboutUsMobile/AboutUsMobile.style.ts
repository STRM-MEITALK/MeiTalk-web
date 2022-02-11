import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
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

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 0;
  `}
`;

export const InnerContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const BackgroundImage = styled.img`
  width: 200%;
  position: fixed;
  z-index: 0;
`;

export const Icon = styled.img`
  width: 393px;
  height: 225px;
  z-index: 5;
  margin: 60px 0 130px;

  ${({ theme }) => theme.media.mobile`
    width: 119px;
    height: 70px;
    margin: 0 0 80px;
  `}
`;

export const TextWrapper = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  animation-name: ${fadeIn};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  z-index: 1;
`;

export const DesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-bottom: 50px;
`;

export const Description = styled.span`
  white-space: pre-line;
  line-height: 2;
  z-index: 5;
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fmRegular};
    font-size: ${theme.fs20};
    color: ${theme.color.fc02};
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
    margin-top: 20px;
  `}
`;

export const DescriptionYellow = styled(Description)`
  ${({ theme }) => css`
    color: ${theme.color.fc11};
  `}
`;

export const InnerContainer2 = styled(InnerContainer)`
  flex-direction: column;
  margin-top: 300px;
  padding: 0;

  ${({ theme }) => theme.media.mobile`
    margin-top: 177px;
  `}
`;

export const DesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 90px;
`;
