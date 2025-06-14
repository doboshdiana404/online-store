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
import Checkout from './pages/Checkout/Checkout';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import DeliveryPage from './pages/Delivery/DeliveryPage';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';
import Product from './pages/Product/Product';

const AppRoute = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path={'/product/:productId'} element={<Product />} />
        <Route path={'/delivery'} element={<DeliveryPage />} />
        <Route path={'/checkout'} element={<Checkout />} />
        <Route path={'/order-success'} element={<OrderSuccess />} />
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
