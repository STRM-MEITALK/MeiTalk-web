import React, { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@stores/index';
import useToast from '@components/Toast/useToast';

const useShareModal = ({ isShow, title }: { isShow: boolean; title: string }) => {
  const { t } = useTranslation();
  const { callToast } = useToast();

  const { scrollY } = useSelector(({ globalModal }: RootState) => ({
    scrollY: globalModal.scrollY,
  }));

  const onShare = useCallback(
    (platform, link) => {
      let pLink = '';
      switch (platform) {
        case 'LINE':
          pLink = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(link)}`;
          break;
        case 'WHATSAPP':
          pLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
          break;
        case 'FACEBOOK':
          pLink = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(link)}`;
          break;
        case 'TWITTER':
          pLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
          break;
        case 'KAKAO':
          window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title,
              description: '',
              imageUrl: process.env.REACT_APP_SHARE_IMAGE,
              link: {
                mobileWebUrl: link,
                webUrl: link,
              },
            },
          });
          break;
        default:
          return;
      }
      if (pLink !== '') {
        window.open(pLink);
      }
    },
    [title],
  );

  const onCopied = useCallback(() => {
    callToast(t('common_copied'));
  }, []);

  useEffect(() => {
    if (isShow) {
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; overflow-y: 'hidden'; width: 100%`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: ""; overflow-y: ""; width: "";`;
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [isShow]);

  return { onShare, onCopied };
};

export default useShareModal;
