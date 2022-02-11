/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { Tab, Tabs } from '@components/TabMenu/TabMenu';
import CustomOptions from '@components/CustomOptions';
import BannerModal from '@components/Modal/BannerModal';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import OneBtnModal from '@components/Modal/OneBtnModal';
import NoImage from '@images/noimg.png';
import AddImage from '@images/add-photo.png';
import AddHoverImage from '@images/add-photo-hover.png';
import * as STC from './MyChannel.style';
import useMyChannel from './useMyChannel';

const MyChannel = () => {
  const { t } = useTranslation();
  const {
    tabsOptions,
    activeTab,
    bannerImageModal,
    preview,
    deleteBannerModal,
    sizeModal,
    formatModal,
    channelInfo,
    fileRef,
    addImage,
    setAddImage,
    setSizeModal,
    handleDeleteBtn,
    setFormatModal,
    postFile,
    setDeleteBannerModal,
    handleBannerModal,
    handleDeleteBanner,
    setBannerImageModal,
    handleChange,
    handleFile,
    image,
  } = useMyChannel();

  const Banner = useMemo(() => {
    if (channelInfo?.isMe === 'Y') {
      if (channelInfo.chImg !== null) {
        return (
          <STC.DeleteBannerBtnWrapper onClick={handleDeleteBtn}>
            <STC.BannerBtn>{t('common_delete')}</STC.BannerBtn>
          </STC.DeleteBannerBtnWrapper>
        );
      } else {
        if (preview === null) {
          return (
            <STC.AddImageWrapper
              onMouseLeave={() => {
                setAddImage(AddImage);
              }}
              onMouseEnter={() => {
                setAddImage(AddHoverImage);
              }}
              onClick={() => setBannerImageModal(true)}
            >
              <STC.AddImage src={addImage} alt="" />
              <STC.PostBanner>{t('add_image')}</STC.PostBanner>
            </STC.AddImageWrapper>
          );
        } else {
          return (
            <>
              <STC.SaveBannerBtnWrapper onClick={postFile}>
                <STC.BannerBtn>{t('common_save')}</STC.BannerBtn>
              </STC.SaveBannerBtnWrapper>
              <STC.DeleteBannerBtnWrapper onClick={handleDeleteBtn}>
                <STC.BannerBtn>{t('common_delete')}</STC.BannerBtn>
              </STC.DeleteBannerBtnWrapper>
            </>
          );
        }
      }
    }
  }, [channelInfo, preview]);

  return (
    <STC.Container>
      <STC.Header
        backgroundImage={image}
        empty={channelInfo?.isMe === 'Y' && channelInfo?.chImg === null && preview === null}
      >
        {Banner}
      </STC.Header>
      <STC.Contents>
        <STC.TopWrapper>
          <STC.SignTextWrapper type="flex">
            <STC.ProfileWrapper>
              <STC.ProfileIcon
                src={
                  channelInfo?.userProfile.userPicture === 'null' || channelInfo?.userProfile.userPicture === null
                    ? NoImage
                    : channelInfo?.userProfile.userPicture
                }
              />
            </STC.ProfileWrapper>
            <STC.SignText>{`${channelInfo?.userProfile.userName}${t('mychannel_title')}`}</STC.SignText>
          </STC.SignTextWrapper>
        </STC.TopWrapper>

        <STC.MobileTabsWrapper>
          <CustomOptions options={tabsOptions} selected={activeTab} onClick={handleChange} />
        </STC.MobileTabsWrapper>

        <STC.TabsWrappper>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label={t('common_video')} value={0} />
            <Tab label={t('community_title')} value={1} />
            <Tab label={t('common_about')} value={2} />
          </Tabs>
        </STC.TabsWrappper>
        <Outlet />
      </STC.Contents>
      <BannerModal isShow={bannerImageModal} setIsShow={setBannerImageModal} handleBtn={handleFile} fileRef={fileRef} />
      <TwoBtnModal
        isShow={deleteBannerModal}
        setIsShow={() => setDeleteBannerModal(!deleteBannerModal)}
        content={t('banner_delete')}
        btnLeftContent={t('no')}
        btnRightContent={t('yes')}
        handleLeftBtn={() => setDeleteBannerModal(false)}
        handleRightBtn={() => {
          handleDeleteBanner();
          setDeleteBannerModal(false);
        }}
      />
      <OneBtnModal
        isShow={sizeModal}
        content={t('banner_size')}
        btnContent={t('common_ok')}
        handleBtn={() => setSizeModal(false)}
      />
      <OneBtnModal
        isShow={formatModal}
        content={t('banner_foramt')}
        btnContent={t('common_ok')}
        handleBtn={() => setFormatModal(false)}
      />
    </STC.Container>
  );
};

export default MyChannel;
