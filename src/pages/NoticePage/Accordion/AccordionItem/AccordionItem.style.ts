import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.color.bg05};
`;

export const TitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 2px ${({ theme }) => theme.color.lc03} solid;
  padding: 0 10px;
  color: ${({ theme }) => theme.color.fc01};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.fc01};
  }
`;

export const Title = styled.h1<{ isOpen?: boolean }>`
  margin-right: 5px;
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme, isOpen }) => (isOpen ? theme.color.point : theme.color.fc01)};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs14};
  `};
`;

export const DescriptionWrapper = styled.div<{ isOpen: boolean }>`
  width: inherit;
  height: 0;
  overflow: hidden;
  opacity: 0;
  background: ${({ theme }) => theme.color.background};
  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      border-bottom: 2px ${theme.color.lc03} solid;
    `}

  transition: all 0.35s ease;
`;

export const Description = styled.h1`
  padding: 20px;
  white-space: pre-line;
  font-size: ${({ theme }) => theme.fs16};
  font-family: ${({ theme }) => theme.fmRegular};
  color: ${({ theme }) => theme.color.fc04};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs12};
  `};
`;

export const ArrowImage = styled.img`
  width: 10px;
  height: 6px;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-top: 20px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DateText = styled.h1<{ isOpen?: boolean }>`
  padding-bottom: 20px;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};
  color: ${({ theme }) => theme.color.fc04};
  ${({ theme }) => theme.media.tablet`
      font-size: ${theme.fs10};
  `};
`;

export const TitleSction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px 10px 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NewImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  ${({ theme }) => theme.media.tablet`
    width: 16px;
    height: 16px;
  `};
`;

export const Notice1ContentDiv = styled.div`
  width: 100%;
  padding-left: 3%;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    display: block
  `};
`;

export const NoticeContentDivFirst = styled.div`
  font-family: ${({ theme }) => theme.fmBold};
  white-space: nowrap;
  padding-right: 5px;

  ${({ theme }) => theme.media.tablet`
    display: inline
  `};
`;
export const NoticeContentDivFirstP = styled.p`
  font-family: ${({ theme }) => theme.fmBold};
`;
