import React, { memo } from 'react';
import { IReturnMessageS } from '@type/chattingType';
import { useTranslation } from 'react-i18next';
import ChatProfile from '@components/ChatProfile';
import * as ChatStyle from './StreamChat.style';
import useChat from './useStreamChat';

const Chat = ({ userimg, userName, message, type, cuid, isStreamer, isLast, handlePressBan }: IReturnMessageS) => {
  const { t } = useTranslation();
  const { showBtn, handleClickUserId, handleBtnOff } = useChat(isStreamer);

  const clickEliminate = () => {
    handleBtnOff();
    handlePressBan([userName], 'c', cuid);
  };

  return (
    <ChatStyle.SCChatContianer isLast={isLast}>
      <ChatProfile userimg={userimg} isStreamer={isStreamer} />

      <ChatStyle.SCChat>
        <ChatStyle.SCChatInnerContainer onClick={handleClickUserId}>
          <ChatStyle.SCChatText01>{userName}</ChatStyle.SCChatText01>
          {!isStreamer && <ChatStyle.SCTriangle />}
        </ChatStyle.SCChatInnerContainer>

        {showBtn && <ChatStyle.SCEliminateBtn onClick={clickEliminate}>{t('eliminate')}</ChatStyle.SCEliminateBtn>}

        <ChatStyle.SCChatText02>{message}</ChatStyle.SCChatText02>
      </ChatStyle.SCChat>
    </ChatStyle.SCChatContianer>
  );
};

export default memo(Chat);
