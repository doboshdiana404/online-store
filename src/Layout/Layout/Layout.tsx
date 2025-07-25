import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Modal from '@/components/Modal/Modal';

import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
      <Modal />
    </>
  );
};

export default Layout;
