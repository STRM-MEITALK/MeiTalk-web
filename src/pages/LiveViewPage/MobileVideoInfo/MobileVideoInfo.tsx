import React, { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { numberWithComma } from '@lib/numberWithComma';
import { ILiveViewInfoType } from '@type/liveViewType';
import useLiveViewLike from '@hooks/useLiveViewLike';
import useLiveViewSave from '@hooks/useLiveViewSave';
import useReport from '@hooks/useReport';
import IconBtn from '@components/IconBtn';
import Profile from '@components/Profile';
import ViewImg from '@images/view-m-detail.png';
import TimeImg from '@images/time-m-detail.png';
import ChatImg from '@images/comment-detail.png';
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
  liveViewInfo,
  isLiveFinish,
  showChat,
  streamTime,
  isShowDetail,
  isShowTitle,
  setIsShowSM,
  onHandleShowChat,
  goToChannel,
  setIsShowDetail,
  setIsShowTitle,
}: {
  liveViewInfo: ILiveViewInfoType;
  isLiveFinish: boolean;
  showChat: boolean;
  isShowDetail: boolean;
  streamTime: string;
  isShowTitle: boolean;
  setIsShowSM: (_: boolean) => void;
  onHandleShowChat: () => void;
  goToChannel: (_: MouseEvent<HTMLElement>) => void;
  setIsShowDetail: (_: boolean) => void;
  setIsShowTitle: (_: boolean) => void;
}) => {
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useLiveViewLike();
  const { isSave, onToggleSave } = useLiveViewSave();
  const { onToggleReport } = useReport();

  return (
    <STC.MobileVideoInfo>
      <STC.PaddingWrapper>
        <STC.TitleBlock>
          <STC.TitleBlock>
            {isLiveFinish ? (
              <STC.OfflineTag>{t('common_offline')}</STC.OfflineTag>
            ) : (
              <STC.LiveTag>{t('common_live')}</STC.LiveTag>
            )}
            <STC.Title isShowTitle={isShowTitle}>{liveViewInfo.title}</STC.Title>
          </STC.TitleBlock>
          <STC.Arrow src={isShowTitle ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowTitle(!isShowTitle)} />
        </STC.TitleBlock>
        {!showChat && (
          <STC.Flex>
            <STC.InfoBlock>
              <STC.TimeWrapper>
                <STC.Icon className="time" src={TimeImg} alt="time" />
                <STC.TimeText>{streamTime}</STC.TimeText>
              </STC.TimeWrapper>
              <STC.Flex>
                <STC.Icon src={ViewImg} alt="view" />
                <STC.ViewCntText>{numberWithComma(liveViewInfo.viewCount)}</STC.ViewCntText>
              </STC.Flex>
            </STC.InfoBlock>
          </STC.Flex>
        )}
      </STC.PaddingWrapper>
      {!showChat && (
        <>
          <STC.IconWrapper>
            <IconBtn
              src={isLike ? LikeImg : NoLikeImg}
              text={numberWithComma(liveViewInfo.likeCount)}
              onClick={onToggleLike}
            />
            <IconBtn src={isSave ? SaveImg : NoSaveImg} text={t('common_save')} onClick={onToggleSave} />
            <IconBtn src={ReportImg} text={t('common_report')} onClick={onToggleReport} />
            <IconBtn src={ShareImg} text={t('common_share')} onClick={() => setIsShowSM(true)} />
            <IconBtn src={ChatImg} text={t('common_chat')} onClick={onHandleShowChat} />
          </STC.IconWrapper>
          <STC.CannelBlock>
            <STC.ProfileWrapper>
              <Profile type="ps36" src={liveViewInfo.profile} channelId={liveViewInfo.channelId} />
              <STC.ChannelText onClick={goToChannel}>{liveViewInfo.name}</STC.ChannelText>
            </STC.ProfileWrapper>
            {liveViewInfo.detail !== null && liveViewInfo.detail !== '' && (
              <STC.DetailWrapper>
                <STC.DetailText isShowDetail={isShowDetail}>{liveViewInfo.detail}</STC.DetailText>
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
