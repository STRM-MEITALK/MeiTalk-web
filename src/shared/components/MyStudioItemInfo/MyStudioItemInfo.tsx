import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_URL } from '@path';
import { IAfterVideoType } from '@type/studioType';
import { numberWithComma } from '@lib/numberWithComma';

import PublicImg from '@images/public-pc.png';
import PrivateImg from '@images/private-pc.png';

import ViewImg from '@images/mystudio_view.png';
import ChatImg from '@images/mystudio_chat.png';
import LikeImg from '@images/mystudio_like.png';

import * as STC from './MyStudioItemInfo.style';

const MyStudioItemInfo = ({ item }: { item: IAfterVideoType }) => {
  const { t } = useTranslation();

  const publicOnClick = useCallback(() => {
    window.location.href = `${window.location.origin}${PAGE_URL.MY_STUDIO_EDIT}/${item.vodId}`;
  }, []);

  return (
    <STC.Wrapper>
      <STC.TitleWrapper>
        {item.isLive && <STC.SmallLiveTag>{t('common_live')}</STC.SmallLiveTag>}
        <STC.Title>{item.title}</STC.Title>
      </STC.TitleWrapper>
      <STC.WrapperBlock>
        {item.displayFlag === 'Y' && (
          <STC.ProfileWrapper onClick={publicOnClick}>
            <STC.Icon src={PublicImg} alt="view" />
            <STC.PublicType type="public">{t('common_public')}</STC.PublicType>
          </STC.ProfileWrapper>
        )}

        {item.displayFlag === 'N' && (
          <STC.ProfileWrapper onClick={publicOnClick}>
            <STC.Icon src={PrivateImg} alt="view" />
            <STC.PublicType type="private">{t('common_private')}</STC.PublicType>
          </STC.ProfileWrapper>
        )}
        <STC.Block>
          <STC.Flex>
            <STC.InfoText>
              {item.streamTime.split(' ')[0]}({item.displayFlag === 'Y' ? t('common_published') : t('common_uploaded')})
            </STC.InfoText>
          </STC.Flex>
        </STC.Block>
      </STC.WrapperBlock>

      <STC.BottomWrapper>
        <STC.Block>
          <STC.Flex>
            <STC.Icon src={ViewImg} alt="view" />
            <STC.InfoText>{numberWithComma(item.viewCount)}</STC.InfoText>
            <STC.InfoTextThin>•</STC.InfoTextThin>
          </STC.Flex>
          <STC.Flex>
            <STC.Icon src={LikeImg} alt="like" />
            <STC.InfoText>{numberWithComma(item.likeCount)}</STC.InfoText>
            <STC.InfoTextThin>•</STC.InfoTextThin>
          </STC.Flex>
          <STC.Flex className="date">
            <STC.Icon src={ChatImg} alt="chat" />
            <STC.InfoText>{item.commentCount}</STC.InfoText>
          </STC.Flex>
        </STC.Block>
      </STC.BottomWrapper>
    </STC.Wrapper>
  );
};

export default MyStudioItemInfo;
