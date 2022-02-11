import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 114px;
  height: 114px;
  cursor: pointer;
  margin: 0 15px;
  background-color: #111;
  border-radius: 50%;

  ${({ theme }) => theme.media.tablet`
    width: 100px;
    height: 100px;
    margin: 0 15px;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 50px;
    height: 50px;
    margin: 0 7px;
  `};
`;

export const ProfileImgDiv = styled.div<{ currentCheck: boolean }>`
  position: absolute;
  width: 114px;
  height: 114px;
  border-radius: 50%;
  border: solid 2px #efefef;
  overflow: hidden;

  ${({ currentCheck }) =>
    currentCheck &&
    css`
      border: solid 2px #dadd54;
      box-shadow: 0 0 16px 8px #dadd54;
    `};

  ${({ theme }) => theme.media.tablet`
    width: 100px;
    height: 100px;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 50px;
    height: 50px;
  `};
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LiveDiv = styled.div`
  width: 50%;
  height: 25%;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #dadd54;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.mobile`
    width: 30px;
    height: 13px;
  `};
`;

export const LiveCircel = styled.div`
  background-color: ${({ theme }) => theme.color.bg11};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 5%;

  ${({ theme }) => theme.media.mobile`
    width: 2px;
    height: 2px;
  `};
`;

export const LiveTextDiv = styled.div`
  padding-top: 2%;
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmBold};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10};
  `};
`;

export const LiveImg = styled.img`
  width: 65px;
  height: 28px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 0);

  ${({ theme }) => theme.media.mobile`
    width: 30px;
    height: 13px;
  `};
`;
