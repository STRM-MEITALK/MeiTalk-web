import { getCookie } from './cookieUtils';

const isLogin = () => {
  let flag = false;

  if (
    getCookie('access-token') !== '' &&
    getCookie('access-token') !== 'undefined' &&
    getCookie('refresh-token') !== '' &&
    getCookie('refresh-token') !== 'undefined'
  ) {
    flag = true;
  }

  return flag;
};

export default isLogin;
