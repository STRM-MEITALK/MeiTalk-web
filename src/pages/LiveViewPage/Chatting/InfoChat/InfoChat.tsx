import React from 'react';
import { IInfoChat } from '@type/chattingType';
import * as ChatStyle from './InfoChat.style';

const InfoChat = ({ message, isLast }: IInfoChat) => {
  return (
    <ChatStyle.SCChatContianer isLast={isLast}>
      <ChatStyle.SCHorizontalLine />
      <ChatStyle.SCChatText>{message}</ChatStyle.SCChatText>
      <ChatStyle.SCHorizontalLine />
    </ChatStyle.SCChatContianer>
  );
};

export default InfoChat;
