import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import MyPageListItem from '@components/MyPageListItem';
import DropdownPicker from '@components/DropdownPicker';
import FilterModal from '@components/Modal/FilterModal';
import Profile from '@components/Profile';
import { numberWithComma } from '@lib/numberWithComma';

import { IAfterVideoType } from '@type/studioType';

import FilterImg from '@images/filter-mb.png';
import inputSearch from '@images/inputSearch.png';
import ViewImg from '@images/mystudio_view.png';
import LikeImg from '@images/mystudio_like.png';
import NoVideo from '@images/no-video.png';

import useVideos from './useVideos';
import * as STC from './Videos.style';

const Videos = () => {
  const { t } = useTranslation();
  const {
    channelId,
    channelVideo,
    channelVideoTotalElements,
    category,
    categoryValue,
    handleSelect,
    isShowSetting,
    setIsShowSetting,
    searchValue,
    handleChangeFilterText,
    handlePress,
    handleSearchBtn,
    channelVideoTop,
    loadFlag,
  } = useVideos();

  return (
    <STC.Container>
      <FilterModal
        isShowSetting={isShowSetting}
        setIsShowSetting={setIsShowSetting}
        searchValue={searchValue}
        type="channel"
        channelId={channelId}
      />
      {loadFlag && (
        <>
          {channelVideoTop && (
            <STC.TopWrapper>
              <MyPageListItem key={channelVideoTop.vodId} item={channelVideoTop} activeTab={0} type="channeltop" />
              <STC.TopInfoWrapper>
                <STC.TopVideoTitle>{channelVideoTop.title}</STC.TopVideoTitle>
                <STC.ProfileWrapper>
                  <Profile type="ps26" src={channelVideoTop.profile} channelId={channelVideoTop.channelId} />
                  <STC.ChannelName>{channelVideoTop.name}</STC.ChannelName>
                  <STC.Flex>
                    <STC.Icon src={ViewImg} alt="view" />
                    <STC.InfoText>{numberWithComma(channelVideoTop.viewCount)}</STC.InfoText>
                    <STC.InfoTextThin>•</STC.InfoTextThin>
                  </STC.Flex>
                  <STC.Flex>
                    <STC.Icon src={LikeImg} alt="like" />
                    <STC.InfoText>{numberWithComma(channelVideoTop.likeCount)}</STC.InfoText>
                    <STC.InfoTextThin>•</STC.InfoTextThin>
                  </STC.Flex>
                  <STC.Flex className="date">
                    <STC.InfoText>{moment(channelVideoTop.streamTime.split(' ')[0]).format('YYYY.MM.DD')}</STC.InfoText>
                  </STC.Flex>
                </STC.ProfileWrapper>
                <STC.TopVideoDetail>{channelVideoTop.detail}</STC.TopVideoDetail>
              </STC.TopInfoWrapper>
            </STC.TopWrapper>
          )}
          {channelVideo.length !== 0 && (
            <STC.ArrayWrapper>
              <STC.VideoLength>{t('common_video')}</STC.VideoLength>
              <STC.DropdownWrapper>
                <DropdownPicker
                  options={categoryValue}
                  value={category}
                  handleValue={(value) => {
                    if (value) {
                      handleSelect(value);
                    }
                  }}
                  controllerColor="fc01"
                  optionColor="fc01"
                />
              </STC.DropdownWrapper>

              <STC.MobileWrapper>
                <STC.FilterImg src={FilterImg} onClick={() => setIsShowSetting(true)} />

                <STC.InputContainerMobile>
                  <STC.Input
                    placeholder={t('common_search')}
                    value={searchValue}
                    onChange={handleChangeFilterText}
                    onKeyPress={handlePress}
                  />
                  <STC.BtnSearch onClick={handleSearchBtn}>
                    <STC.ImgSearch src={inputSearch} />
                  </STC.BtnSearch>
                </STC.InputContainerMobile>
              </STC.MobileWrapper>

              <STC.InputContainer>
                <STC.Input
                  placeholder={t('common_search')}
                  value={searchValue}
                  onChange={handleChangeFilterText}
                  onKeyPress={handlePress}
                />
                <STC.BtnSearch onClick={handleSearchBtn}>
                  <STC.ImgSearch src={inputSearch} />
                </STC.BtnSearch>
              </STC.InputContainer>
            </STC.ArrayWrapper>
          )}

          <STC.ListWrapper>
            {channelVideo?.map((item: IAfterVideoType) => (
              <MyPageListItem key={item.vodId} item={item} activeTab={0} type="channel" />
            ))}
          </STC.ListWrapper>
          {channelVideoTotalElements === 0 && <STC.NoList noImage={NoVideo}>{t('mypage_noVideo')}</STC.NoList>}
        </>
      )}
    </STC.Container>
  );
};

export default Videos;
