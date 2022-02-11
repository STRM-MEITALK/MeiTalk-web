import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RequestStatus from '@lib/RequestStatus';
import useInnerWidth from '@hooks/useInnerWidth';
import useGoToChannel from '@hooks/useGoToChannel';
import { IStreamListType } from '@type/streamType';
import Profile from '@components/Profile';
import ShareModal from '@components/Modal/ShareModal';
import StreamItem from '@components/StreamItem';
import CannotWatch from '@components/CannotWatch';
import ArrowUp from '@images/arrow-up.png';
import ArrowDown from '@images/arrow-down.png';
import { sizes } from '@styles/media';
import Player from './Player';
import useReplayViewPage from './useReplayViewPage';
import Comment from './Comment';
import PCVideoInfo from './PCVideoInfo';
import MobileVideoInfo from './MobileVideoInfo';
import * as STC from './ReplayViewPage.style';

const ReplayViewPage = () => {
  const {
    replayViewInfo,
    replayViewInfoStatus,
    commentHeightRef,
    commentHeight,
    streamList,
    pageNo,
    totalElements,
    isShowSM,
    isShowDetail,
    showComment,
    isShowTitle,
    fetchStreamList,
    setIsShowSM,
    setIsShowDetail,
    onHandleShowComment,
    setIsShowTitle,
  } = useReplayViewPage();
  const { innerWidth } = useInnerWidth();
  const { goToChannel } = useGoToChannel({ channelId: replayViewInfo.channelId });

  if (replayViewInfoStatus === RequestStatus.NODATA) {
    return <CannotWatch />;
  } else {
    return (
      <STC.Container>
        {innerWidth > sizes.tablet ? (
          <STC.PCWrapper showComment={showComment}>
            <STC.Content>
              <STC.ReplayWrapper showComment={showComment}>
                <Player showComment={showComment} />
                <PCVideoInfo
                  replayViewInfo={replayViewInfo}
                  showComment={showComment}
                  isShowTitle={isShowTitle}
                  setIsShowSM={setIsShowSM}
                  onHandleShowComment={() => onHandleShowComment(!showComment)}
                  setIsShowTitle={setIsShowTitle}
                />
              </STC.ReplayWrapper>
              {showComment && (
                <STC.CommentWrapper ref={commentHeightRef}>
                  <Comment onHandleShowComment={onHandleShowComment} commentHeight={commentHeight} />
                </STC.CommentWrapper>
              )}
            </STC.Content>
            <STC.CannelBlock showComment={showComment}>
              <STC.ProfileWrapper>
                <Profile type="ps36" src={replayViewInfo.profile} channelId={replayViewInfo.channelId} />
                <STC.ChannelText onClick={goToChannel}>{replayViewInfo.name}</STC.ChannelText>
              </STC.ProfileWrapper>
              {replayViewInfo.detail !== null && replayViewInfo.detail !== '' && (
                <STC.DetailWrapper>
                  <STC.DetailText isShowDetail={isShowDetail}>{replayViewInfo.detail}</STC.DetailText>
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
              <STC.ReplayWrapper showComment={showComment}>
                <Player showComment={showComment} />
                <MobileVideoInfo
                  replayViewInfo={replayViewInfo}
                  showComment={showComment}
                  setIsShowSM={setIsShowSM}
                  onHandleShowComment={() => onHandleShowComment(!showComment)}
                  goToChannel={goToChannel}
                  isShowDetail={isShowDetail}
                  isShowTitle={isShowTitle}
                  setIsShowDetail={setIsShowDetail}
                  setIsShowTitle={setIsShowTitle}
                />
              </STC.ReplayWrapper>
              {showComment && (
                <STC.CommentWrapper ref={commentHeightRef}>
                  <Comment onHandleShowComment={onHandleShowComment} commentHeight={commentHeight} />
                </STC.CommentWrapper>
              )}
            </STC.Content>
          </STC.MobileWrapper>
        )}
        <STC.StreamList isShow={showComment}>
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
          title={replayViewInfo.title}
          isShow={isShowSM}
          link={window.location.href}
          setIsShow={() => setIsShowSM(!isShowSM)}
        />
      </STC.Container>
    );
  }
};

export default ReplayViewPage;
