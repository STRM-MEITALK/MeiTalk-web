import jwtDecode from 'jwt-decode';

export const checkVerify = (token: string) => {
  const decode = jwtDecode(token);
};
