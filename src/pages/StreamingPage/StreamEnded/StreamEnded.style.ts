import styled from 'styled-components';

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

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fs20};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.mobile`
    font-size:${theme.fs14};
  `};
`;
