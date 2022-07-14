import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState, useAppSelector } from '../store';

// 验证用户信息
function RequireAuth({ children }: { children: JSX.Element }) {
  const user = useAppSelector((state: RootState) => state.user);
  const location = useLocation();
  if (!user.isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
