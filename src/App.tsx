import React, {
  Suspense, lazy, ComponentType,
} from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import AuthProvider from './components/AuthProvider';
import RequireAuth from './components/RequireAuth';

const Home = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Home'));
const About = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/About'));
const History = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/History'));
const NotFound = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/NotFound'));
const Login = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Login'));
const Register = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Register'));
const Test = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Test'));
const Ant = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Ant'));
const Svg = lazy((): Promise<{ default: ComponentType<any> }> => import('./pages/Svg'));


const App: React.FC<{}> = () => (
  <AuthProvider>
    <Header />
    <Suspense fallback={<Loading />}>
      <main id="main">
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
          <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="/test" element={<Test />} />
          <Route path="/ant" element={<Ant />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/svg" element={<Svg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Suspense>
    <Footer />
  </AuthProvider>
);
export default App;
