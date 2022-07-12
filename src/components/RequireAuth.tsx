import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

// 验证用户信息
// eslint-disable-next-line no-undef
function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLogin } = React.useContext(AuthContext);
  const location = useLocation();
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth
