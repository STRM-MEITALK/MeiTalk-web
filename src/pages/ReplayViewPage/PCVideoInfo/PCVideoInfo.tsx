import React, { useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import { IReplayViewInfoType } from '@type/replayViewType';
import useReplayViewLike from '@hooks/useReplayViewLike';
import useReplayViewSave from '@hooks/useReplayViewSave';
import useReport from '@hooks/useReport';
import IconBtn from '@components/IconBtn';
import ViewImg from '@images/view-detail.png';
import CommentImg from '@images/comment-detail.png';
import LikeImg from '@images/like-pc-s.png';
import NoLikeImg from '@images/nolike.png';
import SaveImg from '@images/save.png';
import NoSaveImg from '@images/nosave.png';
import ReportImg from '@images/report.png';
import ShareImg from '@images/share.png';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import * as STC from './PCVideoInfo.style';

const PCVideoInfo = ({
  replayViewInfo,
  showComment,
  isShowTitle,
  setIsShowSM,
  onHandleShowComment,
  setIsShowTitle,
}: {
  replayViewInfo: IReplayViewInfoType;
  showComment: boolean;
  isShowTitle: boolean;
  setIsShowSM: (_: boolean) => void;
  onHandleShowComment: () => void;
  setIsShowTitle: (_: boolean) => void;
}) => {
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useReplayViewLike();
  const { isSave, onToggleSave } = useReplayViewSave();
  const { onToggleReport } = useReport();

  return (
    <STC.PCVideoInfo showComment={showComment}>
      <STC.TitleBlock>
        <STC.Title isShowTitle={isShowTitle}>{replayViewInfo.title}</STC.Title>
        <STC.Arrow src={isShowTitle ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowTitle(!isShowTitle)} />
      </STC.TitleBlock>
      <STC.Flex>
        <STC.InfoBlock>
          <STC.DateText>
            {replayViewInfo.streamTime !== '' && moment(replayViewInfo.streamTime).format('YYYY.MM.DD')}
          </STC.DateText>
          <STC.Icon src={ViewImg} alt="view" />
          <STC.ViewCntText>{numberWithComma(replayViewInfo.viewCount)}</STC.ViewCntText>
        </STC.InfoBlock>
        <STC.InfoBlock>
          <IconBtn
            src={isLike ? LikeImg : NoLikeImg}
            text={numberWithComma(replayViewInfo.likeCount)}
            onClick={onToggleLike}
          />
          <IconBtn src={isSave ? SaveImg : NoSaveImg} text={t('common_save')} onClick={onToggleSave} />
          <IconBtn src={ReportImg} text={t('common_report')} onClick={onToggleReport} />
          <IconBtn src={ShareImg} text={t('common_share')} onClick={() => setIsShowSM(true)} />
          {!showComment && <IconBtn src={CommentImg} text={t('common_comment')} onClick={onHandleShowComment} />}
        </STC.InfoBlock>
      </STC.Flex>
    </STC.PCVideoInfo>
  );
};

export default PCVideoInfo;
