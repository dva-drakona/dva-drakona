import React from 'react';
import { ProductCardProps } from './types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { ToastContainer, toast } from 'react-toastify';
import store, { saveState } from '../../redux/store';

import basket from '../../images/basket.svg';

const ProductCard = ({
  product,
  variant,
  onBtnCloseClick,
  onPlusClick,
  onMinusClick,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const notify = () => toast.success(`Товар добавленно в корзину!`);

  return (
    <div
      className={classNames(styles.cardWrap, styles[`cardWrap--${variant}`])}
    >
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {variant === `secondary` && (
        <div
          className={classNames(`btn-close`, styles.btnClose)}
          onClick={onBtnCloseClick}
        ></div>
      )}
      {variant !== `secondary` && product.description && (
        <div className={styles.descriptionWrap}>
          <div className={styles.infoButton}>
            <img src="/images/i-icon.png" alt="info" />
          </div>
          <div className={styles.description}>
            <span>{product.description}</span>
          </div>
        </div>
      )}
      <div className={styles.img}>
        <Image src={product.img} width={40} height={125} alt="product" />
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.title}>{product.title}</h3>
          {variant === `primary` ? (
            <span className={styles.size}>{product.size} ml</span>
          ) : (
            <span className={styles.size}>
              {product.price} грн / {product.size} ml
            </span>
          )}
        </div>
        {variant === `primary` && (
          <div className="d-flex justify-content-between align-items-center">
            <h2 className={styles.price}>{product.price} грн</h2>
            <div
              className={styles.basket}
              onClick={() => {
                dispatch(addToCart(product));
                notify();
                saveState(store.getState().cart);
              }}
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
                [styles.disabled]: product.quantity === 0,
              })}
              onClick={onMinusClick}
            ></div>
            <span className={styles.count}>{product.quantity}</span>
            <div
              className={classNames(`button--circle`, styles.plus, {
                [styles.disabled]: product.quantity === 20,
              })}
              onClick={onPlusClick}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
