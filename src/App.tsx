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
const SpaceEg = lazy(() => import('./eg/SpaceEg/index'));
const LayoutEg = lazy(() => import('./eg/LayoutEg/index'));
const GridEg = lazy(() => import('./eg/GridEg/index'));
const DividerEg = lazy(() => import('./eg/DividerEg/index'));
const StepsEg = lazy(() => import('./eg/StepsEg/index'));
const PaginationEg = lazy(() => import('./eg/PaginationEg/index'));
const MenuEg = lazy(() => import('./eg/MenuEg/index'));
const DropdownEg = lazy(() => import('./eg/DropdownEg/index'));
const BreadcrumbEg = lazy(() => import('./eg/BreadcrumbEg/index'));
const AffixEg = lazy(() => import('./eg/AffixEg/index'));
const SliderEg = lazy(() => import('./eg/SliderEg/index'));
const SwitchEg = lazy(() => import('./eg/SwitchEg/index'));
const FormEg = lazy(() => import('./eg/FormEg/index'));

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
      <div className="component-show" id="app-component-show">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </Content>
  );
};

const App: React.FC = () => (
  <Layout>
    <Head />
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
        <Route path="breadcrumb" element={<BreadcrumbEg />} />
        <Route path="affix" element={<AffixEg />} />
        <Route path="slider" element={<SliderEg />} />
        <Route path="switch" element={<SwitchEg />} />
        <Route path="form" element={<FormEg />} />
      </Route>
    </Routes>
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
