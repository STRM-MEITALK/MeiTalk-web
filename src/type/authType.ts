import RequestStatus from '@src/shared/lib/RequestStatus';
import { IInitState } from '@type/responseType';

export interface ILoginType {
  mailId: string;
  userPw: string;
}

export interface IUserDataType {
  userId: string;
  mailId: string;
  channelId: number;

  userPicture: string;

  username: string;
}

export interface IRegistType {
  mailId: string;
  userPw: string;
  userNameFirst: string;
  userNameLast: string;
  countryPhone: string;
  phoneNum: string;
  privacyAgree: string;
}

export interface ISocailLoginType {
  link: string;
}

export interface IRefreshTokenType {
  Rtoken: string;
}

export interface IPostLogin extends IInitState {
  data: IUserDataType;
}

export interface IPostRegist extends IInitState {
  data: IRegistType;
}

export interface IGoogleLogin extends IInitState {
  data: ISocailLoginType;
}

export interface IFacebookLogin extends IInitState {
  data: ISocailLoginType;
}

export interface ILineLogin extends IInitState {
  data: ISocailLoginType;
}

export interface IAppleLogin extends IInitState {
  data: ISocailLoginType;
}

export interface IRefreshToken extends IInitState {
  data: IRefreshTokenType;
}

export interface ILoginBody {
  mailId: string;
  userPw: string;
}

export interface IRegistBody {
  mailId: string;
  userPw: string;
  userName: string;
  countryPhone: string;
  phoneNum: string;
  privacyAgree: string;
}

export interface IUserDataBody {
  token: string;
}

export interface ILoginInitState {
  loginInfo: IPostLogin;
  registPost: IPostRegist;
  googleLogin: IGoogleLogin;
  facebookLogin: IFacebookLogin;
  lineLogin: ILineLogin;
  appleLogin: IAppleLogin;
  cu: string;
  updateRT: IRefreshToken;
  moveAndLogout: boolean;
}

export interface IRegistInitState {
  registInfo: IRegistType;
  registPost: IInitState;
}
