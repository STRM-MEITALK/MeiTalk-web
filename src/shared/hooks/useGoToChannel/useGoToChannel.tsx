import React, { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { PAGE_URL } from '@path';
import { handleErrorModal } from '@slice/globalModalSlice';

const useGoToChannel = ({ channelId }: { channelId: number | string | null }) => {
  const dispatch = useDispatch();

  const goToChannel = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (channelId !== null) {
        window.location.href = `${window.location.origin}${PAGE_URL.MY_CHANNEL}/${channelId}`;
      } else {
        dispatch(handleErrorModal(true));
      }
    },
    [channelId],
  );

  return {
    goToChannel,
  };
};

export default useGoToChannel;
