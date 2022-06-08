import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const InstallPwa = () => {
  const [isMessageShow, setIsMessageShow] = useState<boolean>(true);
  const [supportsPWA, setSupportsPWA] = useState<boolean>(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener(`beforeinstallprompt`, handler);
    return () => window.removeEventListener(`transitionend`, handler);
  }, []);

  const onInstallClick = (e: any) => {
    e.preventDefault();
    if (promptInstall) {
      promptInstall.prompt();
    } else {
      return;
    }
  };

  return isMessageShow && supportsPWA ? (
    <div className={styles.container}>
      <div
        className={classNames(styles.closeButton, `btn-close`)}
        onClick={() => setIsMessageShow(false)}
      />
      <h3 className={styles.title}>
        Встановіть додаток на телефон щоб заощаджувати час і легше нас
        знаходити!
      </h3>
      <button
        className="button--sm button--secondary"
        onClick={(e) => onInstallClick(e)}
      >
        Встановити
      </button>
    </div>
  ) : (
    <></>
  );
};

export default InstallPwa;
