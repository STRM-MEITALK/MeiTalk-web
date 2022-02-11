import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tab, Tabs } from '@components/TabMenu/TabMenu';
import CustomOptions from '@components/CustomOptions';
import MyPageListItem from '@components/MyPageListItem';
import DropdownPicker from '@components/DropdownPicker';
import FilterModal from '@components/Modal/FilterModal';
import { IAfterVideoType } from '@type/studioType';

import NoImage from '@images/noimg.png';
import NoVideo from '@images/no-video.png';
import FilterImg from '@images/filter-mb.png';
import edit from '@images/edit.png';
import inputSearch from '@images/inputSearch.png';

import * as STC from './MyPage.style';
import useMyPage from './useMyPage';

const MyPage = () => {
  const { t } = useTranslation();

  const {
    userData,
    handleClickEdit,
    handleClickStudio,
    handleClickChannel,
    activeTab,
    handleChange,
    handleSelect,
    category,
    categoryValue,
    handleChangeFilterText,
    afterVideoTotalElements,
    searchValue,
    handlePress,
    afterVideo,
    likedVideo,
    likedVideoTotalElements,
    handleSearchBtn,
    tabsOptions,
    isShowSetting,
    setIsShowSetting,
    isShowSettingLiked,
    setIsShowSettingLiked,
  } = useMyPage();

  return (
    <STC.Container>
      <FilterModal
        isShowSetting={isShowSetting}
        setIsShowSetting={setIsShowSetting}
        searchValue={searchValue}
        type="saved"
      />

      <FilterModal
        isShowSetting={isShowSettingLiked}
        setIsShowSetting={setIsShowSettingLiked}
        searchValue={searchValue}
        type="liked"
      />

      <STC.Contents>
        <STC.TopWrapper>
          <STC.SignTextWrapper type="flex">
            <STC.ProfileWrapper>
              <STC.ProfileIcon
                src={userData.userPicture === 'null' || userData.userPicture === null ? NoImage : userData.userPicture}
              />
            </STC.ProfileWrapper>
            <STC.SignText>{userData.username}</STC.SignText>
            <STC.EditWrapper>
              <STC.EditIcon src={edit} onClick={handleClickEdit} />
            </STC.EditWrapper>
          </STC.SignTextWrapper>

          <STC.ButtonWrapper>
            <STC.Button onClick={handleClickStudio}>{t('my_studio')}</STC.Button>
            <STC.Button onClick={handleClickChannel}>{t('my_channel')}</STC.Button>
          </STC.ButtonWrapper>
        </STC.TopWrapper>

        <STC.MobileTabsWrapper>
          <CustomOptions options={tabsOptions} selected={activeTab} onClick={handleChange} />
        </STC.MobileTabsWrapper>

        <STC.TabsWrappper>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label={t('mypage_tab1')} value={0} />
            <Tab label={t('mypage_tab3')} value={1} />
          </Tabs>
        </STC.TabsWrappper>

        <STC.ArrayWrapper>
          <STC.VideoLength>
            {t('common_video')} ({activeTab === 0 && afterVideoTotalElements}
            {activeTab === 1 && likedVideoTotalElements})
          </STC.VideoLength>
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
            {activeTab === 0 && <STC.FilterImg src={FilterImg} onClick={() => setIsShowSetting(true)} />}
            {activeTab === 1 && <STC.FilterImg src={FilterImg} onClick={() => setIsShowSettingLiked(true)} />}

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

        <STC.StreamList>
          {activeTab === 0 &&
            afterVideo?.map((item: IAfterVideoType) => (
              <MyPageListItem key={item.vodId} item={item} activeTab={activeTab} type="mypage" />
            ))}
          {activeTab === 1 &&
            likedVideo?.map((item: IAfterVideoType) => (
              <MyPageListItem key={item.vodId} item={item} activeTab={activeTab} type="mypage" />
            ))}
        </STC.StreamList>

        {activeTab === 0 && afterVideoTotalElements === 0 && (
          <STC.NoList noImage={NoVideo}>{t('mypage_noVideo')}</STC.NoList>
        )}
        {activeTab === 1 && likedVideoTotalElements === 0 && (
          <STC.NoList noImage={NoVideo}>{t('mypage_noVideo')}</STC.NoList>
        )}
      </STC.Contents>
    </STC.Container>
  );
};

export default MyPage;
