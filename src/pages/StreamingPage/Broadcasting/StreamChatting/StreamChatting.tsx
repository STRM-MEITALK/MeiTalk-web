import React, { useRef, useState } from 'react';
import Profile from '@components/Profile';
import xMarkImg from '@images/xMark.png';
import { useTranslation } from 'react-i18next';
import * as STC from './StreamChatting.style';
import useStreamChatting from './useStreamChatting';
import StreamChat from './StreamChat';
import { IStreamChattingProps } from './StreamChattingType';

const StreamChatting = function ({
  chatHeight,
  chatScrollRef,
  message,
  messages,
  isFocus,
  handleChange,
  handleClick,
  handlePress,
  handlePressBan,
  setIsFocus,
}: IStreamChattingProps) {
  const { t } = useTranslation();
  const { isLiveFinish, userName } = useStreamChatting();

  return (
    <STC.SCContainer>
      <STC.SCHeader>{t('liveview_live_chatting')}</STC.SCHeader>

      <STC.SCChatsContainer chatHeight={chatHeight}>
        <STC.SCGradient />

        <STC.SCChats ref={chatScrollRef}>
          {messages.map((el, idx) => {
            const key = `${idx}`;

            return (
              <StreamChat
                key={`${el.userId}${key}`}
                userimg={el.userimg}
                userName={el.userName}
                message={el.message}
                type={el.type}
                cuid={el.sessionId}
                isStreamer={el.isStreamer === 'true'}
                isLast={idx === messages.length - 1}
                handlePressBan={handlePressBan}
              />
            );
          })}
        </STC.SCChats>
      </STC.SCChatsContainer>

      <STC.SCFooter>
        <STC.SCSubmitContainer isFocus={isFocus}>
          <STC.SCInput
            placeholder={t('enter_a_message')}
            value={message}
            onChange={handleChange}
            onKeyPress={handlePress}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            disabled={isLiveFinish}
            isLiveFinish={isLiveFinish}
          />
          <STC.SCButton onClick={handleClick} disabled={isLiveFinish} isLiveFinish={isLiveFinish}>
            {t('send')}
          </STC.SCButton>
        </STC.SCSubmitContainer>
      </STC.SCFooter>
    </STC.SCContainer>
  );
};

export default StreamChatting;
