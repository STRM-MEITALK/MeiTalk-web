import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';

const useControls = ({
  player,
  setPlayed,
}: {
  player: React.RefObject<ReactPlayer>;
  setPlayed: (_: number) => void;
}) => {
  const [isShow, setIsShow] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const dispatch = useDispatch();

  const { isFullScreen } = useSelector(({ liveView }: any) => ({
    isFullScreen: liveView.isFullScreen,
  }));

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (e: any) => {
    if (player.current) {
      setSeeking(false);
      player.current.seekTo(parseFloat(e.target.value));
    }
  };

  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  };

  const onClickScreen = () => {
    setIsShow(true);
  };

  const changeScreen = () => {

  };

  return {
    isShow,
    seeking,
    isFullScreen,
    onClickScreen,
    handleSeekMouseDown,
    handleSeekMouseUp,
    handleSeekChange,
    changeScreen,
  };
};

export default useControls;
