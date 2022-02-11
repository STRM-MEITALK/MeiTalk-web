import React from 'react';
import xMarkImg from '@images/xMark.png';
import { useTranslation } from 'react-i18next';
import { IChattingProps } from '@type/chattingType';
import DonateIconPc from '@images/donation-icon-pc.png';
import DonateIconActive from '@images/donation-icon-activation.png';
import DonateIconDisable from '@images/donation-icon-disabled.png';
import * as ChatStyle from './Chatting.style';
import useChatting from './useChatting';
import Chat from './Chat';
import InfoChat from './InfoChat';
import Donate from './Donate';

const ChatView = function ({ chatHeight, messages, handleShowChat, handleMessage, isLiveFinish }: IChattingProps) {
  const { t } = useTranslation();
  const { chatScrollRef, message, isFocus, isFullScreen, showDonate, handleChange, setIsFocus, setShowDonate } =
    useChatting(handleMessage, messages);

  return (
    <ChatStyle.SCContainer isFullScreen={isFullScreen}>
      {!isFullScreen && (
        <ChatStyle.SCHeader>
          {t('liveview_live_chatting')}
          <ChatStyle.SCHeaderBtn onClick={() => handleShowChat(false)}>
            <ChatStyle.SCHeaderImg src={xMarkImg} />
          </ChatStyle.SCHeaderBtn>
        </ChatStyle.SCHeader>
      )}

      <ChatStyle.SCChatsContainer chatHeight={chatHeight}>
        {isFullScreen ? <div /> : <ChatStyle.SCGradient />}

        <ChatStyle.SCChats ref={chatScrollRef}>
          {messages.map((el, idx) => {
            const key = `${idx}`;

            return el.type === 'talk' ? (
              <Chat
                key={`${el.userId}${el.message}${key}`}
                userimg={el.userimg}
                userName={el.userName}
                message={el.message}
                isLast={idx === messages.length - 1}
                isStreamer={el.isStreamer === 'true'}
              />
            ) : (
              <InfoChat key={`${el.message}${key}`} message={el.message} isLast={idx === messages.length - 1} />
            );
          })}
        </ChatStyle.SCChats>
      </ChatStyle.SCChatsContainer>

      <ChatStyle.SCFooter isFullScreen={isFullScreen}>
        {showDonate && !isLiveFinish && <Donate />}

        <ChatStyle.SCSubmitContainer isFocus={isFocus}>
          <ChatStyle.SCInput
            placeholder={isLiveFinish ? t('cannot_chat') : t('enter_a_message')}
            value={isLiveFinish ? '' : message}
            onChange={handleChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            disabled={isLiveFinish}
            isLiveFinish={isLiveFinish}
          />

          <ChatStyle.SCButton2
            onClick={() => setShowDonate(!showDonate)}
            disabled={isLiveFinish}
            isLiveFinish={isLiveFinish}
          >
            {isFocus ? (
              <ChatStyle.SCButtonImg src={DonateIconPc} />
            ) : (
              <ChatStyle.SCButtonImg src={showDonate ? DonateIconActive : DonateIconDisable} />
            )}
          </ChatStyle.SCButton2>

          <ChatStyle.SCButton disabled={isLiveFinish} isLiveFinish={isLiveFinish}>
            {t('send')}
          </ChatStyle.SCButton>
        </ChatStyle.SCSubmitContainer>
      </ChatStyle.SCFooter>
    </ChatStyle.SCContainer>
  );
};

export default ChatView;
