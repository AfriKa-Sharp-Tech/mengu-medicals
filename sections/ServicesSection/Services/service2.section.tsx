import React from "react";

import styles from "./services.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { Assets } from "@/static/assets/assets";
import { useRouter } from "next/router";
import i18n from "@/redux/i18n";

const Service2: React.FC = () => {
  const router = useRouter();

  return (
    <section
      id="service2"
      className={`${styles.container} bg-white flex-col lg:flex-row`}
    >
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <div className={styles.image4}>
            <img src={Assets.happy1} alt="Testimage" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image3}>
            <img src={Assets.examine} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.contactUs} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.temperature} alt="Testimage" />
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <h4>{i18n.t("suspectedMalformations")}</h4>
        <h5>{i18n.t("antenatalConsultation")}</h5>
        <div>
          <p>{i18n.t("pregnancyShouldBeA")}</p>
          <p>{i18n.t("forgetGeneric")}</p>
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
    </section>
  );
};

export default Service2;
