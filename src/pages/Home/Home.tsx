import Section from './components/Section/Section';
import styles from './Home.module.css';
import Banner from './modules/Banner/Banner';
import Bestsellers from './modules/Bestsellers/Bestsellers';
import CategoryList from './modules/CategoryList/CategoryList';
import NewArrivals from './modules/NewArrivals/NewArrivals';

import Footer from '@/Layout/Footer/Footer';

const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <Banner />
        <Section text="Popular categories">
          <CategoryList />
        </Section>
        <Section text="Best sellers">
          <Bestsellers />
        </Section>
        <Section text="New arrivals">
          <NewArrivals />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
