import React from "react";

import styles from "./advertisment.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { Assets } from "@/static/assets/assets";
import MenguIcon from "@/components/Icons/MenguIcon";
import { useRouter } from "next/router";

const Advertisment: React.FC = () => {
  const router = useRouter();
  return (
    <section id="advertisment" className={styles.container}>
      <div className={styles.advert}>
        <div className={styles.advertLeft}>
          <h5>Advertisement</h5>
          <h6>Formwandler Fitness | EMS Training Gummersbach</h6>
          <p>
            Ihre Profis für gesunde Gelenke <span className="hidden lg:flex">und Muskeln. Gratis Probetraining
            mit echten Experten. Ihre Profis für gesunde Gelenke und Muskeln.
            Ihre Profis für gesunde Gelenke und Muskeln. Ihre Profis</span> 
          </p>
          <div className={styles.button}>
            <Button
              text="Contact us"
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
          <MenguIcon className={styles.menguIcon} color="#fff" />
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
