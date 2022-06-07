import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { BasketModalProps } from './types';
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
import classNames from 'classnames';

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

        <div className={styles.discount}>
          <div className="d-flex align-items-center">
            <h3 className={styles.discountTitle}>Промокод:</h3>
            <input type="text" className={styles.discountInput} />
          </div>
          <button className={classNames(`button--sm button--secondary`)}>
            Застосувати
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button
            disabled={getTotalPrice() === 0}
            className={classNames(
              `button button--primary`,
              styles.orderButton,
              {
                [styles.disabled]: getTotalPrice() === 0,
              },
            )}
          >
            Сплатити
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BasketModal;
