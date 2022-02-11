import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import detectMobile from '@lib/detectMobile';
import { numberFormatter } from '@lib/numberFormatter';
import useLiveViewLike from '@hooks/useLiveViewLike';
import { handlePreparingModal } from '@slice/globalModalSlice';
import useToast from '@components/Toast/useToast';
import IconBtn from '@components/IconBtn';
import Button from '@components/Button';
import Toggle from '@components/Toggle';
import TimeImg from '@images/time-detail.png';
import ViewImg from '@images/view-detail.png';
import LikeImg from '@images/like-pc-s.png';
import Mic from '@images/mic-small.png';
import Cam from '@images/cam-small.png';
import NoLikeImg from '@images/nolike.png';
import ShareImg from '@images/share.png';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import * as STC from './PCVideoInfo.style';
import { IBroadData } from '../BroadcastingType';

const PCVideoInfo = ({
  broadData,
  isLiveFinish,
  timeText,
  isShowTitle,
  likeCount,
  userCount,
  streamType,
  isStreamingState,
  disable,
  handleSourceToggle,
  setIsShowSM,
  setIsShowTitle,
  setStopModal,
  setStartModal,
  handleShowViewers,
}: {
  broadData: IBroadData;
  isLiveFinish: boolean;
  timeText: string;
  isShowTitle: boolean;
  likeCount: number;
  userCount: number;
  streamType: string;
  isStreamingState: string;
  disable: boolean;
  handleSourceToggle: (type: string) => void;
  setIsShowSM: (_: boolean) => void;
  setIsShowTitle: (_: boolean) => void;
  setStopModal: (_: boolean) => void;
  setStartModal: (_: boolean) => void;
  handleShowViewers: () => void;
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useLiveViewLike();
  const { callToast } = useToast();

  return (
    <STC.PCVideoInfo>
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
        <STC.InfoBlock className="tr">
          <STC.TimeWrapper>
            <STC.Icon src={TimeImg} alt="time" />
            <STC.TimeText>{timeText}</STC.TimeText>
          </STC.TimeWrapper>
          <STC.ViewersIcon onClick={handleShowViewers}>
            <STC.Icon src={ViewImg} alt="view" />
          </STC.ViewersIcon>
          <STC.ViewCntText>{numberFormatter(userCount)}</STC.ViewCntText>
        </STC.InfoBlock>
        <STC.InfoBlock className="tr">
          <STC.MarginBlock isMargin={streamType === 'external' && isStreamingState !== 'ready'}>
            <STC.Flex>
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
            </STC.Flex>
          </STC.MarginBlock>

          {streamType === 'Liveview' && (
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
        </STC.InfoBlock>
      </STC.Flex>
    </STC.PCVideoInfo>
  );
};

export default PCVideoInfo;
