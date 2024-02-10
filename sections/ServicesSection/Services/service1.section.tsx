import React from "react";

import styles from "./services.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import List from "@/components/List/List.component";
import { Assets } from "@/static/assets/assets";
import { useRouter } from "next/router";
import i18n from "@/redux/i18n";

const Service1: React.FC = () => {
  const router = useRouter()
  const list: { value: string; label: string }[] = [
    { value: "one", label: i18n.t("generalSurgery") },
    { value: "two", label: i18n.t("viceralSurgery") },
    { value: "two", label: i18n.t("urologicalPlevicSurgery") },
  ];
  return (
    <section id="service1" className={`${styles.container} bg-primary-100 flex-col-reverse lg:flex-row`}>
      <div className={styles.container1}>
        <h4>{i18n.t("surgicalProcedures")}</h4>
        <h5>{i18n.t("consultationsAnd")}</h5>
        <div>
          <p>
          {i18n.t("pediatricSurgeryIs")}
          </p>
          <p>
          {i18n.t("ifYouChild")}
          </p>
        </div>
        <div className={styles.list}>
          {list.map((item, index: number) => (
            <List key={index + item.value} item={item} />
          ))}
        </div>
        <div className={styles.button}>
          <Button
            type={ButtonType.SEC}
            text={i18n.t("contactUs")}
            icon={<ChevronIcon className={styles.buttonIcon} />}
            onClick={() => router.push("/contact-us")}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <div className={styles.image1}>
            <img src={Assets.operate} alt="Testimage" />
          </div>
          <div className={styles.image2}>
            <img src={Assets.newLife} alt="Testimage" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image2}>
            <img src={Assets.support} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.feature3} alt="Testimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service1;
