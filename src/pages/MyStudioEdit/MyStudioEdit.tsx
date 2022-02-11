/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@components/Button';
import DropdownPicker from '@components/DropdownPicker';
import TwoBtnModal from '@components/Modal/TwoBtnModal';

import BackImg from '@images/back.png';

import ViewImg from '@images/mypage_view.png';
import LikeImg from '@images/mypage_like.png';
import ChatImg from '@images/mypage_chat.png';

import RadioImg from '@images/radio.png';
import RadioNoImg from '@images/radio_no.png';
import Comment from './Comment';
import useMyStudioEdit from './useMyStudioEdit';
import * as STC from './MyStudioEdit.style';
import Player from './Player';

const MyStudioEdit = () => {
  const { t } = useTranslation();
  const {
    handleClickBack,
    title,
    handleTitle,
    description,
    handleDescription,
    chatShow,
    handleChat,
    commentHeightRef,
    commentHeight,
    radioTrue,
    handleRadio,
    btnDisable,
    isShowTBM,
    setIsShowTBM,
    onClickEditBtn,
    onClickDeleteBtn,
    category,
    categoryOptions,
    handleBroadCategory,
    getVideoInfo,
  } = useMyStudioEdit();

  return (
    <STC.Container>
      {getVideoInfo && (
        <>
          <STC.Header>
            <STC.BackIcon src={BackImg} onClick={handleClickBack} />
            <STC.HeaderText onClick={handleClickBack}>{t('mystudio')}</STC.HeaderText>
          </STC.Header>

          <STC.HeaderWrapper>
            <STC.HeaderTitle>{t('common_details')}</STC.HeaderTitle>
            <STC.DeleteBtn onClick={() => setIsShowTBM(true)}>{t('mystudio_delete')}</STC.DeleteBtn>
          </STC.HeaderWrapper>

          <STC.Content isTop={true}>
            <STC.TopWrapper showComment={chatShow}>
              <Player showComment={chatShow} />
            </STC.TopWrapper>

            {chatShow && (
              <STC.ChattingWrapper ref={commentHeightRef}>
                <Comment onHandleShowComment={handleChat} commentHeight={commentHeight} />
              </STC.ChattingWrapper>
            )}
          </STC.Content>
          <STC.Content isTop={false}>
            <STC.VideoInfoTop showComment={chatShow}>
              <STC.Flex>
                <STC.InfoBlock>
                  <STC.Title>
                    {t('common_date')}: {getVideoInfo.streamTime.split(' ')[0]}(
                    {getVideoInfo.isPublic ? t('common_published') : t('common_uploaded')})
                  </STC.Title>
                </STC.InfoBlock>
              </STC.Flex>
              <STC.InfoBlock className="tr">
                <STC.Icon src={LikeImg} />
                <STC.VideoInfoText isRight={true}>{getVideoInfo.likeCount}</STC.VideoInfoText>

                <STC.Icon src={ViewImg} />
                <STC.VideoInfoText isRight={!chatShow}> {getVideoInfo.viewCount}</STC.VideoInfoText>

                {!chatShow && (
                  <>
                    <STC.Icon src={ChatImg} onClick={handleChat} pointer={true} />
                    <STC.VideoInfoText isRight={false} onClick={handleChat}>
                      {t('common_comment')}
                    </STC.VideoInfoText>
                  </>
                )}
              </STC.InfoBlock>
            </STC.VideoInfoTop>
          </STC.Content>
          <STC.Content isTop={false}>
            <STC.ContentContainer isShow={chatShow}>
              <STC.ContentWrapper>
                <STC.InfoWrapper ratio="47%" isRight={false}>
                  <STC.ContentMarginTitle>
                    {t('title')} ({title?.length}/100) <STC.PointText>*</STC.PointText>
                    <STC.TitleSubText>({t('common_required')})</STC.TitleSubText>
                  </STC.ContentMarginTitle>
                  <STC.TitleInput
                    type="text"
                    value={title}
                    placeholder={t('studio_title_placeholder')}
                    onChange={handleTitle}
                  />
                  <STC.ContentMarginTitle>
                    {t('mystudio_description')} ({description?.length}/5000)
                  </STC.ContentMarginTitle>
                  <STC.DetailInput
                    value={description}
                    placeholder={t('about_description')}
                    onChange={handleDescription}
                    maxLength={5000}
                  />
                </STC.InfoWrapper>

                <STC.InfoWrapper ratio="47%" isRight={false}>
                  <STC.ContentMarginTitle>{t('category')}</STC.ContentMarginTitle>
                  <DropdownPicker
                    options={categoryOptions}
                    value={category}
                    handleValue={(value) => {
                      if (value) {
                        handleBroadCategory(value);
                      }
                    }}
                    controllerColor="fc01"
                    optionColor="fc01"
                  />
                  <div style={{ marginBottom: 40 }}> </div>

                  <STC.ContentMarginTitle>{t('mystudio_visibility')}</STC.ContentMarginTitle>
                  <STC.VisibilityWrapper>
                    <STC.PublicWrapper>
                      <STC.RadioIcon src={radioTrue ? RadioImg : RadioNoImg} onClick={handleRadio} />
                      <STC.PublicText>{t('common_public')}</STC.PublicText>
                    </STC.PublicWrapper>
                    <STC.PublicWrapper>
                      <STC.RadioIcon src={radioTrue ? RadioNoImg : RadioImg} onClick={handleRadio} />
                      <STC.PublicText>{t('common_private')}</STC.PublicText>
                    </STC.PublicWrapper>
                  </STC.VisibilityWrapper>
                </STC.InfoWrapper>
              </STC.ContentWrapper>

              <STC.ButtonWrapper>
                <Button content={t('edit')} type="secondary" disable={btnDisable} handleClick={onClickEditBtn} />
              </STC.ButtonWrapper>
            </STC.ContentContainer>
          </STC.Content>

          <TwoBtnModal
            isShow={isShowTBM}
            setIsShow={() => setIsShowTBM(!isShowTBM)}
            handleLeftBtn={() => setIsShowTBM(false)}
            handleRightBtn={onClickDeleteBtn}
            btnLeftContent={t('no')}
            btnRightContent={t('yes')}
            content={t('mystudio_delete_modal')}
          />
        </>
      )}
    </STC.Container>
  );
};

export default MyStudioEdit;
