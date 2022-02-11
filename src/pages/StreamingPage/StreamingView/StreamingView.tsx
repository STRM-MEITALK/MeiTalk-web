import React from 'react';
import BroadcastCamera from '../BroadcastCamera';
import { ICameraType } from '../BroadcastCamera/BroadcastCameraType';

const StreamingView = ({ viewRef }: ICameraType) => {
  return (
    <div>
      <BroadcastCamera viewRef={viewRef} />
    </div>
  );
};

export default StreamingView;
