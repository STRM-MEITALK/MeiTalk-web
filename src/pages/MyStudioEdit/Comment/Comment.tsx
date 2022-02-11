import React from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import xMarkImg from '@images/xMark.png';
import { ICommentType } from './CommentType';
import useComment from './useComment';
import CommentItem from './CommentItem';
import * as STC from './Comment.style';

const Comment = function ({ onHandleShowComment, commentHeight }: ICommentType) {
  const { t } = useTranslation();
  const { commentScrollRef, commentList, totalComments, handelInfiniteScroll } = useComment();

  return (
    <STC.Container>
      <STC.Header>
        <p>{t('common_comment')}</p>
        <STC.CommentCount>{`(${numberWithComma(totalComments)})`}</STC.CommentCount>
        <STC.HeaderBtn onClick={() => onHandleShowComment(false)}>
          <STC.HeaderImg src={xMarkImg} />
        </STC.HeaderBtn>
      </STC.Header>
      <STC.CommentContainer ref={commentScrollRef} commentHeight={commentHeight} onScroll={handelInfiniteScroll}>
        <STC.Gradient />
        {commentList.length !== 0 && (
          <STC.CommentList>
            {commentList.map((item) => (
              <CommentItem key={item.id} item={item} />
            ))}
          </STC.CommentList>
        )}

        {commentList.length === 0 && <STC.CommentNoList>{t('no_comment')}</STC.CommentNoList>}
      </STC.CommentContainer>
    </STC.Container>
  );
};

export default Comment;
