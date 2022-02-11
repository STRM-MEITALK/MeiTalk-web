import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ColseSmallImg from '@images/close-small.png';
import LineImg from '@images/line.png';
import WhatsappImg from '@images/whatsapp.png';
import FacebookImg from '@images/facebook.png';
import TwitterImg from '@images/twitter.png';
import KakaoImg from '@images/kakao.png';
import { IShareModal } from './ShareModalType';
import * as STC from './ShareModal.style';
import useShareModal from './useShareModal';

const ShareModal = ({ isShow, title, link, setIsShow }: IShareModal) => {
  const { t } = useTranslation();
  const { onShare, onCopied } = useShareModal({ isShow, title });

  return (
    <STC.Wrapper isShow={isShow}>
      <STC.Modal isShow={isShow}>
        <STC.ModalHeader>
          <STC.Title>{t('common_share')}</STC.Title>
          <STC.CloseBtn src={ColseSmallImg} onClick={() => setIsShow(false)} />
        </STC.ModalHeader>
        <STC.IconList>
          <STC.IconWrapper onClick={() => onShare('LINE', link)}>
            <STC.IconImg src={LineImg} />
            <STC.IconText>{t('share_line')}</STC.IconText>
          </STC.IconWrapper>
          <STC.IconWrapper onClick={() => onShare('WHATSAPP', link)}>
            <STC.IconImg src={WhatsappImg} />
            <STC.IconText>{t('share_whatsapp')}</STC.IconText>
          </STC.IconWrapper>
          <STC.IconWrapper onClick={() => onShare('FACEBOOK', link)}>
            <STC.IconImg src={FacebookImg} />
            <STC.IconText>{t('share_facebook')}</STC.IconText>
          </STC.IconWrapper>
          <STC.IconWrapper onClick={() => onShare('TWITTER', link)}>
            <STC.IconImg src={TwitterImg} />
            <STC.IconText>{t('share_twitter')}</STC.IconText>
          </STC.IconWrapper>
          <STC.IconWrapper onClick={() => onShare('KAKAO', link)}>
            <STC.IconImg src={KakaoImg} />
            <STC.IconText>{t('share_kakao')}</STC.IconText>
          </STC.IconWrapper>
        </STC.IconList>
        <STC.CopyBlock>
          <STC.LinkTextWrapper>
            <STC.LinkText>{link}</STC.LinkText>
          </STC.LinkTextWrapper>
          <CopyToClipboard text={link} onCopy={onCopied}>
            <STC.Copy>{t('common_copy')}</STC.Copy>
          </CopyToClipboard>
        </STC.CopyBlock>
      </STC.Modal>
    </STC.Wrapper>
  );
};

export default ShareModal;
