import axios from 'axios';
import { PAGE_URL } from '@path';
import { setCookie } from '@lib/cookieUtils';
import { updateAccessToken } from '@lib/jwt';
import { logout } from '@lib/logout';
import { store } from '@stores/index';
import { minusLoadingCnt, plusLoadingCnt } from '@slice/loadingSlice';

const SERVER_URL = process.env.REACT_APP_DEV_AUTH_SERVER || '';

const api = (isHidden?: boolean, contentType?: string) => {
  contentType = contentType || 'application/json';
  isHidden = isHidden || false;

  const instance = axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Content-Type': contentType,
    },
    withCredentials: true,
  });

  instance.interceptors.request.use(async function (config) {
    if (!isHidden) {
      store.dispatch(plusLoadingCnt());
    }
    if (store.getState().loading.loadingCnt === 1) {
      document.body.classList.add('loading-indicator');
    }

    return config;
  });

  instance.interceptors.response.use(
    async function (response) {
      if (!isHidden) {
        store.dispatch(minusLoadingCnt());
      }
      if (store.getState().loading.loadingCnt === 0) {
        document.body.classList.remove('loading-indicator');
      }

      if (response.status === 200 && response.data.response.output === -88) {
        try {
          const issuedResponse = await updateAccessToken();
          if (
            issuedResponse.data.output === -88 ||
            issuedResponse.data.output === -77 ||
            issuedResponse.data.output === -66 ||
            issuedResponse.data.output === -99 ||
            issuedResponse.data.output === -100 ||
            issuedResponse.data.output === -1
          ) {
            logout();
            return Promise.reject();
          } else {
            if (response.config.headers) {
              response.config.headers.AUTHORIZATION = `Bearer ${issuedResponse.data.data}`;
              setCookie('access-token', issuedResponse.data.data);
            }

            const newResponse = await axios({
              ...response.config,
            });

            return newResponse;
          }
        } catch (e) {
          logout();
          return Promise.reject();
        }
      } else if (
        response.status === 200 &&
        (response.data.response.output === -99 ||
          response.data.response.output === -77 ||
          response.data.response.output === -66 ||
          response.data.response.output === -100)
      ) {
        logout();
        if (response.config.url === '/auth/refresh-token/issued') {
          window.location.href = PAGE_URL.LOGIN;
        }
        return Promise.reject();
      } else {
        return response;
      }
    },
    async (error) => {
      if (!isHidden) {
        store.dispatch(minusLoadingCnt());
      }
      if (store.getState().loading.loadingCnt === 0) {
        document.body.classList.remove('loading-indicator');
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default api;
