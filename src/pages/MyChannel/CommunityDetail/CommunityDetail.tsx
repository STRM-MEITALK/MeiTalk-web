import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import GoToListImg from '@images/go-to-list.png';
import Profile from '@components/Profile';
import Button from '@components/Button';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import Comment from './Comment';
import useCommunityDetail from './useCommunityDetail';
import * as STC from './CommunityDetail.style';

const communityDetail = () => {
  const { t } = useTranslation();
  const {
    isMe,
    channelId,
    userProfile,
    communityDetail,
    showEditor,
    contentTemp,
    isShowTBM,
    goBack,
    handleShowEditor,
    changeToEditor,
    onChangeContent,
    onUpdate,
    onDelete,
    callDelete,
    setIsShowTBM,
  } = useCommunityDetail();

  return (
    <STC.Container>
      <STC.CommunityHeader>
        <STC.GoBack onClick={goBack}>
          <img src={GoToListImg} alt="" />
          <p>{t('community_goto_list')}</p>
        </STC.GoBack>
      </STC.CommunityHeader>
      <STC.DetailContainer>
        <STC.DetailHeader>
          <STC.Flex>
            <Profile
              type="ps36"
              mType="ps20"
              src={userProfile.userPicture}
              channelId={channelId ? parseInt(channelId) : null}
            />
            <STC.ChannelName>{userProfile.userName}</STC.ChannelName>
          </STC.Flex>
          <STC.Date>{moment(communityDetail.createTime).format('YYYY.MM.DD')}</STC.Date>
        </STC.DetailHeader>
        {showEditor && isMe === 'Y' ? (
          <STC.Editor onChange={onChangeContent} value={contentTemp} placeholder={t('community_editor_placeholder')} />
        ) : (
          <STC.Content>{communityDetail.contents}</STC.Content>
        )}
        {showEditor && isMe === 'Y' ? (
          <STC.DetailFooter>
            <STC.Flex>
              <Button
                content={t('common_cancel')}
                width="80px"
                type="secondary"
                size="small"
                handleClick={() => handleShowEditor(false)}
              />
              <Button
                content={t('common_save')}
                width="80px"
                size="small"
                disable={contentTemp === ''}
                handleClick={() => onUpdate()}
              />
            </STC.Flex>
          </STC.DetailFooter>
        ) : (
          isMe === 'Y' && (
            <STC.DetailFooter>
              <STC.Flex>
                <Button
                  content={t('common_delete')}
                  width="80px"
                  type="secondary"
                  size="small"
                  handleClick={onDelete}
                />
                <Button content={t('common_edit')} width="80px" size="small" handleClick={changeToEditor} />
              </STC.Flex>
            </STC.DetailFooter>
          )
        )}
      </STC.DetailContainer>
      <Comment />
      <TwoBtnModal
        isShow={isShowTBM}
        setIsShow={() => setIsShowTBM(!isShowTBM)}
        content={t('community_delete_msg')}
        btnLeftContent={t('common_no')}
        btnRightContent={t('common_yes')}
        handleLeftBtn={() => setIsShowTBM(false)}
        handleRightBtn={callDelete}
      />
    </STC.Container>
  );
};

export default communityDetail;
