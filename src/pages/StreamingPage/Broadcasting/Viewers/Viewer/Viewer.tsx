import React from 'react';
import checkboxOn from '@images/checkboxOn.png';
import checkboxOff from '@images/checkboxOff.png';
import { IViewer } from '@type/chattingType';
import * as STC from './Viewer.style';
import useViewer from './useViewer';

const Viewer = ({ userId, userName, userImg, cuid, addBanList, removeBanList }: IViewer) => {
  const { check, handleChange } = useViewer();

  const onClick = () => {
    if (check) {
      removeBanList(userName);
    } else {
      addBanList(userName, userId, cuid);
    }

    handleChange();
  };

  return (
    <STC.SCUser>
      <STC.SCCheck src={check ? checkboxOn : checkboxOff} onClick={() => onClick()} />

      <STC.SCImg src={userImg} />

      <STC.SCText>{userName}</STC.SCText>
    </STC.SCUser>
  );
};

export default Viewer;
