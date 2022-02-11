import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 20px 21px;
  border-bottom: 2px ${({ theme }) => theme.color.lc03} solid;
  ${({ theme }) => theme.media.tablet`
    padding: 3% 4% 2%;
    margin-bottom: 20px;
  `};
`;

export const WrapperBlock = styled.div`
  width: 100%;
  display: flex;
  /* align-items: flex-start; */
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileWrapper = styled.div`
  width: 50%;
  display: flex;
  cursor: pointer;
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
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  margin: 0 7%;

  ${({ theme }) => theme.media.tablet`
    max-width: 70%;
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
  /* flex-wrap: wrap; */
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`;

export const Title = styled.p`
  max-height: 75%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmRegular};
  font-size: ${({ theme }) => theme.fs14};
  line-height: 23px;
`;

export const BottomInfo = styled.div`
  display: flex;
`;

export const PublicType = styled.p<{ type: string | null }>`
  max-width: 80%;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  margin: 0 3%;

  ${({ theme }) => theme.media.tablet`
    max-width: 70%;
  `};

  ${({ type }) =>
    type &&
    type === 'public' &&
    css`
      color: ${({ theme }) => theme.color.point};
    `};
`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
`;

export const InfoTextThin = styled.p`
  color: ${({ theme }) => theme.color.fc04};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  margin-left: 5px;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.ic24};
  height: ${({ theme }) => theme.ic24};
`;

export const SmallIcon = styled.img`
  width: ${({ theme }) => theme.ic16};
  height: ${({ theme }) => theme.ic16};
  margin-right: 5px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;

  flex-wrap: nowrap;
  flex-direction: row;
`;

export const SmallLiveTag = styled.div`
  width: 40px;
  /* position: absolute;
  top: 0;
  left: 0; */
  padding: 2px 7px;
  margin-right: 5px;
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

export const BottomWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
  align-items: flex-end;
`;
