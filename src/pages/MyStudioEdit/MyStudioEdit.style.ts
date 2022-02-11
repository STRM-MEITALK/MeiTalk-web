import styled, { css } from 'styled-components';
import { IContentWrapperProps } from './MyStudioEditType';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Header = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.hsP};
  padding: 2% 5%;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
      padding: 0 5%;
      height: ${theme.hsM};
  `};
`;

export const HeaderText = styled.div`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs30};
  font-family: ${({ theme }) => theme.fmMedium};
  line-height: 36px;
  margin-top: auto;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs20};
    line-height: 24px;
    margin-bottom: auto;
  `};
`;

export const BackIcon = styled.img`
  display: block;
  width: ${({ theme }) => theme.ic36};
  height: ${({ theme }) => theme.ic36};
  margin-right: 1%;
  margin-top: auto;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
      width: ${theme.ic24};
      height: ${theme.ic24};
      margin-right: 2%;
      margin-bottom: auto;
  `};
`;

export const HeaderWrapper = styled.div`
  width: 76%;
  display: flex;
  margin: 40px 0 20px 0;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
      width: 100%;
      margin: 40px 0 0 0; 
      padding: 0 4%;
  `};
`;

export const HeaderTitle = styled.div`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs18};
      padding: 0;
  `};
`;

export const DeleteBtn = styled.div`
  height: 40px;
  display: flex;
  padding: 0 2%;

  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};

  border: 1px ${({ theme }) => theme.color.lc04} solid;
  text-align: center;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs10};
    height: 22px;
`};
`;

export const Content = styled.div<{ isTop: boolean }>`
  width: 76%;
  margin: 0 auto;
  display: flex;
  padding-bottom: 80px;

  ${({ isTop }) =>
    isTop &&
    css`
      padding-bottom: 20px;
      min-height: 400px;

      ${({ theme }) => theme.media.tablet`
        min-height: 100%;
      `};
    `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: block;
    margin: 0;
    padding-bottom: 0px;
  `};
`;
interface IPlayerWrapper {
  showComment?: boolean;
}

export const TopWrapper = styled.div<IPlayerWrapper>`
  width: 72%;
  transition: 0.6s;

  ${({ showComment }) =>
    !showComment &&
    css`
      width: 100%;
    `};

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    padding: 1% 4%;
  `};
`;

export const ChattingWrapper = styled.div`
  width: 28%;
  margin-left: 25px;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 15px;
  `};
`;

export const VideoInfoTop = styled.div<IPlayerWrapper>`
  width: 72%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 25px;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding: 0 4%;
  `};

  ${({ showComment }) =>
    !showComment &&
    css`
      width: 100%;
    `};

  ${({ theme, showComment }) => theme.media.tablet`
    display: ${showComment ? 'none' : 'flex'};
  `};
`;

export const InfoBlock = styled.div<{ isBtn?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.fc01};

  ${({ isBtn }) =>
    isBtn &&
    css`
      width: 140px;
    `}

  ${({ theme }) => theme.media.tablet`
      margin-top: 5px;
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ViewersIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
   font-size: ${theme.fs14};
  `}
`;

export const Icon = styled.img<{ pointer?: boolean }>`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic20};
    height: ${theme.ic20};
  `}

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
`;

export const VideoInfoText = styled.div<{ isRight?: boolean }>`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};

  margin-left: 5px;
  cursor: pointer;

  ${({ isRight }) =>
    isRight &&
    css`
      margin-right: 25px;
      cursor: default;
    `}

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs14};
  `}
`;

export const InfoWrapper = styled.div<IContentWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${({ ratio }) => ratio};
  margin-top: 10px;
  ${({ isRight }) =>
    isRight &&
    css`
      padding-right: 0;
    `}
  ${({ theme, isRight }) => theme.media.tablet`
    ${
      isRight &&
      css`
        padding-right: 20px;
      `
    }
  `};

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

export const VisibilityWrapper = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  margin-top: 12px;

  ${({ theme }) => theme.media.tablet`
    min-height: 0;
  `}
`;

export const PublicWrapper = styled.div`
  width: 30%;
  min-height: 120px;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    min-height: 0;
  `}
`;

export const RadioIcon = styled.img`
  width: ${({ theme }) => theme.ic20};
  height: ${({ theme }) => theme.ic20};
  margin-right: 4px;

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic20};
    height: ${theme.ic20};
  `}
`;

export const PublicText = styled.div`
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs16};
  line-height: 20px;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 30%;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-bottom: 80px;
  `}
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
  padding: 12px 15px;
  background: none;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const DetailInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px 15px;
  margin-bottom: 40px;
  border: 1px ${({ theme }) => theme.color.lc07} solid;
  resize: none;
  background: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.color.fc01};
  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const ContentTitle = styled.h1`
  width: 30%;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};
`;

export const ContentMarginTitle = styled.h1`
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const PointText = styled.span`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.point};

  ${({ theme }) => theme.media.tablet`
  `};
`;

export const TitleSubText = styled.span`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.tablet`
  `};
`;

export const ContentContainer = styled.div<{ isShow?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  width: 100%;
  transition: 0.6s;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    padding: 20px 4%;  
  `};

  ${({ isShow }) =>
    isShow &&
    css`
      ${({ theme }) => theme.media.tablet`
          display: none;
      `};
    `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
      flex-direction: column;
  `};
`;
