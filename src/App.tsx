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

const ButtonEg = lazy(() => import('./eg/ButtonEg/index'));
const TypographyEg = lazy(() => import('./eg/TypographyEg/index'));
const PaletteEg = lazy(() => import('./eg/PaletteEg/index'));
const SpaceEg = lazy(() => import('./eg/SpaceEg/SpaceEg'));
const LayoutEg = lazy(() => import('./eg/LayoutEg/LayoutEg'));
const GridEg = lazy(() => import('./eg/GridEg/GridEg'));
const DividerEg = lazy(() => import('./eg/DividerEg/DividerEg'));
const StepsEg = lazy(() => import('./eg/StepsEg/StepsEg'));
const PaginationEg = lazy(() => import('./eg/PaginationEg/PaginationEg'));
const MenuEg = lazy(() => import('./eg/MenuEg/MenuEg'));
const DropdownEg = lazy(() => import('./eg/DropdownEg/DropdownEg'));

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
          <Route path="divider" element={<DividerEg />} />
          <Route path="steps" element={<StepsEg />} />
          <Route path="pagination" element={<PaginationEg />} />
          <Route path="menu" element={<MenuEg />} />
          <Route path="dropdown" element={<DropdownEg />} />
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
