import styled, { css } from 'styled-components';

export const Container = styled.div<{ slideListLength: number }>`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 40px 0 80px;
  padding-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 60%;
    left: 0;
    bottom: 0;
    ${({ slideListLength }) =>
      slideListLength !== 0 &&
      css`
        background-color: #1b1b1e;
      `};
  }
  & .slick-list {
    overflow: visible;
  }

  & .slick-slide {
    ${({ theme }) => theme.media.tablet`
      padding: 0 20px;
    `};

    ${({ theme }) => theme.media.mobile`
      padding: 0 10px;
    `};

    & .info,
    .number,
    .live-tag {
      transition: 0.2s;
      opacity: 0;
    }

    & .player {
      transition: 0.5s;
    }
  }

  & .slick-slide.slick-center {
    .info,
    .number,
    .live-tag {
      opacity: 1;
    }

    .player {
      ${({ theme }) => theme.media.tablet`
      transform: scale(1.05);
    `};

      ${({ theme }) => theme.media.mobile`
      transform: scale(1.08);
    `};
    }
  }
`;

export const Slice = styled.div``;

export const SliceTitle = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    padding: 2% 5% 3%;
  `};

  ${({ theme }) => theme.media.mobile`
    padding: 0 35px 20px;
  `};
`;

export const SliceIcon = styled.img`
  width: ${({ theme }) => theme.ic24};
  margin-right: 5px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.fc01};
  font-size: ${({ theme }) => theme.fs18};
  font-family: ${({ theme }) => theme.fmRegular};
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const PlayerWrapper = styled.div`
  position: relative;
`;

export const CarouselPlayer = styled.div<{ thumbnail: string | null }>`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 60%;
  ${({ thumbnail }) =>
    thumbnail &&
    css`
      background-image: url('${thumbnail}');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const NumberImage = styled.img`
  width: 43px;
  position: absolute;
  bottom: 5px;
  left: 5px;
`;

export const SmallLiveTag = styled.div`
  width: 70px;
  position: absolute;
  top: 5%;
  left: 4%;
  background-color: ${({ theme }) => theme.red};
  text-align: center;
  color: ${({ theme }) => theme.color.fc01};
  font-family: ${({ theme }) => theme.fmMedium};
  font-size: ${({ theme }) => theme.fs20};
  padding: 2px 0;

  ${({ theme }) => theme.media.mobile`
    width:35px;
    font-size: ${theme.fs12};
    padding: 2px 0 0;
  `};
`;
