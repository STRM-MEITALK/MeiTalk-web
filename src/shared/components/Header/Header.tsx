import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { handlePreparingModal } from '@slice/globalModalSlice';
import logoPC from '@images/logo.png';
import searchPC from '@images/search-pc.png';
import menuMain from '@images/menu-main-pc.png';
import useToast from '@components/Toast/useToast';
import SelectStreamModal from '@components/Modal/SelectStreamModal';
import Menu from './Menu';
import useHeader from './useHeader';
import * as STC from './Header.style';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { callToast } = useToast();

  const [isShow, setIsShow] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const { isMenu, isBackground, scrollY, handleHome, handleMenu, handleBroadcast, handleLoginPage, handleLogout } =
    useHeader({ isShow, trigger, setIsShow: () => setIsShow(true) });

  const callPreparingModal = () => {
    dispatch(handlePreparingModal(true));
  };

  return (
    <>
      <STC.Wrapper isBackground={isBackground}>
        <STC.Block>
          <STC.LogoImage src={logoPC} onClick={handleHome} />
          <STC.ButtonWrapper>
            <STC.ImageWrapper onClick={callPreparingModal}>
              <STC.SearchImage src={searchPC} />
            </STC.ImageWrapper>
            <STC.ImageWrapperMenu onClick={handleMenu}>
              <STC.MenuImage src={menuMain} />
            </STC.ImageWrapperMenu>
          </STC.ButtonWrapper>
        </STC.Block>
      </STC.Wrapper>
      <SelectStreamModal isShow={isShow} setIsShow={() => setIsShow(false)} setTrigger={setTrigger} />
      {isMenu && (
        <Menu
          handleMenu={handleMenu}
          openPrepareModal={callPreparingModal}
          scrollY={scrollY}
          handleBroadcast={handleBroadcast}
          handleLoginPage={handleLoginPage}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Header;
