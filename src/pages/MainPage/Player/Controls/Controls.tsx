import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
import { FullScreenHandle } from 'react-full-screen';

import SettingModal from '@components/Modal/SettingModal';
import SettingMobileModal from '@components/Modal/SettingMobileModal';
import VolumeImg from '@images/volume.png';
import MutedImg from '@images/muted.png';
import SettingImg from '@images/setting.png';
import FullImg from '@images/full.png';
import NotFullImg from '@images/notFull.png';
import useControls from './useControls';
import * as STC from './Controls.style';

interface IControls {
  playerWrapperRef: React.RefObject<HTMLDivElement>;
  player: React.RefObject<ReactPlayer>;
  handle: FullScreenHandle;
  isShowChat: boolean;
  visible: boolean;
  handleChangeIsShowChat: () => void;
  setVisibleLiveList: (_: boolean) => void;
}

const Controls = ({
  playerWrapperRef,
  player,
  handle,
  isShowChat,
  visible,
  handleChangeIsShowChat,
  setVisibleLiveList,
}: IControls) => {
  const { t } = useTranslation();
  const {
    settingBtnRef,
    volumeRef,
    volumeBtnRef,
    volumeMobileRef,
    isShowSetting,
    played,
    volume,
    muted,
    isShowVolume,
    isFullScreen,
    onClickSetting,
    changeScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    handleVolumeChange,
    handleToogleMuted,
    setIsShowSetting,
  } = useControls({
    player,
    handle,
    visible,
    setVisibleLiveList,
  });

  return (
    <STC.Container visible={visible}>
      <STC.Wrapper>
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
          <STC.Flex>
            <STC.LiveButton isShowChat={isShowChat} onClick={handleChangeIsShowChat}>
              {t('liveview_live_chatting')}
            </STC.LiveButton>
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
          {isShowSetting && (
            <SettingModal
              settingBtnRef={settingBtnRef}
              isShowSetting={isShowSetting}
              setIsShowSetting={setIsShowSetting}
              isLive={true}
            />
          )}
          {isShowSetting && (
            <SettingMobileModal
              isShowSetting={isShowSetting}
              setIsShowSetting={setIsShowSetting}
              setIsShow={setVisibleLiveList}
              isLive={true}
            />
          )}
        </STC.SettingWrapper>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default Controls;
