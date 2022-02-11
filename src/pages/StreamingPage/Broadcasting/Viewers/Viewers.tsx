import React from 'react';
import xMarkImg from '@images/xMark.png';
import inputSearch from '@images/inputSearch.png';
import { useTranslation } from 'react-i18next';
import { IViewersUnsubscribe } from '@type/chattingType';
import useViewers from './useViewers';
import Viewer from './Viewer';
import * as STC from './Viewers.style';

const Viewers = ({ handlePressBan, handleHideViewers }: IViewersUnsubscribe) => {
  const { t } = useTranslation();
  const {
    filterUserList,
    filterText,
    handleChangeFilterText,
    handleClickSearch,
    addBanList,
    removeBanList,
    handlePress,
    handleBan,
  } = useViewers(handlePressBan);

  return (
    <STC.SCContainer>
      <STC.SCBtnContainer>
        <STC.SCBtn onClick={handleHideViewers}>
          <STC.SCBtnImg src={xMarkImg} />
        </STC.SCBtn>
      </STC.SCBtnContainer>

      <STC.SCTitle>{t('viewers')}</STC.SCTitle>

      <STC.SCInnerContainer>
        <STC.SCInputContainer>
          <STC.SCInput
            placeholder={t('search_the_viewer')}
            value={filterText}
            onChange={handleChangeFilterText}
            onKeyPress={handlePress}
          />

          <STC.SCBtnSearch onClick={handleClickSearch}>
            <STC.SCImgSearch src={inputSearch} />
          </STC.SCBtnSearch>
        </STC.SCInputContainer>

        <STC.SCUserListContainer>
          <STC.SCUserList>
            {filterUserList.map((el, idx) => {
              const key = idx;

              return (
                <Viewer
                  key={`${el.id}${key}`}
                  userId={el.id}
                  userName={el.userName}
                  userImg={el.userPicture}
                  cuid={el.sessionId}
                  addBanList={addBanList}
                  removeBanList={removeBanList}
                />
              );
            })}
          </STC.SCUserList>
        </STC.SCUserListContainer>

        <STC.SCBottom>
          <STC.SCBottomBtn back={true} onClick={handleHideViewers}>
            {t('close')}
          </STC.SCBottomBtn>
          <STC.SCBottomBtn back={false} onClick={handleBan}>
            {t('eliminate')}
          </STC.SCBottomBtn>
        </STC.SCBottom>
      </STC.SCInnerContainer>
    </STC.SCContainer>
  );
};

export default Viewers;
