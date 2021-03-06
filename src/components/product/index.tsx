import { ProductProps } from './types';
import ProductCard from '@/components/productCard';
import styles from './styles.module.scss';

const Product = ({ data, title }: ProductProps) => {
  return (
    <section className={styles.product}>
      <div className="container">
        <h1 className={styles.productTitle}>{title}</h1>
        <div className="row">
          {data
            .filter((el: any) => el.sale)
            .map((el: any, i: number) => (
              <div className="col-12 col-md-6 col-xl-4" key={i}>
                <ProductCard product={el} variant="primary" />
              </div>
            ))}
          {data
            .filter((el: any) => !el.sale)
            .map((el: any, i: number) => (
              <div className="col-12 col-md-6 col-xl-4" key={i}>
                <ProductCard product={el} variant="primary" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
