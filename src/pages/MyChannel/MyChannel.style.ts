import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.hsP};
  background-color: ${({ theme }) => theme.color.background};

  ${({ theme }) => theme.media.mobile`
    padding-top: ${theme.hsM};
  `};
`;

export const Header = styled.div<{ backgroundImage?: string; empty: boolean }>`
  position: relative;
  width: 100%;
  height: 0;
  padding: 8.26% 0;
  display: flex;
  background: ${({ theme }) => theme.color.bg07};
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: 100% 100%;
      background-repeat: no-repeat;
    `}
  align-items: center;
  justify-content: center;

  ${({ empty, theme }) =>
    empty &&
    css`
      ${theme.media.tablet`
          padding: 12% 0;
      `}
      ${theme.media.mobile`
          padding: 14% 0;
      `}
    `}
`;

export const EmptyHeader = styled(Header)``;

export const HeaderImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Contents = styled.div`
  width: 90%;
  padding: 3% 7%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
     width: 100%;
     padding: 2% 0;
  `};
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  flex-direction: row;
  padding-right: 10px;
  padding-bottom: 5%;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding: 3% 4% 5% 4%;
  `};
`;

export const SignTextWrapper = styled.span<{ type?: string }>`
  display: ${({ type }) => type};
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    width: fit-content;
  `};
  user-select: none;
`;

export const ProfileWrapper = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.ps48};
  height: ${({ theme }) => theme.ps48};
  border: 1px solid ${({ theme }) => theme.color.lc12};
  border-radius: 50%;
  margin-right: 10px;

  ${({ theme }) => theme.media.tablet`
       width: ${theme.ps36};
       height: ${theme.ps36};
  `};
`;

export const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
`;

export const SignText = styled.span`
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc01};

  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs18};
  `};
`;

export const EditWrapper = styled.div`
  margin-top: 7px;
  margin-left: 12px;

  ${({ theme }) => theme.media.tablet`
     margin-top: 6px;
  `};
`;

export const EditIcon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};

  ${({ theme }) => theme.media.mobile`
      width: ${theme.ic14};
      height: ${theme.ic14};
  `};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin: 4% 0 7%;
    justify-content: space-between;
    font-size: ${theme.fs18};
  `};
`;

export const Button = styled.button`
  width: 35%;
  height: 40px;

  background: none;
  border: 1px solid ${({ theme }) => theme.color.point};
  color: ${({ theme }) => theme.color.point};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    box-shadow: 0 0 6px 0 ${({ theme }) => theme.color.point};
  }

  ${({ theme }) => theme.media.tablet`
    width: 45%;
    margin: 10px 0 10px 10px;
  `};
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic30};
  height: ${({ theme }) => theme.ic30};
  margin-right: 5px;
  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
  `};
`;

export const TabsWrappper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3%;
  padding-right: 10px;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `};
`;

export const MobileTabsWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet`
     width: 100%;
     display: flex;
     margin: 5% 0;
  `};
`;

export const ArrayWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin: 30px 0 30px;
  padding-right: 10px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs18};
    flex-direction: column;
    padding: 0 4%;
  `};
`;

export const MobileWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet`
    display: block;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `};
`;

export const VideoLength = styled.div`
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  width: 60%;
  height: 40px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs20};
    width: 40%;
  `}

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
    width: 40%;
  `}
`;

export const DropdownWrapper = styled.div`
  width: 20%;

  ${({ theme }) => theme.media.tablet`
      display: none;
  `}
`;

export const InputContainer = styled.div`
  width: 290px;
  height: 40px;
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  margin-left: 10px;

  ${({ theme }) => theme.media.tablet`
      display: none;
  `}
`;

export const InputContainerMobile = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet`
    display: flex;
    width: 85%;
    align-items: center;
    background: none;
    border: 1px solid ${theme.color.lc07};
    margin-left: 10px;
    flex-direction: row;
  `}
`;

export const FilterImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  display: flex;
  background: none;
  border: none;
  outline: none;
  padding-left: 11px;
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};

  ::placeholder {
    font-family: ${({ theme }) => theme.fmLight};
    font-size: ${({ theme }) => theme.fs16};
    color: ${({ theme }) => theme.color.ph01};
  }
`;

export const BtnSearch = styled.div`
  max-width: 38px;
  height: 38px;
  background: none;
  padding: 1px;
  margin: 0;
  border: none;
  cursor: pointer;
`;

export const ImgSearch = styled.img`
  width: 36px;
  height: 36px;
`;

export const StreamList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0 4%;
  `}
`;

export const NoList = styled.div<{ noImage: string | null }>`
  font-size: ${({ theme }) => theme.fs22};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  text-align: center;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs14};
  `}

  ${({ noImage }) =>
    noImage &&
    css`
      width: 400px;
      height: 400px;
      background-image: url('${noImage}');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;

      ${({ theme }) => theme.media.tablet`
        width: 120px;
        height: 120px;
  `}
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

export const PostBanner = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
    margin-top: 10px;
    font-size: ${theme.fs12};
  `};
`;

export const BannerBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.color.lc10};
  backdrop-filter: blur(50px);
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
  ${({ theme }) => theme.media.mobile`
    width: 70px;
    height: 22px;
  `};
`;

export const DeleteBannerBtnWrapper = styled(BannerBtnWrapper)`
  top: 10px;
  right: 10px;
  ${({ theme }) => theme.media.mobile`
    top: 5px;
    right: 10px;
  `};
`;

export const SaveBannerBtnWrapper = styled(BannerBtnWrapper)`
  top: 10px;
  right: 100px;
  ${({ theme }) => theme.media.mobile`
    top: 5px;
    right: 85px;
  `};
`;

export const BannerBtn = styled.p`
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc01};
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs11};
  `};
`;

export const AddImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export const AddImage = styled.img`
  width: ${({ theme }) => theme.ic72};
  height: ${({ theme }) => theme.ic72};
  ${({ theme }) => theme.media.tablet`
    width: ${theme.ic55};
    height: ${theme.ic55};  
    `};
  ${({ theme }) => theme.media.mobile`
    width: ${theme.ic36};
    height: ${theme.ic36};
  `};
`;
