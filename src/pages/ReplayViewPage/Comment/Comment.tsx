import React from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import RequestStatus from '@lib/RequestStatus';
import xMarkImg from '@images/xMark.png';
import { ICommentType } from './CommentType';
import useComment from './useComment';
import CommentItem from './CommentItem';
import * as STC from './Comment.style';

const Comment = function ({ onHandleShowComment, commentHeight }: ICommentType) {
  const { t } = useTranslation();
  const {
    commentScrollRef,
    commentText,
    commentList,
    isFocus,
    totalElements,
    totalComments,
    commentListStatus,
    onEnterComment,
    setIsFocus,
    onChangeComment,
    onEnterkeyPress,
    handelInfiniteScroll,
  } = useComment();

  return (
    <STC.Container>
      <STC.Header>
        <p>{t('common_comment')}</p>
        <STC.CommentCount>{`(${numberWithComma(totalComments)})`}</STC.CommentCount>
        <STC.HeaderBtn onClick={() => onHandleShowComment(false)}>
          <STC.HeaderImg src={xMarkImg} />
        </STC.HeaderBtn>
      </STC.Header>
      {totalElements === 0 &&
      (commentListStatus === RequestStatus.FAIL || commentListStatus === RequestStatus.SUCCESS) ? (
        <STC.NoCommentContainer ref={commentScrollRef} commentHeight={commentHeight}>
          <STC.NoComment>{t('no_comment')}</STC.NoComment>
        </STC.NoCommentContainer>
      ) : (
        <STC.CommentContainer ref={commentScrollRef} commentHeight={commentHeight} onScroll={handelInfiniteScroll}>
          <STC.CommentList>
            {commentList.map((item) => (
              <CommentItem key={item.id} item={item} />
            ))}
          </STC.CommentList>
        </STC.CommentContainer>
      )}
      <STC.Footer>
        <STC.SubmitContainer isFocus={isFocus}>
          <STC.Input
            placeholder={t('comment_plceholder')}
            value={commentText}
            onChange={onChangeComment}
            onKeyPress={onEnterkeyPress}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <STC.Button onClick={onEnterComment}>{t('common_comment')}</STC.Button>
        </STC.SubmitContainer>
      </STC.Footer>
    </STC.Container>
  );
};

export default Comment;
