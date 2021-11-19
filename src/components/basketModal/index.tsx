import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BasketModalProps } from './types';
import Link from 'next/link';
import styles from './styles.module.scss';
import ProductCard from '@/components/productCard';

const BasketModal = ({ show, onHide }: BasketModalProps) => {
  let products: any = null;
  if (typeof window !== `undefined` && localStorage.products) {
    products = JSON.parse(localStorage.products);
  }
  console.log(products);

  const onBtnCloseClick = (title: string) => {
    if (products) {
      const findIndex = () =>
        products.findIndex((el: any) => el.name === title);
      products.splice(findIndex(), 1);
      localStorage.setItem(`products`, JSON.stringify(products));
      console.log(products);
    }
  };

  console.log(!!products);

  const sum = (array: any) => {
    let total = 0;
    array.forEach((el: any) => {
      total += el.price * el.count;
    });
    localStorage.setItem(`sum`, JSON.stringify(total));
    console.log(localStorage);
    return total;
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.title}
        >
          Кошик
        </Modal.Title>
        <button className="btn-close" onClick={onHide}></button>
      </Modal.Header>
      <Modal.Body>
        {products ? (
          products.map((el: any, i: number) => (
            <ProductCard
              key={i}
              title={el.name}
              size={el.size}
              img="/images/wine-photo.png"
              variant="secondary"
              onBtnCloseClick={() => onBtnCloseClick(el.name)}
            />
          ))
        ) : (
          <h3 className={styles.addProductTitle}>Добавте товар</h3>
        )}
        <div className={styles.sum}>
          <h4>До сплати: </h4>
          <span>{products ? sum(products) : 0} грн</span>
        </div>

        <div className="d-flex justify-content-center">
          <Link href="/">
            <a className="button button--primary">Сплатити</a>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BasketModal;
