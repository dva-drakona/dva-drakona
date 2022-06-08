import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const InstallPwa = () => {
  const [isMessageShow, setIsMessageShow] = useState<boolean>(true);
  const [supportsPWA, setSupportsPWA] = useState<boolean>(true);
  const [promptInstall, setPromptInstall] = useState<any>(null);
  const [isIOS, setIsIOS] = useState<boolean>();
  const [isAppInstallable, setSsAppInstallable] = useState<any>(true);
  const [isAppInstalled, setIsAppInstalled] = useState<any>();

  useEffect(() => {
    if (!(`serviceWorker` in navigator)) {
      setSsAppInstallable(false);
    }

    function isInstalled() {
      const iOSCanInstall = `standalone` in window.navigator;
      if (iOSCanInstall) return true;

      // For Android
      if (window.matchMedia(`(display-mode: standalone)`).matches) return true;

      // If neither is true, it's not installed
      return false;
    }

    setIsAppInstalled(isInstalled());
    console.log(isInstalled());
    console.log(isAppInstallable);

    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener(`beforeinstallprompt`, handler);

    function isThisDeviceRunningiOS() {
      if (
        [
          `iPad Simulator`,
          `iPhone Simulator`,
          `iPod Simulator`,
          `iPad`,
          `iPhone`,
          `iPod`,
        ].includes(navigator.platform)
      ) {
        return true;
      } else if (
        navigator.userAgent.includes(`Mac`) &&
        `ontouchend` in document
      ) {
        return true;
      } else {
        return false;
      }
    }
    setIsIOS(isThisDeviceRunningiOS());

    return () => {
      window.removeEventListener(`transitionend`, handler);
      window.removeEventListener(`beforeinstallprompt`, handler);
    };
  }, []);
  console.log(isAppInstalled);
  console.log(isAppInstallable);
  console.log(isMessageShow);

  const onInstallClick = (evt: any) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }

  return isMessageShow && isAppInstallable && !isAppInstalled ? (
    <div className={styles.container}>
      <div
        className={classNames(styles.closeButton, `btn-close`)}
        onClick={() => setIsMessageShow(false)}
      />
      {isIOS ? (
        <div>
          <h3 className={styles.title}>
            Щоб встановити додаток на IOS Safari слідуйте інструкції: (працює
            тільки в Safari)
          </h3>
          <ul>
            <li className={styles.step}>
              Натисніть кнопку поділитись
              <div className={styles.stepImgWrap}>
                <img src="/images/share-safari.png" />
              </div>
            </li>
            <li className={styles.step}>
              Додайте значок на головний екран
              <div className={styles.stepImgWrap}>
                <img src="/images/save-on-home-page.png" />
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <h3 className={styles.title}>
            Встановіть додаток щоб заощаджувати час і легше нас знаходити!
          </h3>
          <button
            className="button--sm button--secondary"
            onClick={onInstallClick}
          >
            Встановити
          </button>
        </>
      )}
    </div>
  ) : (
    <></>
  );
};

export default InstallPwa;
