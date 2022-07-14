import React, {
  Suspense, lazy,
} from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import RequireAuth from './components/RequireAuth';

const Home = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/Home'));
const About = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/About'));
const History = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/History'));
const NotFound = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/NotFound'));
const Login = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/Login'));
const Register = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/Register'));
const Test = lazy((): Promise<{ default: React.FC<any> }> => import('./pages/Test'));



const App: React.FC = () => (
  <>
    <Header />
    <Suspense fallback={<Loading />}>
      <main id="main">
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/history" element={<RequireAuth><History /></RequireAuth>} />
          <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Suspense>
    <Footer />
  </>

);
export default App;
