import styles from './styles.module.scss';
import Link from 'next/link';
import { HelpPageProps } from './types';

const HelpPage = ({ title }: HelpPageProps) => {
  return (
    <section className={styles.deliveryEnd}>
      <h1 className={styles.title}>{title}</h1>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <a className="button button--primary">Повернутись на головну</a>
        </Link>
      </div>
    </section>
  );
};

export default HelpPage;
