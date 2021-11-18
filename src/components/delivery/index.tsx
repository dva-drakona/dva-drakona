import { DeliveryProps } from './types';
import DeliveryCard from '@/components/deliveryCard';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Delivery = ({ data, title }: DeliveryProps) => {
  return (
    <section className={styles.delivery}>
      <div className={classNames(styles.deliveryContainer, `container`)}>
        <h1 className={styles.deliveryTitle}>{title}</h1>
        <div className="row">
          {data.map((el: any, i: number) => (
            <div className="col-12 col-md-4" key={i}>
              <DeliveryCard title={el.title} deliveryStep={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;
