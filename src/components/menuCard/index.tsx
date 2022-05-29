import { MenuCardProps } from './types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

const MenuCard = ({
  title,
  href,
  image,
  variant,
  onClick,
  active,
}: MenuCardProps) => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  return (
    <>
      {href ? (
        <Link href={href}>
          <a
            className={classNames(
              styles.menuCard,
              styles[`menuCard--${variant}`],
              {
                [styles.active]: isActive(href),
              },
            )}
          >
            <div className={styles.img}>
              <Image src={image} width={430} height={250} alt="menu-card" />
            </div>
            <div className={styles.backgroundOpacity}></div>
            <h2 className={styles.title}>{title}</h2>
          </a>
        </Link>
      ) : (
        <div
          className={classNames(
            styles.menuCard,
            styles[`menuCard--${variant}`],
            { [styles.active]: active },
          )}
          onClick={onClick}
        >
          <div className={styles.img}>
            <Image src={image} width={430} height={250} alt="menu-card" />
          </div>
          <div className={styles.backgroundOpacity}></div>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
    </>
  );
};

export default MenuCard;
