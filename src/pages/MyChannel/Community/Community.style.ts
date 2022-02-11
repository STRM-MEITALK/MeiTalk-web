import styled, { css } from 'styled-components';
import NoVideoImage from '@images/no-video.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.tablet`
    padding: 0 5%;
  `};
`;

export const CommunityHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3%;

  ${({ theme }) => theme.media.tablet`
    margin-top: 2%;
    margin-bottom: 5%;
  `};

  ${({ theme }) => theme.media.mobile`
    margin-top: 4%;
    margin-bottom: 8%;
  `};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs24};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs18};
  `};
`;

export const PostBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  p {
    font-size: ${({ theme }) => theme.fs18};
    color: ${({ theme }) => theme.color.point};
  }

  img {
    width: ${({ theme }) => theme.ic24};
    margin-left: 5px;
  }

  ${({ theme }) => theme.media.mobile`
    p {
      font-size: ${theme.fs14};
    }

    img {
      width: ${theme.ic20};
    }
  `};
`;

export const NoData = styled.div<{ noData: string }>`
  width: 400px;
  height: 400px;
  position: relative;
  margin: 0 auto;
  background-image: url('${NoVideoImage}');
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '${({ noData }) => noData}';
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.color.fc01};
    font-size: ${({ theme }) => theme.fs20};
    font-family: ${({ theme }) => theme.fmLight};
    text-align: center;
  }

  ${({ theme }) => theme.media.tablet`
   width: 300px;
   height: 300px;
  `};

  ${({ theme }) => theme.media.mobile`
    width: 120px;
    height: 120px;

    &::before {
      font-size: ${theme.fs14};
    }
  `};
`;

export const EditorWrapper = styled.div`
  width: 100%;
  height: 378px;
  padding: 20px;
  margin-bottom: 4%;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.bg05};

  ${({ theme }) => theme.media.mobile`
    height: 246px;
  `};
`;

export const EditorHeader = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChannelName = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  margin-left: 10px;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs14};
  font-family: ${({ theme }) => theme.fmLight};

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs12};
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Editor = styled.textarea`
  width: 100%;
  height: 70%;
  margin: 20px 0;
  padding: 10px 15px;
  outline: none;
  resize: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.lc07};
  font-size: ${({ theme }) => theme.fs16};
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmLight};

  &::placeholder {
    color: ${({ theme }) => theme.color.ph01};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.fs14};
  `};
`;

export const EditorFooter = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin: 0 10px 0 0;
  }
`;
