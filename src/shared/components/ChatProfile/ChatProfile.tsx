import React from 'react';
import Crown from '@images/crown.png';
import { IChatProfile } from '@type/chattingType';
import * as ChatStyle from './ChatProfile.style';

const ChatProfile = ({ userimg, isStreamer }: IChatProfile) => {
  return (
    <ChatStyle.SCChatImgContainer>
      <ChatStyle.SCChatImg src={userimg} />
      {isStreamer && <ChatStyle.SCCrown src={Crown} />}
    </ChatStyle.SCChatImgContainer>
  );
};

export default ChatProfile;
