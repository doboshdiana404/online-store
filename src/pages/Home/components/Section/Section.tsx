import { FC, ReactNode } from 'react';

import styles from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
  text: string;
  id?: string;
}

const Section: FC<SectionProps> = ({ children, text, id }) => {
  return (
    <div className="container">
      <section className={styles.section} id={id}>
        <h2 className={styles.title}>{text}</h2>
        {children}
      </section>
    </div>
  );
};

export default Section;
