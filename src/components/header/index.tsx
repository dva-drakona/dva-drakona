import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import BasketModal from '@/components/basketModal';

import styles from './styles.module.scss';
import logo from '../../images/main-logo.png';
import basket from '../../images/basket.svg';

const Header = () => {
  const router = useRouter();

  const cart = useSelector((state: any) => state.cart);

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity,
      0,
    );
  };

  const data = [
    {
      href: `/beer`,
      name: `Пиво`,
    },
    {
      href: `/wine`,
      name: `Вино`,
    },
    {
      href: `/snack`,
      name: `Закуски`,
    },
    {
      href: `/delivery`,
      name: `Доставка`,
    },
  ];

  const [openMobMenu, setOpenMobMenu] = useState(false);
  useEffect(() => {
    setOpenMobMenu(false);
    window.addEventListener(`resize`, () => setOpenMobMenu(false));
  }, [router.pathname]);

  const isActive = (path: string) => router.pathname === path;

  const [modalShow, setModalShow] = useState(false);

  return (
    <header className={styles.header}>
      <BasketModal show={modalShow} onHide={() => setModalShow(false)} />
      <div
        className={classNames(styles.mobileMenu, {
          [styles.active]: openMobMenu,
        })}
      >
        <div
          className={styles.mobileClose}
          onClick={() => setOpenMobMenu(false)}
        ></div>
        <h2 className={styles.mobileTitle}>Меню</h2>
        {data.map((el: any, i: number) => (
          <Link href={el.href} key={i}>
            <a
              className={classNames(styles.mobileNavItem, {
                [styles.active]: isActive(el.href),
              })}
            >
              {el.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 col-lg-3 ">
            <Link href="/">
              <a>
                <Image src={logo} width={75} height={87} alt="logo" />
              </a>
            </Link>
          </div>

          <div className="col-6 d-none d-lg-block">
            <div className={styles.navWrap}>
              {data.map((el: any, i: number) => (
                <Link href={el.href} key={i}>
                  <a
                    className={classNames(styles.navItem, {
                      [styles.active]: isActive(el.href),
                    })}
                  >
                    {el.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-4 col-lg-3">
            <div className={styles.basketWrap}>
              <div className={styles.basket} onClick={() => setModalShow(true)}>
                <div>
                  <Image src={basket} alt="basket" />
                </div>
                <span className={styles.basketCount}>{getItemsCount()}</span>
              </div>
            </div>
          </div>

          <div className="col-4 d-lg-none">
            <div className={styles.burger} onClick={() => setOpenMobMenu(true)}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
