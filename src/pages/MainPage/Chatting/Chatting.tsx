import React from 'react';
import * as ChatStyle from './Chatting.style';
import useChatting from './useChatting';
import Chat from './Chat';

const ChatView = function ({ isShowChat }: { isShowChat: boolean }) {
  const { chatScrollRef, messages } = useChatting();

  return (
    <ChatStyle.SCContainer isShowChat={isShowChat}>
      <ChatStyle.SCChatsContainer>
        <ChatStyle.SCChats ref={chatScrollRef}>
          {messages.map((el, idx) => {
            const key = `${idx}`;

            return (
              <Chat
                key={`${el.userId}${el.message}${key}`}
                userimg={el.userimg}
                userName={el.userName}
                message={el.message}
                isLast={idx === messages.length - 1}
                isStreamer={el.isStreamer === 'true'}
              />
            );
          })}
        </ChatStyle.SCChats>
      </ChatStyle.SCChatsContainer>
    </ChatStyle.SCContainer>
  );
};

export default ChatView;
