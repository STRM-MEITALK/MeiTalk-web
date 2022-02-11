import * as React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '@lib/isLogin';
import { IPublicProps } from './routeType';

const PublicRoute = ({ children, restricted }: IPublicProps) => {
  if (isLogin() && restricted) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PublicRoute;
