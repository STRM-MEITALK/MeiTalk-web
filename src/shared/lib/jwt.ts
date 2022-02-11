import jwtDecode, { JwtPayload } from 'jwt-decode';
import moment from 'moment';
import axios from 'axios';
import { getCookie } from '@lib/cookieUtils';
import { setTimeZone } from './setTimeZone';

export const verifyToken = (token: string) => {
  const decodeToken: JwtPayload = jwtDecode(token);
  if (decodeToken.exp) {
    if (moment.duration(setTimeZone(new Date()).diff(setTimeZone(decodeToken.exp * 1000))).asMilliseconds() < 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const updateAccessToken = () => {
  return axios.post(`/auth/access-token/issued`, {
    refreshToken: getCookie('refresh-token'),
  });
};
