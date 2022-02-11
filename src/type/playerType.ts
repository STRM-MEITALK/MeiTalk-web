export interface IPlayerInitState {
  isStart: boolean;
  isPlay: boolean;
  played: number;
  duration: number;
  seeking: boolean;
  volume: number;
  muted: boolean;
  speed: number;
  isBuffer: boolean;
  useCaption: boolean;
  captionLang: ICaptionLang;
  caption: Record<
    string,
    {
      JA: string;
      EN: string;
      RU: string;
      KO: string;
      ZH: string;
      ID: string;
    }
  > | null;
  quality: string;
  isFullScreen: boolean;
}

export type ICaptionLang = 'JA' | 'EN' | 'RU' | 'KO' | 'ZH' | 'ID' | null;
