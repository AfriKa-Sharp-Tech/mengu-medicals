import React from "react";

import styles from "./header.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { useRouter } from "next/router";
import i18n from "@/redux/i18n";

const HomeHeader: React.FC = () => {
  const router = useRouter();
  return (
    <section id="header" className={styles.container}>
      <div className={styles.content}>
        <h3>
          {i18n.t('your')} <span>{i18n.t('childHealth')}</span> {i18n.t('isOurPriority')}
        </h3>
        <p>
          {i18n.t('whenTinyHands')}
        </p>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <Button
              text={i18n.t('speakToAnExpert')}
              type={ButtonType.SEC}
              icon={<ChevronIcon className={styles.buttonIcon} />}
              onClick={() => router.push("/contact-us")}
            />
          </div>
          <div className={styles.button}>
            <Button
              text={i18n.t('learnMoreAbout')}
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
