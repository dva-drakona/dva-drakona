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

  function getCookie(cname: any) {
    const name = cname + `=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(`;`);
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ` `) {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ``;
  }

  useEffect(() => {
    if (!(`serviceWorker` in navigator)) {
      setSsAppInstallable(false);
    }

    const addCookies = () => {
      document.cookie = `appinstalled=true;expires=Tue, 30 Mar 2023 23:59:59 GMT;path=/`;
    };

    window.addEventListener(`appinstalled`, addCookies);

    window.addEventListener(`beforeinstallprompt`, addCookies);

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
    setIsAppInstalled(getCookie(`appinstalled`));

    return () => {
      window.removeEventListener(`transitionend`, handler);
      window.removeEventListener(`beforeinstallprompt`, handler);
      window.removeEventListener(`appinstalled`, addCookies);
      window.removeEventListener(`beforeinstallprompt`, addCookies);
    };
  }, []);

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
            ?????? ???????????????????? ?????????????? ???? IOS Safari ???????????????? ????????????????????: (????????????
            ???????????? ?? Safari)
          </h3>
          <ul>
            <li className={styles.step}>
              ?????????????????? ???????????? ????????????????????
              <div className={styles.stepImgWrap}>
                <img src="/images/share-safari.png" />
              </div>
            </li>
            <li className={styles.step}>
              ?????????????? ???????????? ???? ???????????????? ??????????
              <div className={styles.stepImgWrap}>
                <img src="/images/save-on-home-page.png" />
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <h3 className={styles.title}>
            ???????????????????? ?????????????? ?????? ???????????????????????? ?????? ?? ?????????? ?????? ??????????????????!
          </h3>
          <button
            className="button--sm button--secondary"
            onClick={onInstallClick}
          >
            ????????????????????
          </button>
        </>
      )}
    </div>
  ) : (
    <></>
  );
};

export default InstallPwa;
