import React, { useEffect, useState } from 'react';
import MenuCard from '@/components/menuCard';
import styles from './styles.module.scss';
import { MenuProps } from './types';
import classNames from 'classnames';
import Product from '@/components/product';

export default function Menu({
  data,
  title,
  cardVariant,
  productData,
}: MenuProps) {
  const [category, setCategory] = useState(``);

  return (
    <>
      <section className={styles.menu}>
        <div className="container">
          <h1 className={styles.menuTitle}>{title}</h1>
          <div className="row justify-content-center">
            {data.map((el: any, i: number) => (
              <div
                className={classNames(
                  { 'col-12 col-lg-4': cardVariant === `primary` },
                  { 'col-6 col-lg-4': cardVariant === `secondary` },
                )}
                key={i}
              >
                <MenuCard
                  title={el.title}
                  href={el.href}
                  image={el.image}
                  variant={cardVariant}
                  onClick={() => setCategory(el.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {productData &&
        productData.products
          .filter((el: any) => el.title === category)
          .map((el: any, i: number) => (
            <Product title={el.title} data={el.productList} key={i} />
          ))}
    </>
  );
}
