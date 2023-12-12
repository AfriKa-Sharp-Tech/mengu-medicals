import React, { useState } from "react";

import styles from "./pathology.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import { Assets } from "@/static/assets/assets";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Pathology: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const handlePrev = (topOffers: number) => {
    if (active !== 0) {
      return setActive(active - 1);
    }
    return setActive(topOffers - 1);
  };

  const handleNext = (topOffers: number) => {
    if (active !== topOffers - 1) {
      return setActive(active + 1);
    }
    return setActive(0);
  };

  const handleIndicate = (position: number) => {
    return setActive(position);
  };

  return (
    <section id="pathology" className={styles.container}>
      <div className={styles.containerTop}>
        <div className={styles.topContent}>
          <h6>Learn from others </h6>
          <h4>Common Pathologies</h4>
        </div>
        <div className="w-fit">
          <Button text="View All Pathologies" type={ButtonType.SEC} />
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.bottomImage}>
            <img src={Assets.pathology} alt="Pathology" />
            <p>4,9</p>
          </div>
          <p>
            Successful surgery average based on 70+ patients. All chances are
            you’ll be healed{" "}
          </p>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.bottomCards}>
            {Array(5)
              .fill(0)
              .map((_, index: number) => (
                <div
                  key={index}
                  className={`${styles.bottomCard} ${
                    index < active ? styles.bottomPrev : ""
                  } ${index === active ? styles.bottomCurrent : ""} ${
                    index > active ? styles.bottomNext : ""
                  }`}
                >
                  <div className={styles.cardImage}>
                    <img src={Assets.path1} alt="Pathology" />
                    <div className={styles.badges}>
                      <div className={styles.badge}>
                        <p>wellness {index} {active}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardAuthor}>
                    <p>Jun 25, 2025</p>
                    <div className={styles.cardDot} />
                    <p>By Akari Mizunashi</p>
                  </div>
                  <h6>Unlocking the Power of Personalized AI Healthcare</h6>
                  <div className={styles.arrow}>
                    <ArrowIcon className={styles.arrowIcon} />
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.carouselControls}>
            <div className={styles.indicators}>
              {Array(5)
                .fill(0)
                .map((_, index: number) => (
                  <div
                    className={styles.controlIndicate}
                    key={index}
                    onClick={() => handleIndicate(index)}
                  >
                    <div
                      className={`${styles.controlIndicator} ${
                        index === active ? "bg-primary-500" : ""
                      }`}
                    />
                  </div>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.carouselControl}
                onClick={() => handlePrev(5)}
              >
                <ChevronIcon className={`${styles.controlIcon} rotate-180`} />
              </button>
              <button
                className={styles.carouselControl}
                onClick={() => handleNext(5)}
              >
                <ChevronIcon className={styles.controlIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathology;
