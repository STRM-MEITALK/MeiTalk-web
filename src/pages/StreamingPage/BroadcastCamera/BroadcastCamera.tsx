import React from 'react';
import { IViewRef } from '../streamingTypes';

const BroadcastCamera = ({ viewRef }: IViewRef) => {
  return <video ref={viewRef} muted autoPlay width="100%" />;
};

export default BroadcastCamera;
