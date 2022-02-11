import styled, { css } from 'styled-components';
import { INoticeTextType } from './footerType';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background};
  width: 100%;
  height: 433px;
  position: relative;
  z-index: 99;
  ${({ theme }) => theme.media.mobile`
      height: 335px;
  `};
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.tablet`
    flex-direction: column-reverse;
    align-items: start;
  `};
`;

export const Line = styled.div`
  width: 100%;
  height: 13px;
  border-top: 8px solid ${({ theme }) => theme.color.lc02};
  border-bottom: 2px solid ${({ theme }) => theme.color.lc03};
`;

export const MarginWrapper = styled.div`
  flex: 1;
  margin: 115px 96px 0 96px;
  ${({ theme }) => theme.media.tablet`
    margin: 35px 16px 0 16px;
  `};
`;

export const ContactWrapper = styled.div`
  ${({ theme }) => theme.media.tablet`
    margin-top: 40px;
  `};
`;

export const ContactTextWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ContactIconWrapper = styled.div``;

export const ContactText = styled.span`
  font-family: ${({ theme }) => theme.fmSBold};
  font-size: ${({ theme }) => theme.fs54};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs30};
  `};
  user-select: none;
`;

export const WithUsText = styled.span`
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs54};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs30};
    `};
  user-select: none;
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `};
`;

export const PolicyWrapper = styled.div`
  text-align: right;
  margin-bottom: 40px;
  ${({ theme }) => theme.media.tablet`
    text-align: left;
  `};
`;

export const PolicyText = styled.span<{ isFirst?: boolean }>`
  padding: ${({ isFirst }) => (isFirst ? '0 1%' : ' 0 0 0 5%')};
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs24};
  color: ${({ theme }) => theme.color.fc02};
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs16};
  `};
  cursor: pointer;
  user-select: none;
`;

export const NoticeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: auto;
  padding: 0 10px 0 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lc02};
  cursor: pointer;
`;

export const NoticeText = styled.div<INoticeTextType>`
  font-family: ${({ theme, PfontFamily }) => theme[PfontFamily]};
  font-size: ${({ theme, PFontSize }) => theme[PFontSize]};
  color: ${({ theme }) => theme.color.fc02};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 200px;
  margin-right: 20px;

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
  `};

  ${({ theme, PMobileFontSize }) => theme.media.mobile`
    font-size: ${theme[PMobileFontSize]};
    max-width: 120px;
  `};

  ${({ isCusor }) =>
    isCusor &&
    css`
      cursor: pointer;
    `}
`;

export const NoticeIconWrapper = styled.span``;

export const NoticeIcon = styled.img`
  display: block;
  width: ${({ theme }) => theme.ic24};
  height: 8px;
`;

export const CopyRightText = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  font-family: ${({ theme }) => theme.fmLight};
  font-size: ${({ theme }) => theme.fs12};
  color: ${({ theme }) => theme.color.fc03};
`;
