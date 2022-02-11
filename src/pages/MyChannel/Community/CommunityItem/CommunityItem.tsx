import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ICommunityType } from '@type/communityType';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import Profile from '@components/Profile';
import Button from '@components/Button';
import CommentImg from '@images/comment-reply.png';

import useCommunityItem from './useCommunityItem';
import * as STC from './CommunityItem.style';

const CommunityItem = ({ item }: { item: ICommunityType }) => {
  const { t } = useTranslation();
  const {
    isMe,
    userProfile,
    showEditor,
    contentTemp,
    isShowTBM,
    onChangeContent,
    onUpdate,
    onDelete,
    callDelete,
    changeToEditor,
    handleShowEditor,
    goToDetail,
    setIsShowTBM,
  } = useCommunityItem({
    item,
  });

  return (
    <STC.Container showEditor={showEditor}>
      <STC.CommunityHeader>
        <STC.Flex>
          <Profile type="ps36" mType="ps20" src={userProfile.userPicture} channelId={item.channelId} />
          <STC.ChannelName>{userProfile.userName}</STC.ChannelName>
        </STC.Flex>
        <STC.Date>{moment(item.createTime).format('YYYY.MM.DD')}</STC.Date>
      </STC.CommunityHeader>
      {showEditor && isMe === 'Y' ? (
        <STC.Editor onChange={onChangeContent} value={contentTemp} placeholder={t('community_editor_placeholder')} />
      ) : (
        <STC.Content>{item.contents}</STC.Content>
      )}
      {showEditor && isMe === 'Y' ? (
        <STC.CommunityFooter>
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
        </STC.CommunityFooter>
      ) : (
        <STC.CommunityFooter>
          {isMe === 'Y' ? (
            <STC.Flex>
              <Button content={t('common_delete')} width="80px" type="secondary" size="small" handleClick={onDelete} />
              <Button content={t('common_edit')} width="80px" size="small" handleClick={changeToEditor} />
            </STC.Flex>
          ) : (
            <STC.Flex />
          )}
          <STC.CommentWrapper onClick={goToDetail}>
            <STC.CommentImage alt="" src={CommentImg} />
            <STC.CommentCount>{item.commentCount}</STC.CommentCount>
          </STC.CommentWrapper>
        </STC.CommunityFooter>
      )}
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

export default CommunityItem;
