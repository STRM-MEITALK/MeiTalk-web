import React, { MouseEvent } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import { IReplayViewInfoType } from '@type/replayViewType';
import useReplayViewLike from '@hooks/useReplayViewLike';
import useReplayViewSave from '@hooks/useReplayViewSave';
import useReport from '@hooks/useReport';
import IconBtn from '@components/IconBtn';
import Profile from '@components/Profile';
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
import * as STC from './MobileVideoInfo.style';

const MobileVideoInfo = ({
  replayViewInfo,
  showComment,
  isShowDetail,
  isShowTitle,
  setIsShowSM,
  onHandleShowComment,
  goToChannel,
  setIsShowDetail,
  setIsShowTitle,
}: {
  replayViewInfo: IReplayViewInfoType;
  showComment: boolean;
  isShowDetail: boolean;
  isShowTitle: boolean;
  setIsShowSM: (_: boolean) => void;
  onHandleShowComment: () => void;
  goToChannel: (_: MouseEvent<HTMLElement>) => void;
  setIsShowDetail: (_: boolean) => void;
  setIsShowTitle: (_: boolean) => void;
}) => {
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useReplayViewLike();
  const { isSave, onToggleSave } = useReplayViewSave();
  const { onToggleReport } = useReport();

  return (
    <STC.MobileVideoInfo>
      <STC.PaddingWrapper>
        <STC.TitleBlock>
          <STC.Title isShowTitle={isShowTitle}>{replayViewInfo.title}</STC.Title>
          <STC.Arrow src={isShowTitle ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowTitle(!isShowTitle)} />
        </STC.TitleBlock>
        {!showComment && (
          <STC.Flex>
            <STC.InfoBlock>
              <STC.Flex>
                <STC.DateText>
                  {replayViewInfo.streamTime !== '' && moment(replayViewInfo.streamTime).format('YYYY.MM.DD')}
                </STC.DateText>
              </STC.Flex>
              <STC.Flex>
                <STC.Icon src={ViewImg} alt="view" />
                <STC.ViewCntText>{numberWithComma(replayViewInfo.viewCount)}</STC.ViewCntText>
              </STC.Flex>
            </STC.InfoBlock>
          </STC.Flex>
        )}
      </STC.PaddingWrapper>
      {!showComment && (
        <>
          <STC.IconWrapper>
            <IconBtn
              src={isLike ? LikeImg : NoLikeImg}
              text={numberWithComma(replayViewInfo.likeCount)}
              onClick={onToggleLike}
            />
            <IconBtn src={isSave ? SaveImg : NoSaveImg} text={t('common_save')} onClick={onToggleSave} />
            <IconBtn src={ReportImg} text={t('common_report')} onClick={onToggleReport} />
            <IconBtn src={ShareImg} text={t('common_share')} onClick={() => setIsShowSM(true)} />
            <IconBtn src={CommentImg} text={t('common_comment')} onClick={onHandleShowComment} />
          </STC.IconWrapper>
          <STC.CannelBlock showComment={showComment}>
            <STC.ProfileWrapper>
              <Profile type="ps36" src={replayViewInfo.profile} channelId={replayViewInfo.channelId} />
              <STC.ChannelText onClick={goToChannel}>{replayViewInfo.name}</STC.ChannelText>
            </STC.ProfileWrapper>
            {replayViewInfo.detail !== null && replayViewInfo.detail !== '' && (
              <STC.DetailWrapper>
                <STC.DetailText isShowDetail={isShowDetail}>{replayViewInfo.detail}</STC.DetailText>
                <STC.Arrow
                  src={isShowDetail ? ArrowUp : ArrowDown}
                  alt=""
                  onClick={() => setIsShowDetail(!isShowDetail)}
                />
              </STC.DetailWrapper>
            )}
          </STC.CannelBlock>
        </>
      )}
    </STC.MobileVideoInfo>
  );
};

export default MobileVideoInfo;
