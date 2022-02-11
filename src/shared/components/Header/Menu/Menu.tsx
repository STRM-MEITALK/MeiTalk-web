import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import Profile from '@components/Profile';
import DropdownPicker from '@components/DropdownPicker';
import closeButton from '@images/closeButton.png';
import isLogin from '@lib/isLogin';
import { PAGE_URL } from '@path';
import NoImage from '@images/noimg.png';
import wallet from '@images/wallet-menu-pc.png';
import broadcast from '@images/broadcast-menu-pc.png';
import MyImage from '@images/mypage-menu.png';
import edit from '@images/edit.png';

import * as STC from './Menu.style';
import { IMenuProps } from './MenuType';
import useMenu from './useMenu';
import useToast from '../../Toast/useToast';

function Menu({ handleMenu, scrollY, openPrepareModal, handleBroadcast, handleLoginPage, handleLogout }: IMenuProps) {
  const { t } = useTranslation();
  const { loginInfo, handleMyPage } = useMenu();
  const { callToast } = useToast();

  const { userData } = useSelector(({ auth }: RootState) => ({
    userData: auth.loginInfo.data,
  }));

  const onClickMenu = useCallback((menu: string) => {
    switch (menu) {
      case 'NOTICE':
        window.location.href = PAGE_URL.NOTICE;
        break;
      case 'FAQ':
        window.location.href = PAGE_URL.FAQ;
        break;
      default:
        openPrepareModal();
        break;
    }
  }, []);

  return (
    <STC.Wrapper scrollY={scrollY}>
      <STC.ButtonWrapper>
        <STC.CloseButton onClick={handleMenu} src={closeButton} />
      </STC.ButtonWrapper>
      <STC.Center>
        <STC.MenuWrapper>
          <STC.MenuListWrapper>
            <STC.MenuListText onClick={openPrepareModal}>{t('explore')}</STC.MenuListText>
            <STC.MenuListText onClick={openPrepareModal}>{t('NFT_marketplace')}</STC.MenuListText>
            <STC.MenuListText onClick={() => onClickMenu('NOTICE')}>{t('notice')}</STC.MenuListText>
            <STC.MenuListText onClick={() => onClickMenu('FAQ')}>{t('faq')}</STC.MenuListText>
          </STC.MenuListWrapper>
          <STC.UserWrapper>
            {isLogin() ? (
              <>
                <STC.SignTextWrapper type="flex">
                  <STC.ProfileWrapper>
                    <STC.Icon
                      src={
                        userData.userPicture === 'null' || userData.userPicture === null
                          ? NoImage
                          : userData.userPicture
                      }
                    />
                  </STC.ProfileWrapper>
                  <STC.SignText isUserInfo={true}>{loginInfo.username}</STC.SignText>
                </STC.SignTextWrapper>
                <STC.MenuExtraWrapper>
                  <STC.MenuButtonWrapper onClick={handleMyPage}>
                    <STC.MenuButtonImage src={MyImage} />
                    <STC.MenuButtonText>{t('menu_my')}</STC.MenuButtonText>
                  </STC.MenuButtonWrapper>
                  <STC.MenuButtonWrapper onClick={openPrepareModal}>
                    <STC.MenuButtonImage src={wallet} />
                    <STC.MenuButtonText>{t('wallet')}</STC.MenuButtonText>
                  </STC.MenuButtonWrapper>
                  <STC.MenuButtonWrapper onClick={handleBroadcast}>
                    <STC.MenuButtonImage src={broadcast} />
                    <STC.MenuButtonText>{t('broadcast')}</STC.MenuButtonText>
                  </STC.MenuButtonWrapper>
                </STC.MenuExtraWrapper>
              </>
            ) : (
              <STC.SignTextWrapper type="flex">
                <STC.SignText onClick={handleLoginPage}>{t('sign_in')}</STC.SignText>
              </STC.SignTextWrapper>
            )}
          </STC.UserWrapper>
        </STC.MenuWrapper>
        <STC.BottomWrapper>
          {isLogin() && (
            <STC.LogoutWrapper>
              <STC.SignTextWrapper type="inline-block" onClick={handleLogout}>
                <STC.SignText>{t('sign_out')}</STC.SignText>
              </STC.SignTextWrapper>
            </STC.LogoutWrapper>
          )}
        </STC.BottomWrapper>
      </STC.Center>
    </STC.Wrapper>
  );
}

export default Menu;
