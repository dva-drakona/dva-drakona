import React, { useState, useEffect } from 'react';
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
import discountData from '@/public/discount.json';

const BasketModal = ({ show, onHide }: BasketModalProps) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0,
    );
  };

  const productDeleteNotification = () => toast.error(`Товар видаленно!`);
  const wrongDiscountNumber = () =>
    toast.error(`Промокод не знайдено, спробуйте ввести ще раз!`);
  const correctDiscountNumber = () => toast.success(`Знижку застосовано`);

  const [discountInputValue, setDiscountInputValue] = useState<string>(``);
  const [isDiscountApplied, setIsDiscountApplied] = useState<boolean>(false);
  const [isWrongDiscountCode, setIsWrongDiscountCode] =
    useState<boolean>(false);
  const [discountValue, setDiscountValue] = useState<number>();
  const [discountPrice, setDiscountPrice] = useState<number>();
  const checkDiscount = () => {
    const discountInfo = discountData.discounts.find(
      (el) => el.code === discountInputValue,
    );

    if (discountInfo && discountInfo.code === discountInputValue) {
      setIsDiscountApplied(true);
      setDiscountValue(discountInfo.discount);
      setIsWrongDiscountCode(false);
      correctDiscountNumber();
      return;
    } else {
      setIsWrongDiscountCode(true);
      wrongDiscountNumber();
      return;
    }
  };

  useEffect(() => {
    if (getTotalPrice() > 0 && discountValue) {
      setDiscountPrice(
        Math.ceil(getTotalPrice() * ((100 - discountValue) / 100)),
      );
    }
  }, [isDiscountApplied, cart]);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <ToastContainer
        position="top-center"
        autoClose={2500}
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
                productDeleteNotification();
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

        <div className="d-flex align-items-center justify-content-between">
          <div className={styles.sum}>
            <h4>До сплати: </h4>
            <div className="d-flex align-items-center">
              <span
                className={classNames({
                  [styles.fullPriceWithDiscount]:
                    isDiscountApplied && getTotalPrice() > 0,
                })}
              >
                {getTotalPrice() ? getTotalPrice() : 0}
              </span>
              {isDiscountApplied && getTotalPrice() > 0 && discountPrice}
              <span className={styles.currency}>грн</span>
            </div>
          </div>
          <div className={styles.discountInfo}>
            {isDiscountApplied && (
              <>
                <h4>Знижка: </h4>
                <span>{discountValue} %</span>
              </>
            )}
          </div>
        </div>

        <div className={styles.discount}>
          <div className="d-flex align-items-center">
            <h3 className={styles.discountTitle}>Промокод:</h3>
            <input
              type="text"
              className={classNames(
                styles.discountInput,
                { [styles.discountInputSuccess]: isDiscountApplied },
                { [styles.discountInputInvalid]: isWrongDiscountCode },
              )}
              value={discountInputValue}
              onChange={(e) => setDiscountInputValue(e.target.value)}
              disabled={isDiscountApplied}
            />
          </div>
          <button
            className={classNames(
              `button--sm ${
                isDiscountApplied ? `button--success` : `button--secondary`
              }`,
              { [styles.discountButtonDisabled]: isDiscountApplied },
              styles.discountButton,
            )}
            onClick={() => checkDiscount()}
            disabled={isDiscountApplied}
          >
            {isDiscountApplied ? `Знижку застосовано` : `Застосувати`}
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
