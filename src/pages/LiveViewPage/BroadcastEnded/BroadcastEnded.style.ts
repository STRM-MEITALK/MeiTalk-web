import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;

  ${({ theme }) => theme.media.tablet`
  padding-bottom: 55%;
`};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
  background: ${({ theme }) => theme.color.bg07};
`;

export const Content = styled.div`
  text-align: center;
`;

export const Icon = styled.img`
  width: 360px;

  ${({ theme }) => theme.media.mobile`
    width:130px;
  `};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fs32};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14};
  `};
`;
