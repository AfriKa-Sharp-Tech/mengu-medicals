import React from "react";

import styles from "./Features.module.css";
import { Assets } from "@/static/assets/assets";
import Button, { ButtonType } from "@/components/Button/Button.component";
import List from "@/components/List/List.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import Progress from "@/components/Progress/Progress.component";
import { useRouter } from "next/router";

const Features: React.FC = () => {
  const router = useRouter();
  const list: { value: string; label: string }[] = [
    { value: "one", label: "Symptom checker" },
    { value: "two", label: "Health risk assessment" },
    { value: "two", label: "Chronic condition monitoring" },
  ];
  return (
    <section id="features" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerTop}>
          <h6>What we do best</h6>
          <h4>Our Core Features</h4>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.feature}>
            <div className={styles.featureImage}>
              <img src={Assets.feature1} alt="Feature One" />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>Feature I</p>
              </div>
              <h5>Predictive Health & Anomaly Detection</h5>
              <p>
                We provide multiple AI Health analytics system for to ensure
                patient health is our priority. Here's a few health metrics that
                we measure.
              </p>
              <div className={styles.featureList}>
                {list.map((item, index: number) => (
                  <List key={index + item.value} item={item} />
                ))}
              </div>
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text="View All Pathologies"
                  icon={<ChevronIcon className={styles.buttonIcon} />}
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.feature} flex-col-reverse md:flex-row`}>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>Feature 2</p>
              </div>
              <h5>Wellness AI Chatbot</h5>
              <p>
                Say goodbye to healthcare 2.0 because we have wellness AI
                Chatbot technology at your fingertips. Experience it today, for
                free.
              </p>
              <div className={styles.featureStats}>
                <div className={styles.featureStat}>
                  <h5>3M+</h5>
                  <p>Response speed</p>
                </div>
                <div className={styles.featureStat}>
                  <h5>176+</h5>
                  <p>Patient Reviews</p>
                </div>
              </div>
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text="Learn More"
                  icon={<ChevronIcon className={styles.buttonIcon} />}
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
            <div className={styles.featureImage}>
              <img src={Assets.feature2} alt="Feature two" />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImage}>
              <img src={Assets.feature3} alt="Feature three" />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>Feature 3</p>
              </div>
              <h5>AI Health Analytics</h5>
              <p>
                Our anomaly detection technology detects any abnormalities from
                your health, backed with asklepios AI technology.
              </p>
              <div className={styles.featureList}>
                <Progress progress={{ value: 94.487, label: "Accuracy" }} />
              </div>
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text="Learn More"
                  icon={<ChevronIcon className={styles.buttonIcon} />}
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
