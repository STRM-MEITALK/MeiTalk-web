import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import moment from 'moment';
import { setPlaybackTrigger, setPlaybackWrap } from '@slice/broadSlice';
import { setPlaybackUrl } from '@lib/setPlaybackUrl';
import { setTimeZone } from '@lib/setTimeZone';
import { RootState } from '@src/stores';

const useStreamPlayer = function () {
  const dispatch = useDispatch();
  let load = false;
  const [url, setUrl] = useState<string>('');
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [played, setPlayed] = useState<number>(0);
  const [trigger, setTrigger] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [diffSecond, setDiffSecond] = useState<number | null>(null);
  const ref = useRef<any>(null);

  const { channel, isStreaming, startTime, playback, playbackWrap } = useSelector(({ broad }: RootState) => ({
    channel: broad.createChannelResult.data,
    isStreaming: broad.isStreaming,
    startTime: broad.startTime,
    playback: broad.playback,
    playbackWrap: broad.playbackWrap,
  }));

  const handlePlaybackTrigger = () => {
    dispatch(setPlaybackTrigger({ type: 'error' }));
  };

  const handlePlay = () => {
    setTimeout(() => {
      setIsPlay(true);
    }, 100);
  };

  const generateDiffSecond = () => {
    const diff = moment.duration(setTimeZone(new Date()).diff(setTimeZone(startTime ?? '')));
    setDiffSecond(diff.asSeconds());
  };

  const handleReadyPlay = () => {
    generateDiffSecond();
  };

  useEffect(() => {
    if (ref?.current && diffSecond) {
      if (diffSecond < 40) {
        setTimeout(() => {
          ref?.current?.player.player.hls.recoverMediaError();
          dispatch(setPlaybackWrap({ trigger: false }));
        }, 5000);
      } else {
        dispatch(setPlaybackWrap({ trigger: false }));
      }
    }
  }, [diffSecond]);

  const handleProgress = useCallback((e) => {
    setPlayed(e.played);
  }, []);

  const onDuration = useCallback((duration) => {
    setDuration(duration);
  }, []);

  const handleErrorSeekToPre = () => {
    if (ref.current) {
      const move = 1 / (duration / (duration * played - 10));
      ref?.current.seekTo(move < 0 ? 0 : move);
    }
  };

  const onCanPlay = useCallback(() => {
    if (!load) {
      load = true;
      ref.current?.seekTo(0.9);
    }
  }, []);

  return {
    url,
    isPlay,
    played,
    ref,
    playback,
    handlePlay,
    onDuration,
    setPlayed,
    handleProgress,
    handlePlaybackTrigger,
    handleErrorSeekToPre,
    handleReadyPlay,
    onCanPlay,
  };
};

export default useStreamPlayer;
