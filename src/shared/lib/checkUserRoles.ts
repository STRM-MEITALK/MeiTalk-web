import jwtDecode from 'jwt-decode';
import { getCookie } from '@lib/cookieUtils';

const checkUserRoles = () => {
  const accessToken = getCookie('access-token');
  let decoded: any;
  if (accessToken) {
    decoded = jwtDecode(accessToken);
  } else {
    return 'INVALID';
  }
  return decoded?.roles;
};

export default checkUserRoles;
