import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import logo from '../../images/main-logo.png';
import tel from '../../images/phone.svg';
import location from '../../images/location.svg';
import instagram from '../../images/instagram.png';
import topNav from '../../images/top-navigation.svg';
import 'scroll-behavior-polyfill';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 order-1">
            <Link href="/">
              <a>
                <Image width={95} height={108} src={logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="col-4 order-2">
            <div className={styles.navWrap}>
              <Link href="/beer">
                <a className={styles.navItem}>Пиво</a>
              </Link>
              <Link href="/wine">
                <a className={styles.navItem}>Вино</a>
              </Link>
              <Link href="/snack">
                <a className={styles.navItem}>Закуски</a>
              </Link>
            </div>
          </div>
          <div className="col-8 col-md-4 order-4 order-md-3 mt-4 mt-md-0">
            <div className={styles.infoWrap}>
              <Link href="tel:+380675335102">
                <a className={styles.infoItem}>
                  <Image width={20} height={20} src={tel} alt="tel" />
                  <span>+38 067 533 51 02</span>
                </a>
              </Link>
              <Link href="https://www.google.com/maps/place/%D0%94%D0%B2%D0%B0+%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0/@49.8442974,24.0134831,17z/data=!3m1!4b1!4m5!3m4!1s0x473add3cf900ebdb:0xb51743ab346d7338!8m2!3d49.8442758!4d24.0156694">
                <a className={styles.infoItem} target="_blank">
                  <Image width={25} height={25} src={location} alt="location" />
                  <span>вул. Вільна 12</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-md-6 order-3 order-md-4 mt-md-3">
            <div className={styles.instagramLogo}>
              <Link href="https://www.instagram.com/dva.drakona/">
                <a target="_blank">
                  <Image src={instagram} alt="instagram" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-4 col-md-6 order-5 mt-3 mt-md-0">
            <div className={styles.topNav}>
              <Image
                width={70}
                height={70}
                src={topNav}
                alt="top-navigation"
                onClick={scrollToTop}
                className={styles.topNavImg}
              />
            </div>
          </div>
        </div>
        <span className={styles.rights}>©All right reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
