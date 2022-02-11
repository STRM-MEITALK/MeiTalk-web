import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { PAGE_URL } from '@path';
import { getCookie } from '@lib/cookieUtils';
import withoutHeader from '@lib/withoutHeader';
import { logout } from '@lib/logout';
import { RootState } from '@stores/index';
import { addUserData, getUserData } from '@slice/authSlice';
import { handleLoginModal } from '@slice/globalModalSlice';
import { resetBroad, setBackTrigger } from '@slice/broadSlice';
import useScrollY from '@hooks/useScrollY';
import StreamingPage from '@pages/StreamingPage';
import LoginPage from '@pages/LoginPage';
import RegistPage from '@pages/RegistPage';
import LiveViewPage from '@pages/LiveViewPage';
import PrivacyPage from '@pages/PrivacyPage';
import TermsPage from '@pages/TermsPage';
import ReplayViewPage from '@pages/ReplayViewPage';
import NotFoundPage from '@pages/NotFoundPage';
import EmailVerifyPage from '@pages/EmailVerifyPage';
import EmailSuccessPage from '@pages/EmailSuccessPage';
import EmailFailPage from '@pages/EmailFailPage';
import MyPage from '@pages/MyPage';
import MyStudio from '@pages/MyStudio';
import MyStudioEdit from '@pages/MyStudioEdit';
import FAQPage from '@pages/FAQPage';
import NoticePage from '@pages/NoticePage';
import MyChannel from '@pages/MyChannel';
import MainPage from '@pages/MainPage';
import AboutUs from '@pages/AboutUs';
import Videos from '@pages/MyChannel/Videos';
import Community from '@pages/MyChannel/Community';
import About from '@pages/MyChannel/About';
import CommunityDetail from '@pages/MyChannel/CommunityDetail';
import { PrivateRoute, PublicRoute } from '@components/route';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import ErrorModal from '@components/Modal/ErrorModal';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Toast from '@components/Toast';
import { theme } from '@styles/theme';
import ResetStyle from '@styles/resetStyle';
import '@styles/font.css';
import './App.css';
import './assets/Locales/i18n';
import AccessDenyModal from './shared/components/Modal/AccessDenyModal';
import BanModal from './shared/components/Modal/BanModal';
import { updateTheme } from './stores/slice/themeSlice';
import PreparingModal from './shared/components/Modal/PreparingModal';

const App = function () {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  useScrollY();

  const { loginResult, userData, loginModal, language, resetTrigger, myTheme } = useSelector(
    ({ auth, globalModal, language, broad, theme }: RootState) => ({
      loginResult: auth.loginInfo.response.output,
      userData: auth.loginInfo.data,
      loginModal: globalModal.loginModal,
      language: language.language,
      resetTrigger: broad.resetTrigger,
      myTheme: theme.theme,
    }),
  );

  useEffect(() => {
    ReactGA.initialize('');
  }, []);

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }, [pathname]);

  useEffect(() => {
    if (loginResult === 0) {
      Object.entries(userData).forEach(([key, value]) => {
        sessionStorage.setItem(`${key}`, `${value}`);
      });
    }
  }, [loginResult]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (window.location.pathname !== '/stream' && resetTrigger) {
      dispatch(resetBroad());
    }
  }, [window.location.pathname]);

  useEffect(() => {
    window.Kakao?.init();

    if (
      getCookie('access-token') !== '' &&
      getCookie('access-token') !== 'undefined' &&
      getCookie('refresh-token') !== '' &&
      getCookie('refresh-token') !== 'undefined'
    ) {
      if (sessionStorage.getItem('userId') === null) {
        dispatch(getUserData());
      }
    }

    if (sessionStorage.getItem('userId') !== null) {
      dispatch(
        addUserData({
          userId: String(sessionStorage.getItem('userId')),
          mailId: String(sessionStorage.getItem('mailId')),
          channelId: Number(sessionStorage.getItem('channelId')),
          userPicture: String(sessionStorage.getItem('userPicture')),
          username: String(sessionStorage.getItem('username')),
        }),
      );
    }
  }, []);

  useEffect(() => {
    const lTheme = localStorage.getItem('theme');
    if (lTheme === 'light') {
      dispatch(updateTheme('light'));
    } else {
      dispatch(updateTheme('dark'));
    }
  }, []);

  return (
    <ThemeProvider theme={theme[myTheme]}>
      <Helmet>
        <title>MeiTalk</title>
      </Helmet>
      <div className="loading-indicator-image" />
      <ResetStyle />
      {withoutHeader(window.location.pathname) && <Header />}
      <Routes>
        <Route
          path={PAGE_URL.MAIN}
          element={
            <PublicRoute>
              <MainPage />
            </PublicRoute>
          }
        />
        <Route
          path={`${PAGE_URL.LIVE_DETAIL}/:vodId`}
          element={
            <PublicRoute>
              <LiveViewPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.STREAM}
          element={
            <PublicRoute>
              <StreamingPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.LOGIN}
          element={
            <PublicRoute restricted={true}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path={PAGE_URL.REGIST}
          element={
            <PublicRoute restricted={true}>
              <RegistPage />
            </PublicRoute>
          }
        />

        <Route
          path={`${PAGE_URL.REPLAY_DETAIL}/:vodId`}
          element={
            <PublicRoute>
              <ReplayViewPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.PRIVACY}
          element={
            <PublicRoute>
              <PrivacyPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.TERMS}
          element={
            <PublicRoute>
              <TermsPage />
            </PublicRoute>
          }
        />

        <Route
          path={PAGE_URL.EMAIL_VERIFY}
          element={
            <PublicRoute restricted={true}>
              <EmailVerifyPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.EMAIL_VERIFY_SUCCESS}
          element={
            <PublicRoute restricted={true}>
              <EmailSuccessPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.EMAIL_VERIFY_FAIL}
          element={
            <PublicRoute restricted={true}>
              <EmailFailPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.MY_PAGE}
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PAGE_URL.MY_STUDIO}
          element={
            <PrivateRoute>
              <MyStudio />
            </PrivateRoute>
          }
        />
        <Route
          path={`${PAGE_URL.MY_STUDIO_EDIT}/:vodId`}
          element={
            <PrivateRoute>
              <MyStudioEdit />
            </PrivateRoute>
          }
        />
        <Route
          path={PAGE_URL.FAQ}
          element={
            <PublicRoute>
              <FAQPage />
            </PublicRoute>
          }
        />
        <Route
          path={PAGE_URL.NOTICE}
          element={
            <PublicRoute>
              <NoticePage />
            </PublicRoute>
          }
        />
        <Route path={`${PAGE_URL.MY_CHANNEL}`} element={<MyChannel />}>
          <Route
            path=":channelId"
            element={
              <PublicRoute>
                <Videos />
              </PublicRoute>
            }
          />
          <Route
            path={`${PAGE_URL.CHANNEL_COMMUNITY.replace('/', '')}/:channelId`}
            element={
              <PublicRoute>
                <Community />
              </PublicRoute>
            }
          />
          <Route
            path={`${PAGE_URL.CHANNEL_COMMUNITY_DETAIL.replace('/', '')}/:channelId`}
            element={
              <PublicRoute>
                <CommunityDetail />
              </PublicRoute>
            }
          />
          <Route
            path={`${PAGE_URL.CHANNEL_ABOUT.replace('/', '')}/:channelId`}
            element={
              <PublicRoute>
                <About />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path={PAGE_URL.ABOUT_US}
          element={
            <PublicRoute>
              <AboutUs />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {withoutHeader(window.location.pathname) && <Footer />}
      <TwoBtnModal
        isShow={loginModal}
        setIsShow={() => dispatch(handleLoginModal(!loginModal))}
        content={t('Please_sign_in')}
        btnLeftContent={t('common_close')}
        btnRightContent={t('common_ok')}
        handleLeftBtn={() => dispatch(handleLoginModal(false))}
        handleRightBtn={() => {
          window.location.href = PAGE_URL.LOGIN;
        }}
      />
      <ErrorModal />
      <AccessDenyModal />
      <BanModal />
      <PreparingModal />
      <Toast />
    </ThemeProvider>
  );
};

export default App;
