import { useDispatch } from 'react-redux';
import { handlePreparingModal } from '@slice/globalModalSlice';

const useContactIcon = () => {
  const dispatch = useDispatch();

  const handleLink = (link: string) => {
    dispatch(handlePreparingModal(true));
  };
  return {
    handleLink,
  };
};

export default useContactIcon;
