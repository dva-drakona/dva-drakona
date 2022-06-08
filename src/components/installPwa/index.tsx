import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const InstallPwa = () => {
  const [isMessageShow, setIsMessageShow] = useState<boolean>(true);
  const [supportsPWA, setSupportsPWA] = useState<boolean>(true);
  const [promptInstall, setPromptInstall] = useState<any>(null);
  const [isIOS, setIsIOS] = useState<boolean>();
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
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener(`beforeinstallprompt`, handler);

    window.addEventListener(`appinstalled`, function () {
      document.cookie = `appinstalled=true;expires=Tue, 30 Mar 2023 23:59:59 GMT;path=/`;
    });

    window.addEventListener(`beforeinstallprompt`, function () {
      document.cookie = `appinstalled=false;expires=Tue, 30 Mar 2023 23:59:59 GMT;path=/`;
    });
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

    return () => window.removeEventListener(`transitionend`, handler);
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

  return isMessageShow && supportsPWA ? (
    <div className={styles.container}>
      {isIOS && <h1>IOS</h1>}
      <div
        className={classNames(styles.closeButton, `btn-close`)}
        onClick={() => setIsMessageShow(false)}
      />
      <h3 className={styles.title}>
        Встановіть додаток на телефон щоб заощаджувати час і легше нас
        знаходити!
      </h3>
      <button className="button--sm button--secondary" onClick={onInstallClick}>
        Встановити
      </button>
    </div>
  ) : (
    <></>
  );
};

export default InstallPwa;
