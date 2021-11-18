import { BannerProps } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Slider from '@/components/bannerSlider';

const Banner = ({ data }: BannerProps) => {
  return (
    <section className={styles.banner}>
      <div className={classNames(`container`, styles.bannerContainer)}>
        <div className="row">
          <div className="col-12">
            <Slider data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
