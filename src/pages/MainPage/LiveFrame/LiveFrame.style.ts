import styled, { css } from 'styled-components';

export const LiveFrameWrapper = styled.div<{ visibleLiveList: boolean }>`
  display: flex;
  align-items: center;
  transition: 0.6s;

  ${({ visibleLiveList }) =>
    !visibleLiveList &&
    css`
      opacity: 0;
      transform: translateY(10px);
    `};

  ${({ theme }) => theme.media.tablet`
    width: fit-content;
    margin: 0 4%;
  `};
`;

export const MoreDiv = styled.div`
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const MoreImg = styled.img`
  width: 50%;
`;
