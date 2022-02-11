import styled, { css } from 'styled-components';

export const StreamItem = styled.div`
  flex-basis: 33.3%;

  ${({ theme }) => theme.media.grid3`
    flex-basis: 33%;
  `};

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
    padding: 0;
    max-width: 100%;
    background-color:${theme.color.background};
  `};
`;

export const StreamWrapper = styled.div`
  position: relative;
  margin: 25px 25px 25px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin: 0;
    padding-bottom: 2%;
  `};
`;

export const StreamInnerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const SmallLiveTag = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 7px;
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs12};

  ${({ theme }) => theme.media.tablet`
    width: 70px;
    top: 5%;
    left: 4%;
    font-size: ${theme.fs20};
  `};

  ${({ theme }) => theme.media.mobile`
    width:35px;
    font-size: ${theme.fs12};
    padding: 2px 0 0;
  `};
`;

export const SmallTime = styled.div<{ isMouseOver: boolean }>`
  width: fit-content;
  position: absolute;
  bottom: 6%;
  right: 3%;
  padding: 3px 9px;
  background-color: ${({ theme }) => theme.stretch};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmMedium};
  transition: 0.2s;

  ${({ isMouseOver }) =>
    !isMouseOver
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};

  ${({ theme }) => theme.media.tablet`
    bottom: 32%;
  `};
`;
