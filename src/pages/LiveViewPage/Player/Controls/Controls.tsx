import React from 'react';
import ReactPlayer from 'react-player';
import { FullScreenHandle } from 'react-full-screen';

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
import * as STC from './Controls.style';

interface IControls {
  playerWrapperRef: React.RefObject<HTMLDivElement>;
  player: React.RefObject<ReactPlayer>;
  handle: FullScreenHandle;
}

const Controls = ({ playerWrapperRef, player, handle }: IControls) => {
  const {
    settingBtnRef,
    volumeRef,
    volumeBtnRef,
    volumeMobileRef,
    captionRef,
    isStart,
    isShow,
    isShowSetting,
    volume,
    muted,
    isShowVolume,
    isFullScreen,
    useCaption,
    captionLang,
    captionArr,
    onClickScreen,
    onClickSetting,
    onLeaveScreen,
    changeScreen,
    handleVolumeChange,
    handleToogleMuted,
    handlePause,
    setIsShowSetting,
    setIsShow,
  } = useControls({ playerWrapperRef, player, handle });

  return (
    <STC.ControlsWrapper onMouseOver={onClickScreen} onMouseLeave={onLeaveScreen}>
      <STC.Container isShow={isShow}>
        <STC.CenterWrapper>
          <STC.ControllIcon src={isStart ? StopImg : PlayImg} onClick={handlePause} />
        </STC.CenterWrapper>
        <STC.Wrapper>
          <STC.SettingWrapper>
            <STC.Icon src={isStart ? StopImg : PlaySmallImg} onClick={handlePause} />
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
            isLive={true}
          />
        )}
        {isShowSetting && (
          <SettingMobileModal
            isShowSetting={isShowSetting}
            setIsShowSetting={setIsShowSetting}
            setIsShow={setIsShow}
            isLive={true}
          />
        )}
      </STC.Container>
      {useCaption && captionLang && captionArr.length > 0 && (
        <STC.Caption isShow={isShow}>
          <STC.CaptionWrapper ref={captionRef}>
            <STC.CaptionList>
              {captionArr.map((item) => (
                <>
                  <STC.CaptionText key={item.timeStamp}>{item[captionLang]}</STC.CaptionText>
                  <br />
                </>
              ))}
            </STC.CaptionList>
          </STC.CaptionWrapper>
        </STC.Caption>
      )}
    </STC.ControlsWrapper>
  );
};

export default Controls;
