import React, { useState, useEffect } from 'react';
import { ProductCardProps } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

import basket from '../../images/basket.svg';

const ProductCard = ({
  title,
  img,
  size,
  price,
  variant,
  onBtnCloseClick,
  description,
}: ProductCardProps) => {
  const [count, setCount] = useState(1);

  let products: any = null;
  if (typeof window !== `undefined` && localStorage.products) {
    products = JSON.parse(localStorage.products);
  }

  const plusCount = () => {
    if (count < 20) {
      setCount(count + 1);
      const findIndex = () =>
        products.findIndex((el: any) => el.name === title);
      products[findIndex()].count = count;
      localStorage.setItem(`products`, JSON.stringify(products));
    }
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
      const findIndex = () =>
        products.findIndex((el: any) => el.name === title);
      products[findIndex()].count = count;
      localStorage.setItem(`products`, JSON.stringify(products));
    }
  };

  const addProductToCart = (
    name: string,
    size: number,
    price?: number,
    count?: number,
  ) => {
    const productsString = localStorage.getItem(`products`);
    let products = [];
    const product = {
      name: name,
      size: size,
      price: price,
      count: count,
    };
    if (productsString) {
      products = JSON.parse(productsString);
    }
    products.push(product);
    localStorage.setItem(`products`, JSON.stringify(products));
  };

  return (
    <div
      className={classNames(styles.cardWrap, styles[`cardWrap--${variant}`])}
    >
      {variant === `secondary` && (
        <div
          className={classNames(`btn-close`, styles.btnClose)}
          onClick={onBtnCloseClick}
        ></div>
      )}
      {variant !== `secondary` && description && (
        <div className={styles.descriptionWrap}>
          <div className={styles.infoButton}>
            <img src="/images/i-icon.png" alt="info" />
          </div>
          <div className={styles.description}>
            <span>{description}</span>
          </div>
        </div>
      )}
      <div className={styles.img}>
        <Image src={img} width={40} height={125} alt="product" />
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.size}>{size} ml</span>
        </div>
        {variant === `primary` && (
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={styles.price}>{price} грн</h2>
            <div
              className={styles.basket}
              onClick={() => addProductToCart(title, size, price, count)}
            >
              <Image src={basket} alt="basket" />
              <span className={styles.basketCount}>+</span>
            </div>
          </div>
        )}
        {variant === `secondary` && (
          <div className={styles.counter}>
            <div
              className={classNames(`button--circle`, styles.minus, {
                [styles.disabled]: count === 0,
              })}
              onClick={() => minusCount()}
            ></div>
            <span className={styles.count}>{count}</span>
            <div
              className={classNames(`button--circle`, styles.plus, {
                [styles.disabled]: count === 20,
              })}
              onClick={() => plusCount()}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
