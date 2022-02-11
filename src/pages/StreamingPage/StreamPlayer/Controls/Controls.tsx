import React from 'react';
import ReactPlayer from 'react-player';
import VolumeImg from '@images/volume.png';
import SettingImg from '@images/setting.png';
import FullImg from '@images/full.png';
import notFullImg from '@images/notFull.png';
import useControls from './useControls';
import * as STC from './Controls.style';

const Controls = ({
  player,
  played,
  setPlayed,
}: {
  player: React.RefObject<ReactPlayer>;
  played: number;
  setPlayed: (_: number) => void;
}) => {
  const {
    isShow,
    isFullScreen,
    onClickScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    changeScreen,
  } = useControls({
    player,
    setPlayed,
  });

  return (
    <STC.Container onClick={onClickScreen} isShow={isShow}>
      <STC.Wrapper>
        <STC.SeekRange>
          <input
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
        </STC.SeekRange>
        <STC.SettingWrapper>
          <STC.Icon src={VolumeImg} />
          <STC.Icon src={SettingImg} />
          <STC.ControllButton onClick={changeScreen}>
            <STC.Icon src={isFullScreen ? notFullImg : FullImg} />
          </STC.ControllButton>
        </STC.SettingWrapper>
      </STC.Wrapper>
    </STC.Container>
  );
};

export default Controls;
