import React from "react";

import styles from "./about.module.css";
import List from "@/components/List/List.component";
import { Assets } from "@/static/assets/assets";

const About: React.FC = () => {
  const list: { value: string; label: string }[] = [
    { value: "one", label: "Symptom checker" },
    { value: "two", label: "Health risk assessment" },
    { value: "two", label: "Chronic condition monitoring" },
  ];
  return (
    <section id="about-us" className={styles.container}>
      <div className={styles.containerLeft}></div>
      <div className={styles.containerRight}>
        <h5>About Us</h5>
        <h6>Predictive Health & Anomaly Detection</h6>
        <p className={styles.p1}>
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority.{" "}
        </p>
        <div className={styles.firstImageContainer}>
          <div className={styles.firstContainer}>
            <h6>Predictive Health & Anomaly Detection</h6>
            <p>Predictive Health & Anomaly Detection</p>
          </div>
          <div className={styles.firstImage}>
            <img src={Assets.happy} alt="TestImage" />
          </div>
        </div>
        <p className={styles.p2}>
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority.
        </p>
        <div className={styles.secondContainer}>
          <div className={styles.secondImage1}>
            <img src={Assets.feature2} alt="SecondImage1" />
          </div>
          <div className={styles.secondContents}>
            <h6>
              Predictive <span>Personal</span> Health care
            </h6>
          </div>
          <div className={styles.secondImage2}>
            <img src={Assets.feature2} alt="SecondImage1" />
          </div>
        </div>
        <div className={styles.thirdContainer}>
          <div className={styles.thirdLeft}>
            <div className={styles.thirdLeftImage}>
              <img src={Assets.feature3} alt="ThirdLeftImage" />
            </div>
            <div className={styles.thirdLeftContent}>
              <h6>
                Predictive <span>Health & Anomaly Detection</span> Predictive{" "}
              </h6>
            </div>
          </div>
          <div className={styles.thirdRight}>
            <img src={Assets.feature2} alt="ThirdRightImage" />
          </div>
        </div>
        <p className={styles.p1}>
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
        </p>
        <div className={styles.lastImage}>
          <img src={Assets.feature2} alt="LastImage" />
        </div>
        <p className={styles.p1}>
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
        </p>
        <div className={styles.list}>
          <div className={styles.list}>
            {list.map((item, index: number) => (
              <List key={index + item.value} item={item} />
            ))}
          </div>
        </div>
        <p className={styles.p1}>
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
          We provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.We
          provide multiple AI Health analytics system for to ensure patient
          health is our priority. Here's a few health metrics that we measure.
        </p>
      </div>
    </section>
  );
};

export default About;
