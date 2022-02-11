import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RequestStatus from '@lib/RequestStatus';
import useInnerWidth from '@hooks/useInnerWidth';
import useGoToChannel from '@hooks/useGoToChannel';
import { useTranslation } from 'react-i18next';
import { IStreamListType } from '@type/streamType';
import Profile from '@components/Profile';
import ShareModal from '@components/Modal/ShareModal';
import StreamItem from '@components/StreamItem';
import CannotWatch from '@components/CannotWatch';
import { sizes } from '@styles/media';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import Player from './Player';
import Chatting from './Chatting';
import BoradcastEnded from './BroadcastEnded';
import useLiveViewPage from './useLiveViewPage';
import PCVideoInfo from './PCVideoInfo';
import MobileVideoInfo from './MobileVideoInfo';
import * as STC from './LiveViewPage.style';

const LiveViewPage = () => {
  const { t } = useTranslation();
  const {
    liveViewInfoStatus,
    chatHeightRef,
    chatHeight,
    liveViewInfo,
    streamList,
    pageNo,
    streamTime,
    totalElements,
    isShowChat,
    messages,
    isLiveFinish,
    isShowSM,
    isShowDetail,
    isShowChatM,
    isShowTitle,
    setChatHeight,
    fetchStreamList,
    handleShowChat,
    handleShowChatM,
    handleMessage,
    setIsShowSM,
    setIsShowDetail,
    setIsShowTitle,
  } = useLiveViewPage();

  const { innerWidth } = useInnerWidth();
  const { goToChannel } = useGoToChannel({ channelId: liveViewInfo.channelId });

  useEffect(() => {
    if (chatHeightRef.current) {
      setChatHeight(window.innerHeight - chatHeightRef.current?.offsetTop);
    }
  }, []);

  if (liveViewInfoStatus === RequestStatus.NODATA) {
    return <CannotWatch />;
  } else {
    return (
      <STC.Container>
        {innerWidth > sizes.tablet ? (
          <STC.PCWrapper showChat={isShowChat}>
            <STC.Content>
              <STC.LiveWrapper showChat={isShowChat}>
                {isLiveFinish ? <BoradcastEnded /> : <Player showChat={isShowChat} />}
                <PCVideoInfo
                  liveViewInfo={liveViewInfo}
                  isLiveFinish={isLiveFinish}
                  showChat={isShowChat}
                  streamTime={streamTime}
                  isShowTitle={isShowTitle}
                  setIsShowSM={setIsShowSM}
                  handleShowChat={() => handleShowChat(!isShowChat)}
                  setIsShowTitle={setIsShowTitle}
                />
              </STC.LiveWrapper>
              {isShowChat && (
                <STC.ChattingWrapper ref={chatHeightRef} fullScreen={false}>
                  <Chatting
                    chatHeight={chatHeight}
                    messages={messages}
                    handleShowChat={handleShowChat}
                    handleMessage={handleMessage}
                    isLiveFinish={isLiveFinish}
                  />
                </STC.ChattingWrapper>
              )}
            </STC.Content>
            <STC.CannelBlock showChat={isShowChat}>
              <STC.ProfileWrapper>
                <Profile type="ps36" src={liveViewInfo.profile} channelId={liveViewInfo.channelId} />
                <STC.ChannelText onClick={goToChannel}>{liveViewInfo.name}</STC.ChannelText>
              </STC.ProfileWrapper>
              {liveViewInfo.detail !== null && liveViewInfo.detail !== '' && (
                <STC.DetailWrapper>
                  <STC.DetailText isShowDetail={isShowDetail}>{liveViewInfo.detail}</STC.DetailText>
                  <STC.Arrow
                    src={isShowDetail ? ArrowUp : ArrowDown}
                    alt=""
                    onClick={() => setIsShowDetail(!isShowDetail)}
                  />
                </STC.DetailWrapper>
              )}
            </STC.CannelBlock>
          </STC.PCWrapper>
        ) : (
          <STC.MobileWrapper>
            <STC.Content>
              <STC.LiveWrapper showChat={isShowChatM}>
                {isLiveFinish ? <BoradcastEnded /> : <Player showChat={isShowChatM} />}
                <MobileVideoInfo
                  liveViewInfo={liveViewInfo}
                  isLiveFinish={isLiveFinish}
                  showChat={isShowChatM}
                  isShowDetail={isShowDetail}
                  streamTime={streamTime}
                  isShowTitle={isShowTitle}
                  setIsShowSM={setIsShowSM}
                  onHandleShowChat={() => handleShowChatM(!isShowChatM)}
                  goToChannel={goToChannel}
                  setIsShowDetail={setIsShowDetail}
                  setIsShowTitle={setIsShowTitle}
                />
              </STC.LiveWrapper>
            </STC.Content>
            {isShowChatM && (
              <STC.ChattingWrapper ref={chatHeightRef} fullScreen={false}>
                <Chatting
                  chatHeight={chatHeight}
                  messages={messages}
                  handleShowChat={handleShowChatM}
                  handleMessage={handleMessage}
                  isLiveFinish={isLiveFinish}
                />
              </STC.ChattingWrapper>
            )}
          </STC.MobileWrapper>
        )}
        <STC.StreamList isShow={isShowChatM}>
          <InfiniteScroll
            dataLength={streamList.length}
            next={() => {
              fetchStreamList(pageNo + 1);
            }}
            hasMore={!(totalElements === streamList.length)}
            loader={<span />}
            className="infinite"
          >
            {streamList.map((item: IStreamListType) => (
              <StreamItem key={item.vodId} item={item} />
            ))}
          </InfiniteScroll>
        </STC.StreamList>
        <ShareModal
          isShow={isShowSM}
          setIsShow={() => setIsShowSM(!isShowSM)}
          title={liveViewInfo.title}
          link={window.location.href}
        />
      </STC.Container>
    );
  }
};

export default LiveViewPage;
