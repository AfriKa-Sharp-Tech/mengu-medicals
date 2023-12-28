import React from "react";

import styles from "./about.module.css";
import List from "@/components/List/List.component";
import { Assets } from "@/static/assets/assets";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import Button, { ButtonType } from "@/components/Button/Button.component";
import Input from "@/components/Input/input.component";
import UserIcon from "@/components/Icons/UserIcon";
import EmailIcon from "@/components/Icons/Email@Icon";

const About: React.FC = () => {
  const list: { value: string; label: string }[] = [
    { value: "one", label: "Symptom checker" },
    { value: "two", label: "Health risk assessment" },
    { value: "two", label: "Chronic condition monitoring" },
  ];
  const leftList: { value: string; label: string }[] = [
    { value: "one", label: "Mentoring" },
    { value: "two", label: "Emergency" },
    { value: "three", label: "Insurances" },
    { value: "four", label: "Pathologuy 1" },
    { value: "five", label: "Pathologuy 2" },
    { value: "six", label: "Pathologuy 3" },
    { value: "seven", label: "Pathologuy 4" },
    { value: "eight", label: "Privacy and Policy" },
  ];
  return (
    <section id="about-us" className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.leftSideBar}>
          <h6>About Us</h6>
          <div className={styles.leftList}>
            {leftList.map((item, index: number) => (
              <button key={index + item.value} className={styles.leftItem}>
                {item.label} <ChevronIcon className={styles.leftItemIcon} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.leftSideNews}>
          <img src={Assets.social} alt="TESTImage" />
          <h6>Newsletter registration</h6>
          <p>
            Bleiben Sie mit unseren sorgfältig kuratierten und neuesten
            Nachrichten auf dem Laufenden, um den Ruhestand einfacher zu
            gestalten.
          </p>
          <h5>Geben Sie Ihren Namen und E-Mail Adresse ein.</h5>
          <div className={styles.leftSideNewsButton}>
            <Input
              placeholder="Name Smith"
              type="text"
              icon={<UserIcon className={styles.inputIcon} />}
            />
            <Input
              placeholder="Email@mengu.com"
              type="text"
              icon={<EmailIcon className={styles.inputIcon} />}
            />
          </div>
          <div className={styles.leftSideNewsButton}>
            <Button text="Submit" type={ButtonType.SEC} />
          </div>
          <div className={styles.caption}>
            <p>Terms and Condition</p>
          </div>
        </div>
      </div>
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
