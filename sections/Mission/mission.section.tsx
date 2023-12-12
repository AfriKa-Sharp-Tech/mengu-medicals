import React from "react";

import styles from "./mission.module.css";
import { Assets } from "@/static/assets/assets";

const Mission: React.FC = () => {
  return (
    <section id="mission" className={styles.container}>
      <div className={styles.containerTop}>
        <h4>Our</h4>
        <h5>Mission</h5>
        <h6>
          Is to help your child heal and grow with gentle, personilized care
        </h6>
        <p>
          We are dedicated to providing the best possible surgical care for your
          children. Our team of expert are making a difference in the lives of
          children through exceptional pediatric surgery. We are here for you
          every step of the way, from diagnosis to recovery.
        </p>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomImage}>
          <img src={Assets.foreground} alt="Foreground" />
        </div>
        <div className={styles.backImage}>
          <img src={Assets.background} alt="Background" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
