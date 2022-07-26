import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/app.scss';
import 'highlight.js/styles/github-dark-dimmed.css';
import Layout from './lib/Layout/Layout';
import Head from './components/Head';
import Loading from './components/Loading';
import { Docs } from './pages/Docs';
import { Components } from './pages/Components';

// import NotFound from './components/NotFound';
const About = lazy(() => import('./pages/About'));
const Intro = lazy(() => import('./docs/Intro'));
const Install = lazy(() => import('./docs/Install'));
const Usage = lazy(() => import('./docs/Usage'));
const NotFound = lazy(() => import('./components/NotFound'));
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
const InputEg = lazy(() => import('./eg/InputEg/index'));
const RadioEg = lazy(() => import('./eg/RadioEg/index'));
const CheckBoxEg = lazy(() => import('./eg/CheckBoxEg/index'));
const AutoCompleteEg = lazy(() => import('./eg/AutoCompleteEg/index'));
const UploadEg = lazy(() => import('./eg/UploadEg/index'));
const PopoverEg = lazy(() => import('./eg/PopoverEg/index'));
const SegmentedEg = lazy(() => import('./eg/SegmentedEg/index'));
const TableEg = lazy(() => import('./eg/TableEg/index'));
const TabsEg = lazy(() => import('./eg/TabsEg/index'));
const TagEg = lazy(() => import('./eg/TagEg/index'));
const TimelineEg = lazy(() => import('./eg/TimelineEg/index'));
const TooltipEg = lazy(() => import('./eg/TooltipEg/index'));
const TreeEg = lazy(() => import('./eg/TreeEg/index'));
const CommentEg = lazy(() => import('./eg/CommentEg/index'));
const EmptyEg = lazy(() => import('./eg/EmptyEg/index'));
const ImageEg = lazy(() => import('./eg/ImageEg/index'));
const ListEg = lazy(() => import('./eg/ListEg/index'));
const CalendarEg = lazy(() => import('./eg/CalendarEg/index'));
const CardEg = lazy(() => import('./eg/CardEg/index'));
const CarouselEg = lazy(() => import('./eg/CarouselEg/index'));
const CollapseEg = lazy(() => import('./eg/CollapseEg/index'));
const BadgeEg = lazy(() => import('./eg/BadgeEg/index'));
const AvatarEg = lazy(() => import('./eg/AvatarEg/index'));
const DrawerEg = lazy(() => import('./eg/DrawerEg/index'));
const LoadingEg = lazy(() => import('./eg/LoadingEg/index'));
const ModalEg = lazy(() => import('./eg/ModalEg/index'));
const NotificationEg = lazy(() => import('./eg/NotificationEg/index'));
const PopConfirmEg = lazy(() => import('./eg/PopConfirmEg/index'));
const ProgressEg = lazy(() => import('./eg/ProgressEg/index'));
const ResultEg = lazy(() => import('./eg/ResultEg/index'));
const SkeletonEg = lazy(() => import('./eg/SkeletonEg/index'));
const TipEg = lazy(() => import('./eg/TipEg/index'));
const AlertEg = lazy(() => import('./eg/AlertEg/index'));
const BackTopEg = lazy(() => import('./eg/BackTopEg/index'));

const App: React.FC = () => (
  <Layout>
    <Head />
    <Routes>
      <Route path="/" element={<Docs />}>
        <Route index element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="install" element={<Install />} />
        <Route path="usage" element={<Usage />} />
      </Route>
      <Route path="/docs" element={<Docs />}>
        <Route index element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="install" element={<Install />} />
        <Route path="usage" element={<Usage />} />
      </Route>
      <Route path="/components" element={<Components />}>
        <Route index element={<TypographyEg />} />
        <Route path="typography" element={<TypographyEg />} />
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
        <Route path="input" element={<InputEg />} />
        <Route path="radio" element={<RadioEg />} />
        <Route path="checkBox" element={<CheckBoxEg />} />
        <Route path="autoComplete" element={<AutoCompleteEg />} />
        <Route path="upload" element={<UploadEg />} />
        <Route path="popover" element={<PopoverEg />} />
        <Route path="segmented" element={<SegmentedEg />} />
        <Route path="table" element={<TableEg />} />
        <Route path="tabs" element={<TabsEg />} />
        <Route path="tag" element={<TagEg />} />
        <Route path="timeline" element={<TimelineEg />} />
        <Route path="tooltip" element={<TooltipEg />} />
        <Route path="tree" element={<TreeEg />} />
        <Route path="comment" element={<CommentEg />} />
        <Route path="empty" element={<EmptyEg />} />
        <Route path="image" element={<ImageEg />} />
        <Route path="list" element={<ListEg />} />
        <Route path="calendar" element={<CalendarEg />} />
        <Route path="card" element={<CardEg />} />
        <Route path="carousel" element={<CarouselEg />} />
        <Route path="collapse" element={<CollapseEg />} />
        <Route path="badge" element={<BadgeEg />} />
        <Route path="avatar" element={<AvatarEg />} />
        <Route path="drawer" element={<DrawerEg />} />
        <Route path="loading" element={<LoadingEg />} />
        <Route path="modal" element={<ModalEg />} />
        <Route path="notification" element={<NotificationEg />} />
        <Route path="popConfirm" element={<PopConfirmEg />} />
        <Route path="progress" element={<ProgressEg />} />
        <Route path="result" element={<ResultEg />} />
        <Route path="skeleton" element={<SkeletonEg />} />
        <Route path="tip" element={<TipEg />} />
        <Route path="alert" element={<AlertEg />} />
        <Route path="backTop" element={<BackTopEg />} />
      </Route>
      <Route
        path="about"
        element={
          <Suspense>
            <About />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </Layout>
);

export default App;
