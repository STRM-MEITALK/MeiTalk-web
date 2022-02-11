import { RefObject } from 'react';

export interface IDeviceType {
  deviceId: string;
  label: string;
  selected: boolean;
}

export interface IViewRef {
  viewRef: RefObject<HTMLVideoElement>;
}

export interface IConstraintType {
  videoDeviceId: string;
  audioDeviceId: string;
}

export interface ImultiRtmpDestinationType {
  mediaServer: string;
  streamKey: string;
}

export interface IMediaConstraintType {
  audio: {
    deviceId?: { exact?: string };
    sampleRate: number;
    echoCancellation: boolean;
  };
  video: {
    deviceId?: { exact?: string };
    width: {
      min: number;
      ideal: number;
      max: number;
    };
    height: {
      min: number;
      ideal: number;
      max: number;
    };
    frameRate: {
      ideal: number;
    };
  };
}

export interface ISelectParam {
  name: string;
  value: {
    value: string;
    label: string;
  };
}

export interface IInfoType {
  value: string;
  label: string;
}

export interface IHandleBroadParam {
  title: string;
  detail: string;
  category: string;
}
