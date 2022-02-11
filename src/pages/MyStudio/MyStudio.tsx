import React from 'react';
import { useTranslation } from 'react-i18next';

import MyPageListItem from '@components/MyPageListItem';
import DropdownPicker from '@components/DropdownPicker';
import FilterModal from '@components/Modal/FilterModal';
import { IAfterVideoType } from '@type/studioType';

import FilterImg from '@images/filter-mb.png';
import NoVideo from '@images/no-video.png';
import BackImg from '@images/back.png';
import inputSearch from '@images/inputSearch.png';

import * as STC from './MyStudio.style';
import useMyStudio from './useMyStudio';

const MyStudio = () => {
  const { t } = useTranslation();

  const {
    handleClickBack,
    myVideoTotalElements,
    handleSelect,
    category,
    categoryValue,
    handleChangeFilterText,
    publicCategory,
    publicCategoryValue,
    handlePublicSelect,
    myVideo,
    searchValue,
    handlePress,
    handleSearchBtn,
    isShowSetting,
    setIsShowSetting,
  } = useMyStudio();

  return (
    <STC.Container>
      <FilterModal
        isShowSetting={isShowSetting}
        setIsShowSetting={setIsShowSetting}
        searchValue={searchValue}
        type="studio"
      />
      <STC.Header>
        <STC.BackIcon src={BackImg} onClick={handleClickBack} />
        <STC.HeaderText onClick={handleClickBack}>{t('mystudio')}</STC.HeaderText>
      </STC.Header>

      <STC.Contents>
        <STC.ArrayWrapper>
          <STC.VideoLength>
            {t('common_video_my')} ({myVideoTotalElements})
          </STC.VideoLength>

          <STC.DropdownWrapper>
            <DropdownPicker
              options={publicCategoryValue}
              value={publicCategory}
              handleValue={(value) => {
                if (value) {
                  handlePublicSelect(value);
                }
              }}
              controllerColor="fc01"
              optionColor="fc01"
            />
          </STC.DropdownWrapper>
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
                value={searchValue}
                placeholder={t('common_search')}
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
              value={searchValue}
              placeholder={t('common_search')}
              onChange={handleChangeFilterText}
              onKeyPress={handlePress}
            />
            <STC.BtnSearch onClick={handleSearchBtn}>
              <STC.ImgSearch src={inputSearch} />
            </STC.BtnSearch>
          </STC.InputContainer>
        </STC.ArrayWrapper>

        <STC.StreamList>
          {myVideo?.map((item: IAfterVideoType) => (
            <MyPageListItem key={item.vodId} item={item} activeTab={0} type="mystudio" />
          ))}
        </STC.StreamList>

        {myVideoTotalElements === 0 && <STC.NoList noImage={NoVideo}>{t('mypage_noVideo')}</STC.NoList>}
      </STC.Contents>
    </STC.Container>
  );
};

export default MyStudio;
