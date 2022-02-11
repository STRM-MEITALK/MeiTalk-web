import React from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import InfiniteScroll from 'react-infinite-scroll-component';
import RequestStatus from '@lib/RequestStatus';
import useComment from './useComment';
import CommentItem from './CommentItem';
import * as STC from './Comment.style';

const Comment = () => {
  const { t } = useTranslation();
  const {
    commentText,
    commentList,
    totalElements,
    totalComments,
    commentListStatus,
    pageNo,
    onEnterComment,
    onChangeComment,
    onEnterkeyPress,
    fetchCommentList,
  } = useComment();

  return (
    <STC.Container>
      <STC.CommentTitle>{`${t('common_comments')}(${numberWithComma(totalComments)})`}</STC.CommentTitle>
      <STC.InputWrapper>
        <input
          placeholder={t('Leave the comment')}
          value={commentText}
          onChange={onChangeComment}
          onKeyPress={onEnterkeyPress}
        />
        <p onClick={onEnterComment}>{t('common_comment')}</p>
      </STC.InputWrapper>
      {totalElements === 0 &&
      (commentListStatus === RequestStatus.FAIL || commentListStatus === RequestStatus.SUCCESS) ? (
        <STC.NoCommentContainer>
          <STC.NoComment>{t('no_comment')}</STC.NoComment>
        </STC.NoCommentContainer>
      ) : (
        <STC.CommentList>
          <InfiniteScroll
            dataLength={commentList.length}
            next={() => {
              fetchCommentList(pageNo + 1);
            }}
            hasMore={!(totalElements === commentList.length)}
            loader={<span />}
            className="infinite"
          >
            {commentList.map((item) => (
              <CommentItem key={item.id} item={item} />
            ))}
          </InfiniteScroll>
        </STC.CommentList>
      )}
    </STC.Container>
  );
};

export default Comment;
