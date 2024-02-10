import React from "react";

import styles from "./advertisment.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { Assets } from "@/static/assets/assets";
import { useRouter } from "next/router";
import MenguIcon3 from "@/components/Icons/MenguIcon3";
import i18n from "@/redux/i18n";

const Advertisment: React.FC = () => {
  const router = useRouter();
  return (
    <section id="advertisment" className={styles.container}>
      <div className={styles.advert}>
        <div className={styles.advertLeft}>
          <h5>{i18n.t("advertisement")}</h5>
          <h6>{i18n.t("formwandlerFitness")}</h6>
          <p>{i18n.t("advertisementDescription")}</p>
          <div className={styles.button}>
            <Button
              text={i18n.t("contactUs")}
              type={ButtonType.SEC}
              icon={<ChevronIcon className={styles.buttonIcon} />}
              onClick={() => router.push("/contact-us")}
            />
          </div>
        </div>
        <div className={styles.advertRight}>
          <img src={Assets.feature1} alt="BabyImage" />
        </div>
        <div className={styles.advertIcon}>
          <MenguIcon3 className={styles.menguIcon} color="#fff" />
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
