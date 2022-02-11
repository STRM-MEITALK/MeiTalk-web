import * as React from 'react';
import isLogin from '@lib/isLogin';
import LoginPage from '@pages/LoginPage';
import { IPrivateProps } from './routeType';

const PrivateRoute = ({ children }: IPrivateProps) => {
  if (isLogin()) {
    return children;
  }
  return <LoginPage />;
};
export default PrivateRoute;
