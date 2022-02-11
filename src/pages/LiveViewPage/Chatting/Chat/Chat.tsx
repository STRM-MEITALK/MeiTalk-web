import React, { memo } from 'react';
import { IChat } from '@type/chattingType';
import ChatProfile from '@components/ChatProfile';
import * as ChatStyle from './Chat.style';

const Chat = ({ userimg, userName, message, isLast, isStreamer }: IChat) => {
  return (
    <ChatStyle.SCChatContianer isLast={isLast}>
      <ChatProfile userimg={userimg} isStreamer={isStreamer} />

      <ChatStyle.SCChat>
        <ChatStyle.SCChatInnerContainer>
          <ChatStyle.SCChatText01>{userName}</ChatStyle.SCChatText01>
        </ChatStyle.SCChatInnerContainer>

        <ChatStyle.SCChatText02>{message}</ChatStyle.SCChatText02>
      </ChatStyle.SCChat>
    </ChatStyle.SCChatContianer>
  );
};

export default memo(Chat);
