import styled, { css } from 'styled-components';

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

export const Contents = styled.div`
  width: 76%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
      width: 100%;
      padding: 48px 0;
  `}
`;

export const SignTextWrapper = styled.span<{ type?: string }>`
  display: ${({ type }) => type};
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    width: fit-content;
  `};
  cursor: pointer;
  user-select: none;
`;

export const ProfileWrapper = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.ps48};
  height: ${({ theme }) => theme.ps48};
  border: 2px solid ${({ theme }) => theme.color.point};
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
  font-size: ${({ theme }) => theme.fs30};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
      font-size: ${theme.fs20};
  `};
  ${({ theme }) =>
    css`
      &:hover {
        text-shadow: 3px 3px 3px ${theme.color.point};
      }
    `}
`;

export const EditWrapper = styled.div`
  display: block;
  margin-left: 12px;
  margin-top: 10px;

  ${({ theme }) => theme.media.tablet`
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

export const ButtonWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin: 4% 0 ;
    justify-content: space-between;
    font-size: ${theme.fs10};
  `};
`;

export const Button = styled.button`
  width: 35%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.point};
  border: 0;
  color: ${({ theme }) => theme.color.fc07};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background: ${({ theme }) => theme.color.bg06};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs10};
  `};

  ${({ theme }) => theme.media.tablet`
    width: 45%;
    height: 30px;
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

export const ArrayWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding-bottom: 49.5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc01};
  margin: 0 10px 49.5px 10px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs18};
    flex-direction: column;
    padding: 0 4%;
    border: none;
    margin: 0 10px 40px 10px;
  `}
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
  margin-right: 5px;

  ${({ theme }) => theme.media.tablet`
      display:none;
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
