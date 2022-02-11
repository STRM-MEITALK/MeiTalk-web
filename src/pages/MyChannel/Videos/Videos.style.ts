import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    padding: 0;
  `};
`;

export const TopWrapper = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  margin: 30px 0 30px;
  padding-right: 10px;
  padding-bottom: 40px;
  border-bottom: 1px ${({ theme }) => theme.color.lc01} solid;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
    padding: 0 4%;
    margin : 0 4%;
  `};
`;

export const TopInfoWrapper = styled.div`
  flex-direction: column;
  max-width: 66.6%;
  display: flex;

  ${({ theme }) => theme.media.tablet`
      max-width: 100%;
  `};
`;

export const TopVideoTitle = styled.div`
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};

  margin: 25px 20px 25px;
  display: flex;
  flex-wrap: wrap;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs14};
    padding: 0 4%;
    margin: 0;
  `};
`;

export const TopVideoDetail = styled.div`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  line-height: 19px;

  margin: 25px 20px 25px;
  display: flex;
  flex-wrap: wrap;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs12};
    flex-direction: column;
    padding: 0 4%;
    margin: 25px 0px 39.5px;
  `};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin: 0 0 0 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 0 4%;
    margin: 10px 0 0 0;
  `};
`;

export const ChannelName = styled.p`
  max-width: 80%;
  line-height: 26px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs12};
  font-family: ${({ theme }) => theme.fmLight};
  margin: 0 2% 0 1%;

  cursor: pointer;

  ${({ theme }) => theme.media.tablet`
    max-width: 50%;
    margin: 0 2%;
  `};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-right: 5px; */

  &.date {
    margin-left: 5px;
    ${({ theme }) => theme.media.mobile`
      margin-left : 5px;
    `};
  }
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const InfoTextThin = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmThin};
  margin-left: 5px;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
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

export const FilterImg = styled.img`
  width: 36px;
  height: 36px;
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

export const ListWrapper = styled.div`
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
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};
  text-align: center;
  display: flex;

  margin: ${({ theme }) => theme.hsP} 0;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.fs14};
    font-family: ${theme.fmLight};
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
