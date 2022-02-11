import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import detectMobile from '@lib/detectMobile';
import { numberFormatter } from '@lib/numberFormatter';
import useLiveViewLike from '@hooks/useLiveViewLike';
import { handlePreparingModal } from '@slice/globalModalSlice';
import useToast from '@components/Toast/useToast';
import IconBtn from '@components/IconBtn';
import ViewImg from '@images/view-m-detail.png';
import TimeImg from '@images/time-m-detail.png';
import Button from '@components/Button';
import Toggle from '@components/Toggle';
import Mic from '@images/mic-small.png';
import Cam from '@images/cam-small.png';
import LikeImg from '@images/like-pc-s.png';
import NoLikeImg from '@images/nolike.png';
import ShareImg from '@images/share.png';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import { sizes } from '@styles/media';
import * as STC from './MobileVideoInfo.style';
import { IBroadData } from '../BroadcastingType';

const MobileVideoInfo = ({
  broadData,
  isLiveFinish,
  timeText,
  isShowTitle,
  isShowDetail,
  likeCount,
  userCount,
  streamType,
  isStreamingState,
  innerWidth,
  disable,
  handleSourceToggle,
  setIsShowSM,
  setIsShowTitle,
  setIsShowDetail,
  setStopModal,
  setStartModal,
  handleShowViewers,
}: {
  broadData: IBroadData;
  isLiveFinish: boolean;
  timeText: string;
  isShowTitle: boolean;
  isShowDetail: boolean;
  likeCount: number;
  userCount: number;
  streamType: string;
  isStreamingState: string;
  innerWidth: number;
  disable: boolean;
  handleSourceToggle: (type: string) => void;
  setIsShowSM: (_: boolean) => void;
  setIsShowTitle: (_: boolean) => void;
  setIsShowDetail: (_: boolean) => void;
  setStopModal: (_: boolean) => void;
  setStartModal: (_: boolean) => void;
  handleShowViewers: () => void;
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useLiveViewLike();
  const { callToast } = useToast();

  return (
    <STC.MobileVideoInfo>
      <STC.PaddingWrapper>
        <STC.TitleBlock>
          {isLiveFinish ? (
            <STC.OfflineTag>{t('common_offline')}</STC.OfflineTag>
          ) : (
            <STC.LiveTag>{t('common_live')}</STC.LiveTag>
          )}
          <STC.Title isShowTitle={isShowTitle}>{broadData.title}</STC.Title>
          <STC.Arrow src={isShowTitle ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowTitle(!isShowTitle)} />
        </STC.TitleBlock>

        <STC.Flex>
          <STC.InfoBlock>
            <STC.TimeWrapper>
              <STC.Icon className="time" src={TimeImg} alt="time" />
              <STC.TimeText>{timeText}</STC.TimeText>
            </STC.TimeWrapper>
            <STC.Flex>
              <STC.ViewersIcon onClick={handleShowViewers}>
                <STC.Icon src={ViewImg} alt="view" />
              </STC.ViewersIcon>
              <STC.ViewCntText>{numberFormatter(userCount)}</STC.ViewCntText>
            </STC.Flex>
          </STC.InfoBlock>
        </STC.Flex>
      </STC.PaddingWrapper>
      <STC.InfoBlockDetail className="tr">
        <STC.IconWrapper>
          <IconBtn src={isLike ? LikeImg : NoLikeImg} text={numberFormatter(likeCount)} onClick={onToggleLike} />
          <IconBtn
            src={ShareImg}
            text={t('common_share')}
            onClick={() => {
              if (isStreamingState === 'streaming') {
                setIsShowSM(true);
              } else {
                callToast('아직 방송을 시작하지 않았습니다.');
              }
            }}
          />
        </STC.IconWrapper>
        <STC.Flex>
          {innerWidth > sizes.mobile && streamType === 'Liveview' && (
            <STC.MarginBlock isMargin={true}>
              <STC.InfoBlock className="tr">
                <STC.CamIcon className="time" src={Cam} alt="time" />
                <Toggle
                  type="media"
                  trueText="ON"
                  falseText="OFF"
                  handleToggleTrue={() => handleSourceToggle('video')}
                  handleToggleFalse={() => handleSourceToggle('video')}
                  defaultToggle={true}
                />

                <STC.MicIcon className="time" src={Mic} alt="time" />
                <Toggle
                  type="media"
                  trueText="ON"
                  falseText="OFF"
                  handleToggleTrue={() => handleSourceToggle('audio')}
                  handleToggleFalse={() => handleSourceToggle('audio')}
                  defaultToggle={true}
                />
              </STC.InfoBlock>
            </STC.MarginBlock>
          )}
          {isStreamingState === 'streaming' ? (
            <STC.InfoBlock isBtn={true}>
              <Button content={t('stop_live')} type="secondary" handleClick={() => setStopModal(true)} />
            </STC.InfoBlock>
          ) : (
            streamType === 'Liveview' && (
              <STC.InfoBlock isBtn={true}>
                <Button
                  content={t('go_live')}
                  type="primary"
                  handleClick={() => {
                    if (detectMobile()) {
                      dispatch(handlePreparingModal(true));
                    } else {
                      setStartModal(true);
                    }
                  }}
                  disable={disable}
                />
              </STC.InfoBlock>
            )
          )}
        </STC.Flex>
      </STC.InfoBlockDetail>

      <STC.CannelBlock>
        {broadData.detail !== '' && (
          <STC.DetailWrapper>
            <STC.DetailText isShowDetail={isShowDetail}>{broadData.detail}</STC.DetailText>
            <STC.Arrow src={isShowDetail ? ArrowUp : ArrowDown} alt="" onClick={() => setIsShowDetail(!isShowDetail)} />
          </STC.DetailWrapper>
        )}
      </STC.CannelBlock>
    </STC.MobileVideoInfo>
  );
};

export default MobileVideoInfo;
