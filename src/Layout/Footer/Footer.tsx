import { useTranslation } from 'react-i18next';

import Link from '@/ui/Link/Link';

import { HEADER_LINKS } from '../Header/data';

import { FOOTER_ICONS } from './data';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <section>
            <h2 className={styles.logo}>Chocoza Boutique</h2>
            <div className={styles.content}>
              <div className={styles.navigation}>
                <address>
                  <h3>Contacts</h3>
                  <div className={styles.contacts}>
                    <p>Kyiv, Elmwood Avenue, 27</p>
                    <p className={styles.email}>
                      <a href="tel:+38068 105 90 09">068 105 90 09</a>
                      <a href="mailto:chocoza_boutuque@gmail.com">
                        chocoza_boutuque@gmail.com
                      </a>
                    </p>
                  </div>
                </address>
                <nav>
                  {HEADER_LINKS.map(({ id, text, to }) => (
                    <Link key={id} variant="footer" to={to}>
                      {t(`header.links.${text}`)}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className={styles.follow}>
                <h3>Follow us</h3>
                <div className={styles.icons}>
                  {FOOTER_ICONS.map(({ icon, id, to }) => (
                    <Link key={id} variant="icon" to={to}>
                      <svg className={styles.icon}>
                        <use href={`/sprite.svg#${icon}`} />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <p>All rights reserved, 2025. chocoza_boutuque.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
