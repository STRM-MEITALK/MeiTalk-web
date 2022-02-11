import styled, { css } from 'styled-components';

export const StreamItem = styled.div`
  position: relative;
  background-color: black;
`;

export const StreamWrapper = styled.div`
  cursor: pointer;
`;

export const StreamInnerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const StreamInnerBlock = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 57%;
`;

export const StreamInnerWrapperImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 100%;
  height: 100%;
`;

export const StreamTime = styled.div`
  width: fit-content;
  position: absolute;
  bottom: 3%;
  right: 2%;
  padding: 2px 7px;
  background-color: ${({ theme }) => theme.color.background};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmMedium};
  transition: 0.2s;
`;

export const SmallLiveTag = styled.div`
  width: 56px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  color: ${({ theme }) => theme.color.fc02};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs18};
`;
