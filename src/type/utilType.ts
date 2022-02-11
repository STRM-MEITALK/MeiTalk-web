import RequestStatus from '@src/shared/lib/RequestStatus';
import { IResponseType, IInitState } from '@type/responseType';

export interface ICountryCodeType {
  countryCd: string;
  countryName: string;
  countryPhone: string;
}

export interface ICountryCodeList {
  data: ICountryCodeType[];
  response: IResponseType;
  status: RequestStatus;
}

export interface IEmailVerificationType {
  userMail: string;
}

export interface IEmailVerify extends IInitState {
  data: string;
}
export interface ICategoryListData extends IInitState {
  data: {
    name: string;
    num: string;
  }[];
}
export interface ICountryInitState {
  countryCode: ICountryCodeList;
  emailVerify: IEmailVerify;
  categoryList: ICategoryListData;
}

export interface ICategoryPayloadType {
  lang: string;
}
