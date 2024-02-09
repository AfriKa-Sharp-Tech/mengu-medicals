import React from "react";

import styles from "./Features.module.css";
import { Assets } from "@/static/assets/assets";
import Button, { ButtonType } from "@/components/Button/Button.component";
import List from "@/components/List/List.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import Progress from "@/components/Progress/Progress.component";
import { useRouter } from "next/router";
import i18n from "@/redux/i18n";

const Features: React.FC = () => {
  const router = useRouter();
  const list: { value: string; label: string }[] = [
    { value: "one", label: i18n.t('generalSurgery') },
    { value: "two", label: i18n.t('viceralSurgery') },
    { value: "two", label: i18n.t('urologicalPlevicSurgery') },
  ];
  return (
    <section id="features" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerTop}>
          <h6>{i18n.t('whatWeDoBest')}</h6>
          <h4>{i18n.t('ourCoreFeatures')}</h4>
        </div>
        <div className={styles.containerBottom}>
          <div className={styles.feature}>
            <div className={styles.featureImage}>
              <img src={Assets.feature2} alt="Feature One" />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>{i18n.t('consultation')}</p>
              </div>
              <h5>{i18n.t('consultationAndPediatric')}</h5>
              <p>
              {i18n.t('pediatricSurgeryFocuses')}
              </p>
              <div className={styles.featureList}>
                {list.map((item, index: number) => (
                  <List key={index + item.value} item={item} />
                ))}
              </div>
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text={i18n.t('viewAllPathologies')}
                  icon={<ChevronIcon className={styles.buttonIcon} />}
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.feature} flex-col-reverse md:flex-row`}>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>{i18n.t('counselling')}</p>
              </div>
              <h5>{i18n.t('antenatalConsultations')}</h5>
              <p>
              {i18n.t('receivingNewsOfAPotential')}
              </p>
              {/* <div className={styles.featureStats}>
                <div className={styles.featureStat}>
                  <h5>3M+</h5>
                  <p>Response speed</p>
                </div>
                <div className={styles.featureStat}>
                  <h5>176+</h5>
                  <p>Patient Reviews</p>
                </div>
              </div> */}
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text={i18n.t('learnMore')}
                  icon={<ChevronIcon className={styles.buttonIcon} />}
                  onClick={() => router.push("/services")}
                />
              </div>
            </div>
            <div className={styles.featureImage}>
              <img src={Assets.feature1} alt="Feature two" />
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureImage}>
              <img src={Assets.feature3} alt="Feature three" />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <p>{i18n.t('emergencySurgery')}</p>
              </div>
              <h5>{i18n.t('managementOfEmergency')}</h5>
              <p>
              {i18n.t('whenAChildFacesA')}
              </p>
              {/* <div className={styles.featureList}>
                <Progress progress={{ value: 94.487, label: "Accuracy" }} />
              </div> */}
              <div className={styles.button}>
                <Button
                  type={ButtonType.SEC}
                  text={i18n.t('learnMore')}
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
