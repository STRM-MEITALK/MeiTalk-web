import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { IReplyType } from '@type/commentType';
import Profile from '@components/Profile';
import MoreVerticalImg from '@images/more-vertical.png';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import useReplyItem from './useReplyItem';
import * as STC from './ReplyItem.style';

const ReplyItem = function ({ item }: { item: IReplyType }) {
  const { t } = useTranslation();
  const { menu, menuRef, isShowTBM, setIsShowTBM, onHandleShowMenu, onClickMenu, onDeleteReply } = useReplyItem({
    item,
  });

  return (
    <STC.Container>
      <Profile type="ps26" src={item.userPicture} channelId={item.channelId} />
      <STC.ReplyBlock>
        <STC.Flex>
          <STC.AccountName>{item.userName}</STC.AccountName>
          <STC.ReplyDate>{moment(item.createTime).format('YYYY.MM.DD')}</STC.ReplyDate>
        </STC.Flex>
        {/* {isEdit ? (
          <STC.EditBox>
            <STC.EditTextarea value={editContent} onChange={onHandleEditReply} />
            <STC.EditBtnWrapper>
              <STC.EditBtn onClick={onCancelEdit}>{t('common_cancel')}</STC.EditBtn>
              <STC.EditBtn type="U" onClick={onUpdateReply}>
                {t('common_update')}
              </STC.EditBtn>
            </STC.EditBtnWrapper>
          </STC.EditBox>
        ) : ( */}
        <STC.EditBox>
          <STC.ReplyText isDeleted={item.deleted}>
            {item.deleted ? t('comment_deleted') : item.replyContent}{' '}
          </STC.ReplyText>
          <STC.DeleteWrapper>
            {!item.deleted && (
              <STC.More>
                <STC.ReplyImg src={MoreVerticalImg} onClick={onHandleShowMenu} />
                {menu && (
                  <STC.MoreWrapper ref={menuRef}>
                    {/* <STC.MoreBtn onClick={() => onClickMenu('E')}>{t('edit')}</STC.MoreBtn> */}
                    <STC.MoreBtn onClick={() => onClickMenu('D')}>{t('common_delete')}</STC.MoreBtn>
                  </STC.MoreWrapper>
                )}
              </STC.More>
            )}
          </STC.DeleteWrapper>
        </STC.EditBox>
        {/* )} */}
      </STC.ReplyBlock>
      <TwoBtnModal
        isShow={isShowTBM}
        setIsShow={() => setIsShowTBM(!isShowTBM)}
        handleLeftBtn={() => setIsShowTBM(false)}
        handleRightBtn={onDeleteReply}
        btnLeftContent={t('no')}
        btnRightContent={t('yes')}
        content={t('reply_delete_msg')}
      />
    </STC.Container>
  );
};

export default ReplyItem;
