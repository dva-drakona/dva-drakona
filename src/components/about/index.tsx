import { AboutProps } from './types';
import AboutCard from '@/components/aboutCard';
import styles from './styles.module.scss';
import classNames from 'classnames';

const About = ({ data, title }: AboutProps) => {
  return (
    <section className={styles.about}>
      <div className={classNames(styles.aboutContainer, `container`)}>
        <h1 className={styles.aboutTitle}>{title}</h1>
        <div className="row">
          {data.map((el: any, i: number) => (
            <div className="col-12 col-md-4" key={i}>
              <AboutCard img={el.image} title={el.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
