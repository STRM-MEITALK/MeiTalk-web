import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/stores/index';
import { handleAccessDenyModal } from '@slice/globalModalSlice';

const useEmailFailPage = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickResend = () => {
    navigate('/', { replace: true });
    dispatch(handleAccessDenyModal(true));
  };

  useEffect(() => {
    navigate('/', { replace: true });
    dispatch(handleAccessDenyModal(true));
  }, []);

  return {
    user,
    handleClickResend,
  };
};

export default useEmailFailPage;
