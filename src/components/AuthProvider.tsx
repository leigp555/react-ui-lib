import React from 'react';

interface AuthContextType {
  username: string;
  isLogin: boolean;
  login: (user: string) => void;
  logout: () => void;
}
type UserState = { isLogin: boolean, username: string }
export const AuthContext = React.createContext<AuthContextType>(null!);

// 创建一个用户状态并传给后代后代可以查询或修改用户状态
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUser] = React.useState<UserState>({
    isLogin: false,
    username: '',
  });
  const login = (newUser: string): void => {
    setUser(() => ({
      isLogin: true,
      username: newUser,
    }));
  };
  const logout = (): void => {
    setUser(() => ({
      isLogin: false,
      username: '',
    }));
  };
  const value: AuthContextType = {
    username: userInfo.username,
    isLogin: userInfo.isLogin,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider
