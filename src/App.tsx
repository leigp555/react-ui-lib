import React, { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './style/app.scss';
import 'highlight.js/styles/github-dark-dimmed.css';
import Layout from './lib/Layout/Layout';
import Content from './lib/Layout/Content';
import Head from './components/Head';
import ComponentAside from './components/ComponentAside';
// import DocAside from './components/DocAside';
import Loading from './components/Loading';

// import ButtonEg from './eg/ButtonEg/ButtonEg';
// import TypographyEg from './eg/Typography/Typography';

const ButtonEg = lazy(() => import('./eg/ButtonEg/ButtonEg'));
const TypographyEg = lazy(() => import('./eg/TypographyEg/TypographyEg'));
const PaletteEg = lazy(() => import('./eg/PaletteEg/PaletteEg'));
const SpaceEg = lazy(() => import('./eg/SpaceEg/SpaceEg'));
const LayoutEg = lazy(() => import('./eg/LayoutEg/LayoutEg'));
const GridEg = lazy(() => import('./eg/Grid/GridEg'));

// 文档页
// const Docs: React.FC = () => {
//   return (
//     <Content>
//       <DocAside />
//       <div className="component-show">
//         <Outlet />
//       </div>
//     </Content>
//   );
// };
// 组件页
const Components: React.FC = () => {
  return (
    <Content>
      <ComponentAside />
      <div className="component-show">
        <Outlet />
      </div>
    </Content>
  );
};

const App: React.FC = () => (
  <Layout>
    <Head />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Components />}>
          <Route index element={<TypographyEg />} />
          <Route path="button" element={<ButtonEg />} />
          <Route path="palette" element={<PaletteEg />} />
          <Route path="space" element={<SpaceEg />} />
          <Route path="layout" element={<LayoutEg />} />
          <Route path="grid" element={<GridEg />} />
        </Route>
      </Routes>
    </Suspense>
  </Layout>
);

export default App;

// <Content>
//   <ComponentAside />
//   <Suspense fallback={<Loading />}>
//     <Route
//       path="/"
//       element={
//         <div className="component-show">
//           <Outlet />
//         </div>
//       }
//     >
//       <Route path="/" element={<TypographyEg />} />
//       <Route path="/button" element={<ButtonEg />} />
//     </Route>
//   </Suspense>
// </Content>
