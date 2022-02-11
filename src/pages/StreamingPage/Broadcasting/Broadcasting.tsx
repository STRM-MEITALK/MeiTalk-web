/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useLiveViewLike from '@hooks/useLiveViewLike';
import useLiveViewSave from '@hooks/useLiveViewSave';
import useInnerWidth from '@hooks/useInnerWidth';
import Button from '@components/Button';
import DropdownPicker from '@components/DropdownPicker';
import ShareModal from '@components/Modal/ShareModal';
import TwoBtnWaitModal from '@components/Modal/TwoBtnWaitModal';
import OneBtnModal from '@components/Modal/OneBtnModal';
import TwoBtnModal from '@components/Modal/TwoBtnModal';
import { sizes } from '@styles/media';
import CopyItem from '@images/copy-pc.png';
import InputViewAble from '@images/input-view.png';
import InputViewDisable from '@images/input-view-x.png';
import { IHandleBroadParam } from '../streamingTypes';
import { IBroadcastingProps } from './BroadcastingType';
import PCVideoInfo from './PCVideoInfo';
import MobileVideoInfo from './MobileVideoInfo';
import useBroadcasting from './useBroadcasting';
import * as STC from './Broadcasting.style';
import useLiveViewPage from '../../LiveViewPage/useLiveViewPage';
import StreamChatting from './StreamChatting';
import StreamPlayer from '../StreamPlayer';
import StreamEnded from '../StreamEnded';
import BroadcastCamera from '../BroadcastCamera';
import Viewers from './Viewers';

const Broadcasting = ({
  viewRef,
  cameras,
  audios,
  vodCategoryOptions,
  broadCategory,
  broadDetail,
  broadTitle,
  endModal,
  errorEndModal,
  videoComponent,
  titlePlaceholder,
  handleStart,
  handleBroadCategory,
  handleBroadDetail,
  handleBroadTitle,
  handleBroadData,
  handleFinish,
  handleEdit,
  handleSourceToggle,
  setEndModal,
  setErrorEndModal,
}: IBroadcastingProps) => {
  const { t } = useTranslation();
  const { isLike, onToggleLike } = useLiveViewLike();
  const { isSave, onToggleSave } = useLiveViewSave();
  const { chatHeightRef, chatHeight, setChatHeight } = useLiveViewPage();
  const { innerWidth } = useInnerWidth();

  const {
    broadData,
    timeText,
    isStreamingState,
    streamType,
    playbackWrap,
    disableEditModal,
    channel,
    streamKey,
    toggle,
    startModal,
    stopModal,
    likeCount,
    userCount,
    showViewers,
    isShowSM,
    startModalWait,
    stopModalWait,
    isShowTitle,
    isShowDetail,
    shareLink,
    handleEditDisable,
    onCopied,
    handleStreamKey,
    ExternalStopElement,
    handleShowViewers,
    handleHideViewers,
    setStartModal,
    setStopModal,
    setStartModalWait,
    setStopModalWait,
    setIsShowTitle,
    setIsShowDetail,
    handleBack,
    handleUploadStream,
    chatScrollRef,
    message,
    messages,
    isFocus,
    handleChange,
    handleClick,
    handlePress,
    handlePressBan,
    setIsFocus,
    setIsShowSM,
    setDisableEditModal,
  } = useBroadcasting({
    broadSetData: {
      broadCategory,
      broadDetail,
      broadTitle,
    },
    handleBroadData: (data: IHandleBroadParam) => handleBroadData(data),
    setEndModal,
    handleEdit,
  });

  return (
    <STC.Container>
      {showViewers && <Viewers handlePressBan={handlePressBan} handleHideViewers={handleHideViewers} />}
      <STC.PCWrapper>
        <STC.Content isTop={true}>
          <STC.LiveWrapper>
            <STC.PlayerWrapper>
              {streamType === 'external' ? (
                isStreamingState === 'streaming' ? (
                  <>
                    {playbackWrap && (
                      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
                        <StreamEnded />
                      </div>
                    )}
                    <StreamPlayer />
                  </>
                ) : (
                  <StreamEnded />
                )
              ) : (
                <BroadcastCamera viewRef={viewRef} />
              )}
            </STC.PlayerWrapper>
            {innerWidth > sizes.tablet ? (
              <PCVideoInfo
                broadData={broadData}
                isLiveFinish={isStreamingState !== 'streaming'}
                timeText={timeText}
                likeCount={likeCount}
                userCount={userCount}
                isShowTitle={isShowTitle}
                streamType={streamType}
                isStreamingState={isStreamingState}
                disable={broadTitle?.length === 0}
                handleSourceToggle={handleSourceToggle}
                setIsShowSM={setIsShowSM}
                setIsShowTitle={setIsShowTitle}
                setStopModal={setStopModal}
                setStartModal={setStartModal}
                handleShowViewers={handleShowViewers}
              />
            ) : (
              <MobileVideoInfo
                broadData={broadData}
                isLiveFinish={isStreamingState !== 'streaming'}
                timeText={timeText}
                likeCount={likeCount}
                userCount={userCount}
                isShowDetail={isShowDetail}
                isShowTitle={isShowTitle}
                streamType={streamType}
                isStreamingState={isStreamingState}
                innerWidth={innerWidth}
                disable={broadTitle?.length === 0}
                handleSourceToggle={handleSourceToggle}
                setIsShowSM={setIsShowSM}
                setIsShowDetail={setIsShowDetail}
                setIsShowTitle={setIsShowTitle}
                setStopModal={setStopModal}
                setStartModal={setStartModal}
                handleShowViewers={handleShowViewers}
              />
            )}
          </STC.LiveWrapper>
          <STC.ChattingWrapper ref={chatHeightRef}>
            {isStreamingState !== 'streaming' && (
              <STC.ChattingPrepareWrap>
                <STC.ChattingPrepareWrapText>{t('chat_not_ready')}</STC.ChattingPrepareWrapText>
              </STC.ChattingPrepareWrap>
            )}
            <StreamChatting
              chatHeight={chatHeight}
              chatScrollRef={chatScrollRef}
              message={message}
              messages={messages}
              isFocus={isFocus}
              handleChange={handleChange}
              handleClick={handleClick}
              handlePress={handlePress}
              handlePressBan={handlePressBan}
              setIsFocus={setIsFocus}
            />
          </STC.ChattingWrapper>
        </STC.Content>
      </STC.PCWrapper>
      <STC.Content isTop={false}>
        <STC.ContentContainer>
          <STC.BroadTitle>
            {t('title')} ({broadTitle?.length}/100) <STC.Point>*</STC.Point>
            <STC.RequireText>({t('required')})</STC.RequireText>
          </STC.BroadTitle>
          <STC.ContentWrapper>
            <STC.InfoWrapper ratio="70%" isRight={false}>
              <STC.TitleInput
                type="text"
                disabled={isStreamingState === 'ready'}
                value={broadTitle}
                placeholder={titlePlaceholder}
                onChange={handleBroadTitle}
              />
              <STC.BroadTitle>
                {t('description')} ({broadDetail?.length}/5000)
              </STC.BroadTitle>

              <STC.DetailInput
                disabled={isStreamingState === 'ready'}
                onChange={handleBroadDetail}
                value={broadDetail}
                maxLength={5000}
              />
              <STC.ContentMarginTitle>{t('category')}</STC.ContentMarginTitle>
              <STC.InfoContent>
                <DropdownPicker
                  options={vodCategoryOptions}
                  value={broadCategory}
                  handleValue={(value) => {
                    if (value) {
                      handleBroadCategory(value);
                    }
                  }}
                  controllerColor="fc01"
                  optionColor="fc01"
                  isStreamingState={isStreamingState === 'ready'}
                />
                <STC.ButtonWrapper onClick={handleEditDisable}>
                  <Button
                    content={t('edit')}
                    type="secondary"
                    disable={broadTitle?.length === 0}
                    handleClick={handleEdit}
                  />
                </STC.ButtonWrapper>
              </STC.InfoContent>
            </STC.InfoWrapper>
            <STC.InfoWrapper ratio="25%" isRight={true}>
              {streamType === 'Liveview' ? (
                <STC.FlexWrapper>
                  <STC.InfoContent>
                    {cameras.map((camera) => {
                      if (camera.selected) {
                        return (
                          <STC.ContraintContent key={camera.deviceId}>
                            <STC.ContentTitle>{t('camera')}</STC.ContentTitle>
                            <STC.ConstraintContent>{camera.label}</STC.ConstraintContent>
                          </STC.ContraintContent>
                        );
                      }
                    })}
                    {audios.map((audio) => {
                      if (audio.selected) {
                        return (
                          <STC.ContraintContent key={audio.deviceId}>
                            <STC.ContentTitle>{t('audio')}</STC.ContentTitle>
                            <STC.ConstraintContent>{audio.label}</STC.ConstraintContent>
                          </STC.ContraintContent>
                        );
                      }
                    })}
                  </STC.InfoContent>
                </STC.FlexWrapper>
              ) : (
                <STC.DataWrapper>
                  <STC.DataTextWrapper>
                    <STC.DataTitle>{t('external_onboarding_server')}</STC.DataTitle>
                    <STC.DataContentWrapper>
                      <STC.DataContent>{channel.rtmpUrl}</STC.DataContent>
                    </STC.DataContentWrapper>
                    <CopyToClipboard text={channel.rtmpUrl} onCopy={onCopied}>
                      <STC.CopyImgWrapper>
                        <STC.CopyItem src={CopyItem} />
                      </STC.CopyImgWrapper>
                    </CopyToClipboard>
                  </STC.DataTextWrapper>
                  <STC.DataTextWrapper isBottom={true}>
                    <STC.DataTitle>{t('external_onboarding_streamkey')}</STC.DataTitle>
                    <STC.DataContentWrapper>
                      <STC.DataContent>{streamKey}</STC.DataContent>
                      <STC.VisibleIcon
                        src={toggle ? InputViewDisable : InputViewAble}
                        onClick={() => handleStreamKey(toggle)}
                      />
                    </STC.DataContentWrapper>
                    <CopyToClipboard text={channel.streamValue} onCopy={onCopied}>
                      <STC.CopyImgWrapper>
                        <STC.CopyItem src={CopyItem} />
                      </STC.CopyImgWrapper>
                    </CopyToClipboard>
                  </STC.DataTextWrapper>
                </STC.DataWrapper>
              )}
            </STC.InfoWrapper>
          </STC.ContentWrapper>
        </STC.ContentContainer>
      </STC.Content>
      <ShareModal title={broadData.title} isShow={isShowSM} setIsShow={() => setIsShowSM(!isShowSM)} link={shareLink} />
      <TwoBtnWaitModal
        isShow={startModal}
        setIsShow={() => setStartModal(!startModal)}
        wait={startModalWait}
        setWait={setStartModalWait}
        handleLeftBtn={() => setStartModal(false)}
        handleRightBtn={() => {
          handleStart();
          setStartModalWait(true);
        }}
        btnLeftContent={t('no')}
        btnRightContent={t('yes')}
        content={t('start_stream_modal')}
        waitContent={t('start_stream_wait_modal')}
      />
      <TwoBtnWaitModal
        isShow={stopModal}
        setIsShow={() => setStopModal(!stopModal)}
        wait={stopModalWait}
        setWait={setStopModalWait}
        handleLeftBtn={() => setStopModal(false)}
        handleRightBtn={() => {
          handleFinish();
          setStopModalWait(true);
        }}
        btnLeftContent={t('no')}
        btnRightContent={t('yes')}
        content={ExternalStopElement()}
        waitContent={t('stop_stream_wait_modal')}
      />
      <TwoBtnModal
        isShow={endModal}
        content={t('upload_stream_modal')}
        btnLeftContent={t('common_yes')}
        btnRightContent={t('common_no_thanks')}
        handleLeftBtn={handleUploadStream}
        handleRightBtn={() => {
          handleBack();
          setEndModal(false);
        }}
      />
      <OneBtnModal
        isShow={errorEndModal}
        content={t('stream_error_end')}
        btnContent={t('ok')}
        handleBtn={() => {
          handleBack();
          setErrorEndModal(false);
        }}
      />
      <OneBtnModal
        isShow={disableEditModal}
        content={t('disable_edit')}
        btnContent={t('ok')}
        handleBtn={() => {
          setDisableEditModal(false);
        }}
      />
    </STC.Container>
  );
};

export default Broadcasting;
