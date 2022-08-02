import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => (
  <Suspense>
    <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </Suspense>
);

export default App;
