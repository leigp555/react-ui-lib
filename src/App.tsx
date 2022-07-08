import React, {Suspense, lazy, ComponentType} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import {
    Routes,
    Route, useLocation, Navigate,
} from 'react-router-dom'

const Home = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Home')
})
const About = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/About')
})
const History = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/History')
})
const NotFound = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/NotFound')
})
const Login = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Login')
})
const Register = lazy((): Promise<{ default: ComponentType<any> }> => {
    return import('./pages/Register')
})


interface AuthContextType {
    username: string;
    isLogin: boolean
    login: (user: string) => void;
    logout: () => void;
}

type UserState = { isLogin: boolean, username: string }

export const AuthContext = React.createContext<AuthContextType>(null!);

//创建一个用户状态并传给后代后代可以查询或修改用户状态
function AuthProvider({children}: { children: React.ReactNode }) {
    const [userInfo, setUser] = React.useState<UserState>({isLogin: false, username: ''});
    const login = (newUser: string): void => {
        setUser(() => {
            return {isLogin: true, username: newUser}
        })
    };
    const logout = (): void => {
        setUser(() => {
            return {isLogin: false, username: ''}
        })
    };
    let value: AuthContextType = {username: userInfo.username, isLogin: userInfo.isLogin, login, logout};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//验证用户信息
function RequireAuth({children}: { children: JSX.Element }) {
    const {isLogin} = React.useContext(AuthContext);
    const location = useLocation();
    if (!isLogin) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }
    return children;
}


const App: React.FC<{}> = () => {
    return (
        <AuthProvider>
            <Header/>
            <Suspense fallback={<Loading/>}>
                <main id='main'>
                    <Routes>
                        <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>
                        <Route path="/history" element={<RequireAuth><History/></RequireAuth>}/>
                        <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            </Suspense>
            <Footer/>
        </AuthProvider>
    );
}
export default App;
