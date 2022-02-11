import React, { MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PAGE_URL } from '@path';
import { handleErrorModal } from '@slice/globalModalSlice';
import NoImage from '@images/noimg.png';
import Crown from '@images/crown.png';
import * as STC from './Profile.style';
import { IProfile } from './ProfileType';

const Profile = ({ type, tType, mType, src, channelId, isOwner }: IProfile) => {
  const dispatch = useDispatch();

  const onClickProfile = useCallback(
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

  return (
    <STC.Wrapper onClick={(e) => onClickProfile(e)}>
      {isOwner && <STC.Crown src={Crown} />}
      <STC.IconWrapper type={type} tType={tType} mType={mType}>
        <STC.Icon src={src === null ? NoImage : src} />
      </STC.IconWrapper>
    </STC.Wrapper>
  );
};

export default Profile;
