import { useState } from 'react';

const useChat = (isStreamer: boolean) => {
  const [showBtn, setShowBtn] = useState(false);

  const handleClickUserId = () => {
    setShowBtn(!isStreamer && !showBtn);
  };

  const handleBtnOff = () => {
    setShowBtn(false);
  };

  return {
    showBtn,
    handleClickUserId,
    handleBtnOff,
  };
};

export default useChat;
