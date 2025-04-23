import { Route, Routes } from 'react-router-dom';

import Catalog from '@pages/Catalog/Catalog';
import Home from '@pages/Home/Home';
import Page404 from '@pages/Page404/Page404';
import Users from '@pages/Users/Users';

import Layout from './Layout/Layout/Layout';
import Category from './pages/Category/Category';
import AllCategory from './pages/Category/modules/AllCategory/AllCategory';
import CreateCategory from './pages/Category/modules/CreateCategory/CreateCategory';
import EditCategoryById from './pages/Category/modules/EditCategoryById/EditCategoryById';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import Product from './pages/Product/Product';

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path={'/product/:productId'} element={<Product />} />
        <Route path="/category" element={<Category />}>
          <Route path="/category/all" element={<AllCategory />} />
          <Route path="/category/create" element={<CreateCategory />} />
          <Route
            path="/category/edit/:categoryId"
            element={<EditCategoryById />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
