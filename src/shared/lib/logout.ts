import { delCookie } from '@lib/cookieUtils';

export const logout = () => {
  delCookie('access-token');
  delCookie('refresh-token');
  sessionStorage.clear();
};
