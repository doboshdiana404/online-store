import { Route, Routes } from 'react-router-dom';

import Catalog from '@pages/Catalog/Catalog';
import Home from '@pages/Home/Home';
import Page404 from '@pages/Page404/Page404';

import Layout from './Layout/Layout/Layout';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
