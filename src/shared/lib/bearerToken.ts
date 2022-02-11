import { getCookie } from '@lib/cookieUtils';
import isLogin from './isLogin';

export const token = () => {
  if (isLogin()) {
    return {
      headers: {
        AUTHORIZATION: `Bearer ${getCookie('access-token')}`,
      },
    };
  } else {
    return {};
  }
};
