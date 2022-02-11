import styled, { css } from 'styled-components';

export const PcTab = styled.div`
  ${({ theme }) => theme.media.tablet`
  display:none;
`};
`;

export const TabDiv = styled.div<{ currentStreamUrl: string | null; isLiveFinish: boolean }>`
  width: 0 auto;
  height: 0 auto;
  display: flex;
  margin-top: 4%;

  ${({ currentStreamUrl, isLiveFinish }) =>
    (isLiveFinish || currentStreamUrl === '' || currentStreamUrl?.indexOf('motionVideo') !== -1) &&
    css`
      margin-top: -2%;
    `};

  ${({ theme }) => theme.media.tablet`
    display: none;
  
  `};
`;

export const TabsWrapper = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const MainMiddleWrapper = styled.div`
  width: 100%;
  height: 70%;
`;
