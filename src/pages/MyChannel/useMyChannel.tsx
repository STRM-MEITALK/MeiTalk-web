import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RootState } from '@src/stores/index';
import { getChannelInfo, postBannerImage, deleteBannerImage } from '@slice/studioSlice';
import RequestStatus from '@src/shared/lib/RequestStatus';
import useToast from '@components/Toast/useToast';
import AddImage from '@images/add-photo.png';
import channelartImg from '@images/channelart-img.png';
import { PAGE_URL } from '@src/shared/constant/path';

const useMyChannel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { channelId } = useParams();
  const { callToast } = useToast();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [beforeScrollY, setBeforeScrollY] = useState<number>(0);
  const [file, setFile] = useState<Blob | string | null>(null);
  const [bannerImageModal, setBannerImageModal] = useState<boolean>(false);
  const [deleteBannerModal, setDeleteBannerModal] = useState<boolean>(false);
  const [sizeModal, setSizeModal] = useState<boolean>(false);
  const [formatModal, setFormatModal] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [addImage, setAddImage] = useState(AddImage);
  const [locationKeys, setLocationKeys] = useState([]);
  const [image, setImage] = useState<string | undefined>(undefined);

  const fileRef = useRef<HTMLInputElement>(null);
  const { channelInfo, postBannerImageResult, deleteBannerResult, channelInfoStatus } = useSelector(
    ({ studio }: RootState) => ({
      channelInfo: studio.getChannelInfo.data,
      channelInfoStatus: studio.getChannelInfo.status,
      postBannerImageResult: studio.postBannerImageResult,
      deleteBannerResult: studio.deleteBannerImageResult,
    }),
  );

  useEffect(() => {
    if (channelInfoStatus === RequestStatus.SUCCESS) {
      if (channelInfo?.chImg !== null) {
        setImage(channelInfo?.chImg);
      } else if (preview !== null) {
        setImage(preview.toString());
      } else if (channelInfo?.isMe === 'Y') {
        setImage(undefined);
      } else {
        setImage(channelartImg);
      }
    }
  }, [channelInfo, channelInfoStatus, preview]);

  const tabsOptions = [
    {
      value: 0,
      label: t('common_video'),
    },
    {
      value: 1,
      label: t('community_title'),
    },
    {
      value: 2,
      label: t('common_about'),
    },
  ];

  const handleChange = (value: number) => {
    setActiveTab(value);
    switch (value) {
      case 0:
        navigate(`${PAGE_URL.MY_CHANNEL}/${channelId}`);
        break;
      case 1:
        navigate(`${PAGE_URL.MY_CHANNEL}${PAGE_URL.CHANNEL_COMMUNITY}/${channelId}`);
        break;
      case 2:
        navigate(`${PAGE_URL.MY_CHANNEL}${PAGE_URL.CHANNEL_ABOUT}/${channelId}`);
        break;
      default:
        break;
    }
  };

  const postFile = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      dispatch(postBannerImage({ channelId: Number(channelId), data: formData }));
    }
  };

  useEffect(() => {
    if (postBannerImageResult.status === RequestStatus.SUCCESS) {
      setPreview(null);
      if (!fileRef.current) return;
      fileRef.current.value = '';
    }
  }, [postBannerImageResult]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file.size > 6291456) {
      setSizeModal(true);
      return;
    }
    if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)) {
      setFormatModal(true);
      return;
    }
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    setFile(e.target.files[0]);
  };

  const handleDeleteBanner = () => {
    dispatch(deleteBannerImage({ channelId: Number(channelId) }));
  };

  const handleDeleteBtn = () => {
    if (preview) {
      setPreview(null);
      if (!fileRef.current) return;
      fileRef.current.value = '';
    } else {
      setDeleteBannerModal(true);
    }
  };

  useEffect(() => {
    if (postBannerImageResult.status === RequestStatus.SUCCESS) {
      callToast(t('common_saved'));
    }
  }, [postBannerImageResult.status]);

  const handleBannerModal = () => {
    setBannerImageModal(false);
  };

  useEffect(() => {
    window.scroll(0, beforeScrollY);
  }, [activeTab]);

  useEffect(() => {
    if (channelId) {
      dispatch(getChannelInfo({ channelId }));
    }
  }, [channelId]);

  useEffect(() => {
    const path = pathname.replace(`${PAGE_URL.MY_CHANNEL}`, '').replace(`/${channelId}`, '');
    switch (path) {
      case '':
        setActiveTab(0);
        break;
      case PAGE_URL.CHANNEL_COMMUNITY:
      case PAGE_URL.CHANNEL_COMMUNITY_DETAIL:
        setActiveTab(1);
        break;
      case PAGE_URL.CHANNEL_ABOUT:
        setActiveTab(2);
        break;
      default:
        break;
    }
  }, [pathname]);

  return {
    tabsOptions,
    activeTab,
    bannerImageModal,
    preview,
    deleteBannerModal,
    sizeModal,
    formatModal,
    fileRef,
    addImage,
    channelInfo,
    image,
    setAddImage,
    setSizeModal,
    handleDeleteBtn,
    setFormatModal,
    postFile,
    setDeleteBannerModal,
    handleBannerModal,
    setBannerImageModal,
    handleDeleteBanner,
    handleChange,
    handleFile,
  };
};

export default useMyChannel;
