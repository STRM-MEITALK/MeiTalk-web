import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  margin: 5% 0;
  padding: 0 10%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LeftCotainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

export const TitleImgDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const TitleImg = styled.img`
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fs60};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
`;

export const SubTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SubTitleImgDiv = styled.div`
  padding-left: 2%;
  padding-right: 14px;
`;

export const SubTitleRightWrapper = styled.div`
  width: 80%;
`;

export const SubTitleRightTopWrapper = styled.div`
  width: 80%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const SubTitleRightTopFirstText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const RightContainer = styled.div`
  position: relative;
  width: 52%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    margin: 0 auto;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 0;
  margin-bottom: 57%;
`;

export const RightPlayerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const ReadyText = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const BackgroundTextDiv = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  left: 2%;
  bottom: 20%;
  height: 50%;
  width: 98%;
  overflow: hidden;
  z-index: 1;
`;

export const BackgroundTextImg = styled.img``;

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
