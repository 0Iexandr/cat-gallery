import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';

import Layout from './layout/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <FavoritesProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </FavoritesProvider>
    </Suspense>
  );
};

export default App;
