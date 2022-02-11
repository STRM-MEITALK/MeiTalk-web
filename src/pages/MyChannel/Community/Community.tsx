import React from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import RequestStatus from '@lib/RequestStatus';
import PostImg from '@images/post.png';
import Profile from '@components/Profile';
import Button from '@components/Button';

import useCommunity from './useCommunity';
import CommunityItem from './CommunityItem';
import * as STC from './Community.style';

const Community = () => {
  const { t } = useTranslation();
  const { channelId } = useParams();

  const {
    showEditor,
    contents,
    communityList,
    communityListStatus,
    pageNo,
    totalElements,
    isMe,
    userProfile,
    handleShowEditor,
    onChangeEditor,
    onPost,
    fetchCommunityList,
  } = useCommunity();

  return (
    <STC.Container>
      <STC.CommunityHeader>
        <STC.Title>{t('community_title')}</STC.Title>
        {isMe === 'Y' && (
          <STC.PostBtn onClick={() => handleShowEditor(true)}>
            <p>{t('community_post')}</p>
            <img src={PostImg} alt="" />
          </STC.PostBtn>
        )}
      </STC.CommunityHeader>
      {showEditor && isMe === 'Y' && (
        <STC.EditorWrapper>
          <STC.EditorHeader>
            <STC.Flex>
              <Profile
                type="ps36"
                mType="ps20"
                src={userProfile.userPicture}
                channelId={channelId ? parseInt(channelId) : null}
              />
              <STC.ChannelName>{userProfile.userName}</STC.ChannelName>
            </STC.Flex>
            <STC.Date>{moment().format('YYYY.MM.DD')}</STC.Date>
          </STC.EditorHeader>
          <STC.Editor onChange={onChangeEditor} value={contents} placeholder={t('community_editor_placeholder')} />
          <STC.EditorFooter>
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
              disable={contents === ''}
              handleClick={() => onPost()}
            />
          </STC.EditorFooter>
        </STC.EditorWrapper>
      )}
      {communityListStatus === RequestStatus.SUCCESS && communityList.length === 0 ? (
        <STC.NoData noData={t('common_nolist')} />
      ) : (
        <InfiniteScroll
          dataLength={communityList.length}
          next={() => {
            fetchCommunityList(pageNo + 1);
          }}
          hasMore={!(totalElements === communityList.length)}
          loader={<span />}
        >
          {communityList.map((item) => (
            <CommunityItem key={item.id} item={item} />
          ))}
        </InfiniteScroll>
      )}
    </STC.Container>
  );
};

export default Community;
