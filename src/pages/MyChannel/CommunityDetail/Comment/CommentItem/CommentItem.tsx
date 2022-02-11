import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ICommentType } from '@type/communityType';
import { numberWithComma } from '@lib/numberWithComma';
import useReport from '@hooks/useReport';
import Profile from '@components/Profile';
import ReplyImg from '@images/comment-reply.png';
import ShowReplyImg from '@images/comment-show-reply.png';
import MoreVerticalImg from '@images/more-vertical.png';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import useCommentItem from './useCommentItem';
import ReplyItem from '../ReplyItem';
import * as STC from './CommentItem.style';

const CommentItem = ({ item }: { item: ICommentType }) => {
  const { t } = useTranslation();
  const { onToggleReport } = useReport();
  const {
    owner,
    showReply,
    showInput,
    replyText,
    replyListById,
    myPostReply,
    menu,
    menuRef,
    isEdit,
    editContent,
    isShowTBM,
    setIsShowTBM,
    onChangeReply,
    onHandleShowReply,
    onHandleShowInput,
    onHandleShowMenu,
    onHandleEditContent,
    onEnterReply,
    onClickMenu,
    onCancelEdit,
    onUpdateComment,
    onDeleteComment,
  } = useCommentItem({ item });

  return (
    <STC.Container>
      <Profile type="ps36" src={item.userPicture} isOwner={owner === item.userNo} channelId={item.channelId} />
      <STC.CommentBlock>
        <STC.Flex>
          <STC.AccountName>{item.userName}</STC.AccountName>
          <STC.CommentDate>{moment(item.updateTime).format('YYYY.MM.DD')}</STC.CommentDate>
        </STC.Flex>
        {isEdit ? (
          <STC.EditBox>
            <STC.EditTextarea value={editContent} onChange={onHandleEditContent} />
            <STC.EditBtnWrapper>
              <STC.EditBtn onClick={onCancelEdit}>{t('common_cancel')}</STC.EditBtn>
              <STC.EditBtn type="U" onClick={onUpdateComment}>
                {t('common_update')}
              </STC.EditBtn>
            </STC.EditBtnWrapper>
          </STC.EditBox>
        ) : (
          <STC.CommentText isDeleted={item.deleted}>
            {item.deleted ? t('comment_deleted') : item.commentContent}
          </STC.CommentText>
        )}
        <STC.Flex>
          <STC.CommentInfo>
            <STC.Flex>
              <STC.CommentImg src={showReply ? ShowReplyImg : ReplyImg} onClick={onHandleShowReply} />
              <STC.CntText>{numberWithComma(item.replyCount)}</STC.CntText>
            </STC.Flex>
            {!item.deleted && (
              <STC.ReplyButton
                type="button"
                value={t('comment_camel_reply').toString()}
                onClick={() => onHandleShowInput(true)}
              />
            )}
          </STC.CommentInfo>
          {!isEdit && !item.deleted && (
            <STC.More>
              <STC.CommentImg src={MoreVerticalImg} onClick={onHandleShowMenu} />
              {item.userNo.toString() === sessionStorage.getItem('userId')
                ? menu && (
                    <STC.MoreWrapper ref={menuRef}>
                      <STC.MoreBtn onClick={() => onClickMenu('E')}>{t('edit')}</STC.MoreBtn>
                      <STC.MoreBtn onClick={() => onClickMenu('D')}>{t('common_delete')}</STC.MoreBtn>
                    </STC.MoreWrapper>
                  )
                : menu && (
                    <STC.MoreWrapper ref={menuRef}>
                      <STC.MoreBtn onClick={onToggleReport}>{t('common_report')}</STC.MoreBtn>
                    </STC.MoreWrapper>
                  )}
            </STC.More>
          )}
        </STC.Flex>
        {showInput && (
          <STC.EditBox>
            <STC.EditTextarea value={replyText} placeholder={t('reply_placeholder')} onChange={onChangeReply} />
            <STC.EditBtnWrapper>
              <STC.EditBtn onClick={() => onHandleShowInput(false)}>{t('common_cancel')}</STC.EditBtn>
              <STC.EditBtn type="R" onClick={onEnterReply}>
                {t('comment_camel_reply')}
              </STC.EditBtn>
            </STC.EditBtnWrapper>
          </STC.EditBox>
        )}
        {showReply ? (
          <STC.ReplyWrapper>
            {replyListById.map((rItem) => (
              <ReplyItem key={rItem.id} item={rItem} />
            ))}
          </STC.ReplyWrapper>
        ) : (
          <STC.ReplyWrapper>
            {myPostReply.map((rItem) => (
              <ReplyItem key={rItem.id} item={rItem} />
            ))}
          </STC.ReplyWrapper>
        )}
      </STC.CommentBlock>
      <TwoBtnModal
        isShow={isShowTBM}
        setIsShow={() => setIsShowTBM(!isShowTBM)}
        handleLeftBtn={() => setIsShowTBM(false)}
        handleRightBtn={onDeleteComment}
        btnLeftContent={t('no')}
        btnRightContent={t('yes')}
        content={t('comment_delete_msg')}
      />
    </STC.Container>
  );
};

export default CommentItem;
