export interface ITitle {
  title: string;
  shadowTitle: string;
  left: number;
}

export interface IFeature {
  title: string;
  des: string;
  img: string;
}

export interface IFeatureProps extends IFeature {
  index: number;
}

export interface IFeatures {
  features: IFeature[];
}
