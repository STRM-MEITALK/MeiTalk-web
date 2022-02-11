import React, { useCallback, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import isLogin from '@lib/isLogin';
import { updateStreamSave } from '@slice/streamSlice';
import { handleLoginModal } from '@slice/globalModalSlice';
import useToast from '@components/Toast/useToast';
import ShareImage from '@images/share_stretch.png';
import WatchImage from '@images/watch_stretch.png';
import { IStretchIcon } from './StretchType';
import * as STC from './StretchIcon.style';

const StretchIcon = ({ isShow, vodId, onHandleShareModal }: IStretchIcon) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { callToast } = useToast();
  const [isHoverShare, setIsHoverShare] = useState(false);
  const [isHoverSave, setIsHoverSave] = useState(false);

  const onClickShare = useCallback((e) => {
    e.stopPropagation();
    onHandleShareModal();
  }, []);

  const onClickSave = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (isLogin()) {
        dispatch(updateStreamSave({ vodId, isSave: true }));
        callToast(t('common_saved'));
      } else {
        dispatch(handleLoginModal(true));
      }
    },
    [vodId],
  );

  return (
    <STC.Container isShow={isShow}>
      <STC.ShareItemBlockWrapper
        isHoverShare={isHoverShare}
        onMouseOver={() => setIsHoverShare(true)}
        onMouseOut={() => setIsHoverShare(false)}
        onClick={onClickShare}
      >
        <STC.ShareItemBlock>
          <STC.IconText>{t('common_share')}</STC.IconText>
          <STC.Icon src={ShareImage} alt="" />
        </STC.ShareItemBlock>
      </STC.ShareItemBlockWrapper>
      <STC.SaveItemBlockWrapper
        isHoverSave={isHoverSave}
        onMouseOver={() => setIsHoverSave(true)}
        onMouseOut={() => setIsHoverSave(false)}
        onClick={onClickSave}
      >
        <STC.SaveItemBlock>
          <STC.IconText>{t('common_watch_later')}</STC.IconText>
          <STC.Icon src={WatchImage} alt="" />
        </STC.SaveItemBlock>
      </STC.SaveItemBlockWrapper>
    </STC.Container>
  );
};

export default StretchIcon;
