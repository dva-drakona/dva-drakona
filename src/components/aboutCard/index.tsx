import { AboutCardProps } from './types';
import Image from 'next/image';
import styles from './styles.module.scss';

const AboutCard = ({ img, title }: AboutCardProps) => {
  return (
    <div className={styles.cardWrap}>
      <Image src={img} width={50} height={50} alt="about" />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default AboutCard;
