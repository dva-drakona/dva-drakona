import { PreloaderProps } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';

const Preloader = ({ loading }: PreloaderProps) => {
  return (
    <div className={classNames([styles.preloader], { [styles.show]: loading })}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Preloader;
