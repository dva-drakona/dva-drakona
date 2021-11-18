import styles from './styles.module.scss';
import Link from 'next/link';

const DeliveryEnd = () => {
  return (
    <section className={styles.deliveryEnd}>
      <h1 className={styles.title}>
        Дякуємо за замовлення, чекайте на дзвінок. Гарного настрою!
      </h1>
      <div className="d-flex justify-content-center">
        <Link href="/">
          <a className="button button--primary">Повернуться назад</a>
        </Link>
      </div>
    </section>
  );
};

export default DeliveryEnd;
