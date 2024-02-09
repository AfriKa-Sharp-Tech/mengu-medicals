import React from "react";

import styles from "./about.module.css";
import List from "@/components/List/List.component";
import { Assets } from "@/static/assets/assets";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import Button, { ButtonType } from "@/components/Button/Button.component";
import Input from "@/components/Input/input.component";
import UserIcon from "@/components/Icons/UserIcon";
import EmailIcon from "@/components/Icons/Email@Icon";
import i18n from "@/redux/i18n";
import Link from "next/link";

const About: React.FC = () => {
  const list: { value: string; label: string }[] = [
    { value: "one", label: i18n.t("generalSurgery") },
    { value: "two", label: i18n.t("viceralSurgery") },
    { value: "two", label: i18n.t("urologicalPlevicSurgery") },
  ];

  const list2: { value: string; label: string }[] = [
    { value: "one", label: i18n.t("consultationsAndSurgical") },
    { value: "two", label: i18n.t("antenatalConsultationsAnd") },
    { value: "two", label: i18n.t("managementOfChildren") },
  ];

  const leftList: { value: string; label: string }[] = [
    { value: "one", label: i18n.t("mentoring") },
    { value: "two", label: i18n.t("emergency") },
    { value: "three", label: i18n.t("insurances") },
    { value: "four", label: `${i18n.t("pathology")} 1` },
    { value: "five", label: `${i18n.t("pathology")} 2` },
    { value: "six", label: `${i18n.t("pathology")} 3` },
    { value: "seven", label: `${i18n.t("pathology")} 4` },
    { value: "eight", label: i18n.t("privacyPolicy") },
  ];
  return (
    <section id="about-us" className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerLeft}>
          <div className={styles.leftSideBar}>
            <h6>{i18n.t("aboutUs")}</h6>
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
            <h6>{i18n.t("newsletterReg")}</h6>
            <p>
              Bleiben Sie mit unseren sorgfältig kuratierten und neuesten
              Nachrichten auf dem Laufenden, um den Ruhestand einfacher zu
              gestalten.
            </p>
            <h5>Geben Sie Ihren Namen und E-Mail Adresse ein.</h5>
            <div className={styles.leftSideNewsButton}>
              <Input
                placeholder={i18n.t("nameSmith")}
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
              <Button text={i18n.t("submit")} type={ButtonType.SEC} />
            </div>
            <div className={styles.caption}>
              <p>{i18n.t("termsAndCondition")}</p>
            </div>
          </div>
        </div>
        <div className={styles.containerRight}>
          <h5>{i18n.t("aboutUs")}</h5>
          <h6>{i18n.t("predictiveSurgeon")}</h6>
          <p className={styles.p1}>{i18n.t("imagineAPlaceWhere")}</p>
          <p className={[styles.p1, "mt-6"].join(" ")}>
            {i18n.t("ourExpertiseExtendsFar")}
          </p>
          <div className={styles.firstImageContainer}>
            <div className={styles.firstContainer}>
              <h6>{i18n.t("predictiveHealth")}</h6>
              <p>{i18n.t("predictiveHealth")}</p>
            </div>
            <div className={styles.firstImage}>
              <img src={Assets.happy} alt="TestImage" />
            </div>
          </div>
          <p className={styles.p2}>
            {i18n.t("hereWhatMake")}
            <ul>
              <li>
                {i18n.t("drMengu")} <br />
                {i18n.t("drMenguMore")}
              </li>
              <li>
                {i18n.t("personalizedCare")} <br />
                {i18n.t("personalizedCareMore")}
              </li>
            </ul>
          </p>
          <div className={styles.secondContainer}>
            <div className={styles.secondImage1}>
              <img src={Assets.feature2} alt="SecondImage1" />
            </div>
            <div className={styles.secondContents}>
              <h6>{i18n.t("personalizedCompassion")}</h6>
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
                  {i18n.t("predictive")} <span>{i18n.t("healthAnomaly")}</span>{" "}
                  {i18n.t("personalized")}{" "}
                  <span>{i18n.t("pediatricSurgery")}</span>
                </h6>
              </div>
            </div>
            <div className={styles.thirdRight}>
              <img src={Assets.feature2} alt="ThirdRightImage" />
            </div>
          </div>
          <p className={styles.p1}>{i18n.t("hereFearFinds")}</p>
          <div className={styles.lastImage}>
            <img src={Assets.feature2} alt="LastImage" />
          </div>
          <p className={styles.p1}>{i18n.t("chooseMenguMedical")}</p>
          <div className={styles.list}>
            <div className={styles.list}>
              {list2.map((item, index: number) => (
                <List key={index + item.value} item={item} />
              ))}
            </div>
          </div>
          <p className={styles.p1}>
            {i18n.t("scheduleA")} <Link href={"/#"}>{i18n.t("consultation")}</Link>
             {" "}{i18n.t("todayAndEmbark")}
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.leftSideNews2}>
          <img src={Assets.social} alt="TESTImage" />
          <h6>{i18n.t("newsletterReg")}</h6>
          <p>
            Bleiben Sie mit unseren sorgfältig kuratierten und neuesten
            Nachrichten auf dem Laufenden, um den Ruhestand einfacher zu
            gestalten.
          </p>
          <h5>Geben Sie Ihren Namen und E-Mail Adresse ein.</h5>
          <div className={styles.leftSideNewsButton}>
            <Input
              placeholder={i18n.t("nameSmith")}
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
            <Button text={i18n.t("submit")} type={ButtonType.SEC} />
          </div>
          <div className={styles.caption}>
            <p>{i18n.t("termsAndCondition")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
