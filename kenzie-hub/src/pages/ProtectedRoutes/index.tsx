import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext/UserContext';

const ProtectedRoutes = () => {
  const { allowLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!allowLogin) {
      navigate('/');
    }
  });

  return <>{allowLogin ? <Outlet /> : null}</>;
};

export default ProtectedRoutes;
