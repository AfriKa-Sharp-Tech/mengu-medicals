import React from "react";

import styles from "./header.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { useRouter } from "next/router";

const HomeHeader: React.FC = () => {
  const router = useRouter();
  return (
    <section id="header" className={styles.container}>
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
              onClick={() => router.push("/contact-us")}
            />
          </div>
          <div className={styles.button}>
            <Button
              text="Learn more about us"
              icon={<ChevronIcon className={styles.buttonIcon2} />}
              onClick={() => router.push("/about-us")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
