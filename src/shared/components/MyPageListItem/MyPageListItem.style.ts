import styled, { css } from 'styled-components';

export const StreamItem = styled.div`
  flex-basis: 33.3%;

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
    padding: 0;
    max-width: 100%;
    background-color:${theme.color.background};
  `};
`;

export const StreamWrapper = styled.div`
  position: relative;
  margin: 25px 10px 25px;
  ${({ theme }) => theme.media.tablet`
    margin: 0;
    padding-bottom: 4%;
  `};
`;

export const StreamInnerWrapperNoVideo = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const StreamInnerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  cursor: pointer;
`;

export const StreamTime = styled.div<{ isMouseOver: boolean }>`
  width: fit-content;
  position: absolute;
  right: 2%;
  bottom: 3%;
  padding: 2px 8px 3px 9px;
  background-color: ${({ theme }) => theme.color.background};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmMedium};
  transition: 0.2s;

  ${({ isMouseOver }) =>
    isMouseOver
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`;

export const SmallLiveTag = styled.div`
  width: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2px 7px;
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs12};

  ${({ theme }) => theme.media.tablet`
    top: 11px;
    left: 10px;
    padding: 2px 8px 1px;
`};
`;

export const TopIcon = styled.div``;

export const NoVideo = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 57%;
  background-color: ${({ theme }) => theme.color.bg11};

  /* display: flex; */
  align-items: center;
  justify-content: center;
`;

export const NoVideoIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.ic96};
  height: ${({ theme }) => theme.ic96};
`;
