import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
`;

export const Content = styled.div`
  text-align: center;
  padding: 29px 0 39px;

  img {
    width: 130px;
  }
`;

export const ReadyText = styled.p`
  margin-top: 9px;
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const BackgroundTextDiv = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  bottom: 20%;
  height: 50%;
  width: 80%;
  overflow: hidden;
  z-index: 1;
`;

export const BackgroundTextImg = styled.img`
  width: 80%;
`;

export const Profile = styled.div`
  width: ${({ theme }) => theme.ps36};
  height: ${({ theme }) => theme.ps36};
  border: 1px solid ${({ theme }) => theme.color.point};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SubTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  margin-left: 10px;
`;
