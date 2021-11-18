import { DeliveryCardProps } from './types';
import styles from './styles.module.scss';

const DeliveryCard = ({ title, deliveryStep }: DeliveryCardProps) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.counter}>{deliveryStep}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default DeliveryCard;
