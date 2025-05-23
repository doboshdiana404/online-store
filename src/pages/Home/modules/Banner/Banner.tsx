import Link from '@/ui/Link/Link';

import BannerIcons from '../../components/BannerIcons/BannerIcons';

import styles from './Banner.module.css';

import { Header } from '@/Layout/Header/Header';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <Header />
      <div className="container">
        <section className={styles.title}>
          <h1>
            <p>Seasonal Treats up</p>
            <span>20% OFF</span>
          </h1>
          <Link variant="primary" to="/shop">
            Shop now
          </Link>
          <div className={styles.delivery}>
            <img
              src="/banner/delivery.svg"
              alt="delivery free from 2000 uah"
              width={64}
              height={64}
            />
            <p>Free delivery from 2000 UAН</p>
          </div>
        </section>
      </div>
      <a href="#category">
        <img
          className={styles.down}
          src="/controls.svg"
          width={36}
          height={36}
          alt="arrow down"
          id="category"
        />
      </a>
      <BannerIcons />
    </section>
  );
};

export default Banner;
