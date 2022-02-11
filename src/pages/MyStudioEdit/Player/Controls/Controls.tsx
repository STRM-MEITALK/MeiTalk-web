import React from 'react';
import ReactPlayer from 'react-player';
import { FullScreenHandle } from 'react-full-screen';
import { useTranslation } from 'react-i18next';

import { secondsFormat } from '@lib/secondsFormat';
import useControls from '@hooks/useControls';
import SettingModal from '@components/Modal/SettingModal';
import SettingMobileModal from '@components/Modal/SettingMobileModal';
import VolumeImg from '@images/volume.png';
import MutedImg from '@images/muted.png';
import SettingImg from '@images/setting.png';
import FullImg from '@images/full.png';
import NotFullImg from '@images/notFull.png';
import PlayImg from '@images/play.png';
import PlaySmallImg from '@images/play-small.png';
import StopImg from '@images/stop.png';
import BeforeImg from '@images/before-10.png';
import AfterImg from '@images/after-10.png';
import * as STC from './Controls.style';

interface IControls {
  playerWrapperRef: React.RefObject<HTMLDivElement>;
  player: React.RefObject<ReactPlayer>;
  handle: FullScreenHandle;
  captionObj: Record<string, { text: string; timeStamp: string }[]> | null;
}

const Controls = ({ playerWrapperRef, player, handle, captionObj }: IControls) => {
  const { t } = useTranslation();
  const {
    settingBtnRef,
    volumeRef,
    volumeBtnRef,
    volumeMobileRef,
    isShow,
    isShowSetting,
    isPlay,
    played,
    duration,
    volume,
    muted,
    isShowVolume,
    isFullScreen,
    useCaption,
    captionLang,
    onClickScreen,
    onClickSetting,
    onLeaveScreen,
    changeScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    handlePause,
    handleVolumeChange,
    handleSeekPre,
    handleSeekNext,
    handleToogleMuted,
    setIsShowSetting,
    setIsShow,
  } = useControls({
    playerWrapperRef,
    player,
    handle,
  });

  return (
    <STC.ControlsWrapper onMouseOver={onClickScreen} onMouseLeave={onLeaveScreen}>
      <STC.Container isShow={isShow}>
        <STC.CenterWrapper>
          <STC.ControllIcon src={BeforeImg} onClick={handleSeekPre} />
          <STC.ControllIcon src={isPlay ? StopImg : PlayImg} onClick={handlePause} />
          <STC.ControllIcon src={AfterImg} onClick={handleSeekNext} />
        </STC.CenterWrapper>
        <STC.Wrapper>
          <STC.Time>
            {secondsFormat(duration * played)} / {secondsFormat(duration)}
          </STC.Time>
          <STC.SeekRange value={played * 100}>
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onMouseUp={handleSeekMouseUp}
              onTouchStart={handleSeekMouseDown}
              onTouchEnd={handleSeekMouseUp}
              onPointerDown={handleSeekMouseDown}
              onPointerUp={handleSeekMouseUp}
              onChange={handleSeekChange}
            />
          </STC.SeekRange>
          <STC.SettingWrapper>
            <STC.Icon src={isPlay ? StopImg : PlaySmallImg} onClick={handlePause} />
            <STC.Flex>
              <STC.VolumePCWrapper>
                {isShowVolume && (
                  <STC.VolumeRange ref={volumeRef} value={volume * 100}>
                    <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
                  </STC.VolumeRange>
                )}
                <STC.Icon ref={volumeBtnRef} src={muted ? MutedImg : VolumeImg} onClick={handleToogleMuted} />
              </STC.VolumePCWrapper>
              <STC.VolumeMobileWrapper ref={volumeMobileRef} isShowVolume={isShowVolume}>
                <STC.Icon src={muted ? MutedImg : VolumeImg} onPointerDown={handleToogleMuted} />
                {isShowVolume && (
                  <STC.VolumeRange value={volume * 100}>
                    <input type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
                  </STC.VolumeRange>
                )}
              </STC.VolumeMobileWrapper>
              <STC.Icon isShowVolume={isShowVolume} ref={settingBtnRef} src={SettingImg} onClick={onClickSetting} />
              <STC.Icon
                isShowVolume={isShowVolume}
                src={isFullScreen ? NotFullImg : FullImg}
                onClick={() => changeScreen()}
              />
            </STC.Flex>
          </STC.SettingWrapper>
        </STC.Wrapper>
        {isShowSetting && (
          <SettingModal
            settingBtnRef={settingBtnRef}
            isShowSetting={isShowSetting}
            setIsShowSetting={setIsShowSetting}
            isLive={false}
          />
        )}
        {isShowSetting && (
          <SettingMobileModal
            isShowSetting={isShowSetting}
            setIsShowSetting={setIsShowSetting}
            setIsShow={setIsShow}
            isLive={false}
          />
        )}
      </STC.Container>
    </STC.ControlsWrapper>
  );
};

export default Controls;
