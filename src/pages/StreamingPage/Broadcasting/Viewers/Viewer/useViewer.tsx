import { useState } from 'react';

const useViewer = () => {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  return {
    check,
    handleChange,
  };
};

export default useViewer;
