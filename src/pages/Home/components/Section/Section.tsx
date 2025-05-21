import { FC, ReactNode } from 'react';

import styles from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
  text: string;
}

const Section: FC<SectionProps> = ({ children, text }) => {
  return (
    <div className="container">
      <section className={styles.section}>
        <h2 className={styles.title}>{text}</h2>
        {children}
      </section>
    </div>
  );
};

export default Section;
