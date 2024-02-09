import React from "react";

import styles from "./mission.module.css";
import { Assets } from "@/static/assets/assets";
import i18n from "@/redux/i18n";

const Mission: React.FC = () => {
  return (
    <section id="mission" className={styles.container}>
      <div className={styles.containerTop}>
        <h4>{i18n.t('our')}</h4>
        <h5>{i18n.t('mission')}</h5>
        <h6>
        {i18n.t('isToHelp')}
        </h6>
        <p>
        {i18n.t('weAreDedicated')}
        </p>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomImage}>
          <img src={Assets.foreground} alt="Foreground" />
          <div className={styles.fadeOut} />
        </div>
        <div className={styles.backImage}>
          <img src={Assets.background} alt="Background" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
