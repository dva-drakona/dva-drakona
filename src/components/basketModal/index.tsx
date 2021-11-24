import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { BasketModalProps } from './types';
import Link from 'next/link';
import styles from './styles.module.scss';
import ProductCard from '@/components/productCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';
import { ToastContainer, toast } from 'react-toastify';
import store, { saveState } from '../../redux/store';

const BasketModal = ({ show, onHide }: BasketModalProps) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0,
    );
  };

  const notify = () => toast.error(`Товар видаленно!`);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
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
        {cart.length > 0 ? (
          cart.map((item: any, i: number) => (
            <ProductCard
              key={i}
              product={item}
              variant="secondary"
              onBtnCloseClick={() => {
                dispatch(removeFromCart(item.id));
                notify();
                saveState(store.getState().cart);
              }}
              onMinusClick={() => {
                dispatch(decrementQuantity(item.id));
                saveState(store.getState().cart);
              }}
              onPlusClick={() => {
                dispatch(incrementQuantity(item.id));
                saveState(store.getState().cart);
              }}
            />
          ))
        ) : (
          <h3 className={styles.addProductTitle}>Добавте товар</h3>
        )}

        <div className={styles.sum}>
          <h4>До сплати: </h4>
          <span>{getTotalPrice() ? getTotalPrice() : 0} грн</span>
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
