import styled, { css } from 'styled-components';
import { ISignTextProps } from './MenuType';

export const Wrapper = styled.div<{ scrollY: number }>`
  position: absolute;
  top: ${({ scrollY }) => `${scrollY}px`};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  object-fit: contain;
  backdrop-filter: blur(40px);

  ${({ theme }) => theme.media.tablet`
      overflow: auto;
  `};
`;

export const ButtonWrapper = styled.div`
  margin: 6%;
  margin-bottom: 0;

  ${({ theme }) => theme.media.tablet`
    height: 10%;
    display:flex;
    align-items: center;
    margin: 0;
    margin-right: 6%;
  `};
`;

export const CloseButton = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
  user-select: none;
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};

  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic24};
    height: ${theme.ic24};
    display: block;
  `}
`;

export const Center = styled.div`
  ${({ theme }) => theme.media.tablet`
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10% 0;
  `};
`;

export const MenuWrapper = styled.div`
  display: flex;
  margin: 72px 10% 0 10%;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column-reverse;
    margin: 0 10%;
  `};
`;

export const MenuListWrapper = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    height: auto;
  `};

  ${({ theme }) => theme.media.mobile`
    margin-bottom: 10%;
  `};
`;

export const UserWrapper = styled.div`
  margin-left: auto;

  ${({ theme }) => theme.media.tablet`
    display: inline-block;
    margin-left: 0;
    margin-bottom: 10%;
  `};
`;

export const MenuListTextWrapper = styled.div``;

export const MenuListText = styled.p<{ isLast?: boolean }>`
  cursor: pointer;
  user-select: none;
  font-family: ${({ theme }) => theme.fmSBold};
  font-size: ${({ theme }) => theme.fs60};
  color: ${({ theme }) => theme.color.fc02};
  &:hover {
    text-shadow: 3px 3px 3px ${({ theme }) => theme.color.point};
  }

  ${({ theme }) => theme.media.tablet`
    margin-bottom: 2%;
  `};

  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs32};
  `};
`;

export const LogoutWrapper = styled.div`
  text-align: right;
  margin: 0 10% 0 50px;
`;

export const LanguageWrapper = styled.div<{ isLogin: boolean }>`
  width: 140px;
  ${({ isLogin }) =>
    !isLogin &&
    css`
      margin-right: 10%;
    `}
`;

export const SignTextWrapper = styled.span<{ type?: string }>`
  display: ${({ type }) => type};
  align-items: center;
  padding-bottom: 12px;
  padding-left: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc03};
  ${({ theme }) => theme.media.tablet`
    width: fit-content;
    padding-left: 0px;
    padding-right: 20px;
  `};
  user-select: none;
`;

export const SignText = styled.span<ISignTextProps>`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs30};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs20};
  `};
  ${({ theme, isUserInfo }) =>
    !isUserInfo &&
    css`
      &:hover {
        text-shadow: 3px 3px 3px ${theme.color.point};
      }
    `}
`;

export const ProfileWrapper = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.ps48};
  height: ${({ theme }) => theme.ps48};
  border: 2px solid ${({ theme }) => theme.color.point};
  border-radius: 50%;
  margin-right: 10px;

  ${({ theme }) => theme.media.mobile`
       width: ${theme.ps36};
       height: ${theme.ps36};
  `};
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
`;

export const EditWrapper = styled.div`
  display: block;
  margin-left: 12px;
  margin-top: 10px;

  ${({ theme }) => theme.media.mobile`
     margin-top: 9px;
  `};
`;

export const EditIcon = styled.img`
  display: block;
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};

  ${({ theme }) => theme.media.mobile`
      width: ${theme.ic16};
      height: ${theme.ic16};
  `};
`;

export const MenuExtraWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  ${({ theme }) => theme.media.tablet`
      justify-content: flex-start;
  `};
`;

export const MenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
  ${({ theme }) => theme.media.tablet`
        margin-right: 5%;
        margin-left: 0;
  `};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;

export const MenuButtonImage = styled.img`
  width: ${({ theme }) => theme.ic48};
  height: ${({ theme }) => theme.ic48};
`;

export const MenuButtonText = styled.h1`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs14};
  `};
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${({ theme }) => theme.media.tablet`
    margin-left: 10%;
    justify-content: space-between;
    margin-bottom: 20%;
  `};
`;
