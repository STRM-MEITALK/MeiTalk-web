import React from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import { ILiveViewInfoType } from '@type/liveViewType';
import useLiveViewLike from '@hooks/useLiveViewLike';
import useLiveViewSave from '@hooks/useLiveViewSave';
import useReport from '@hooks/useReport';
import IconBtn from '@components/IconBtn';
import TimeImg from '@images/time-detail.png';
import ViewImg from '@images/view-detail.png';
import LikeImg from '@images/like-pc-s.png';
import NoLikeImg from '@images/nolike.png';
import SaveImg from '@images/save.png';
import NoSaveImg from '@images/nosave.png';
import ReportImg from '@images/report.png';
import ShareImg from '@images/share.png';
import ChatImg from '@images/comment-detail.png';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import * as STC from './PCVideoInfo.style';

const PCVideoInfo = ({
  liveViewInfo,
  isLiveFinish,
  showChat,
  streamTime,
  isShowTitle,
  setIsShowSM,
  handleShowChat,
  setIsShowTitle,
}: {
  liveViewInfo: ILiveViewInfoType;
  isLiveFinish: boolean;
  showChat: boolean;
  streamTime: string;
  isShowTitle: boolean;
  setIsShowSM: (_: boolean) => void;
  handleShowChat: () => void;
  setIsShowTitle: (_: boolean) => void;
}) => {
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useLiveViewLike();
  const { isSave, onToggleSave } = useLiveViewSave();
  const { onToggleReport } = useReport();

  return (
    <STC.PCVideoInfo showChat={showChat}>
      <STC.TitleBlock>
        <STC.TitleWrapper>
          {isLiveFinish ? (
            <STC.OfflineTag>{t('common_offline')}</STC.OfflineTag>
          ) : (
            <STC.LiveTag>{t('common_live')}</STC.LiveTag>
          )}
          <STC.Title isShowTitle={isShowTitle}>{liveViewInfo.title}</STC.Title>
        </STC.TitleWrapper>
        <STC.Arrow src={isShowTitle ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowTitle(!isShowTitle)} />
      </STC.TitleBlock>
      <STC.Flex>
        <STC.InfoBlock className="tr">
          <STC.TimeWrapper>
            <STC.Icon src={TimeImg} alt="time" />
            <STC.TimeText>{streamTime}</STC.TimeText>
          </STC.TimeWrapper>
          <STC.Icon src={ViewImg} alt="view" />
          <STC.ViewCntText>{numberWithComma(liveViewInfo.viewCount)}</STC.ViewCntText>
        </STC.InfoBlock>
        <STC.InfoBlock>
          <IconBtn src={isLike ? LikeImg : NoLikeImg} text={liveViewInfo.likeCount.toString()} onClick={onToggleLike} />
          <IconBtn src={isSave ? SaveImg : NoSaveImg} text={t('common_save')} onClick={onToggleSave} />
          <IconBtn src={ReportImg} text={t('common_report')} onClick={onToggleReport} />
          <IconBtn src={ShareImg} text={t('common_share')} onClick={() => setIsShowSM(true)} />
          {!showChat && <IconBtn src={ChatImg} text={t('common_chat')} onClick={handleShowChat} />}
        </STC.InfoBlock>
      </STC.Flex>
    </STC.PCVideoInfo>
  );
};

export default PCVideoInfo;
