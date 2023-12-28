import React from "react";

import styles from "./header.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const HomeHeader: React.FC = () => {
  return (
    <section id="home_header" className={styles.container}>
      <div className={styles.content}>
        <h3>
          Your <span>child's health</span> is our priority
        </h3>
        <p>
          Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat
          kontrasat nonade. att apiniras. Vanat bektig.
        </p>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <Button
              text="Speak to an expert"
              type={ButtonType.SEC}
              icon={<ChevronIcon className={styles.buttonIcon} />}
            />
          </div>
          <div className={styles.button}>
            <Button
              text="Learn more about us"
              icon={<ChevronIcon className={styles.buttonIcon2} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
