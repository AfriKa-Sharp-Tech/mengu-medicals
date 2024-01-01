import React, { useState } from "react";

import styles from "./pathology.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import { Assets } from "@/static/assets/assets";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Pathology: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const paths = [
    {
      img: Assets.path1,
      title: "Unlocking the Power of Personalized AI Healthcare",
      date: "Jun 25, 2025",
      author: "By Akari Mizunashi",
      badges: [
        { value: 1, label: "wellness" },
        { value: 2, label: "AI" },
        { value: 3, label: "Healthcare" },
      ],
    },
    {
      img: Assets.path2,
      title: "The Future of Health: AI-Driven Patient Care",
      date: "Jun 25, 2025",
      author: "By Akari Mizunashi",
      badges: [
        { value: 1, label: "Disease" },
        { value: 2, label: "Care" },
        { value: 3, label: "Patient" },
      ],
    },
    {
      img: Assets.path3,
      title: "Navigating Healthcare: Your Guide to Asklepios",
      date: "Jun 25, 2025",
      author: "By Akari Mizunashi",
      badges: [
        { value: 1, label: "Tutorial" },
        { value: 2, label: "Guide" },
        { value: 3, label: "Healthcare" },
      ],
    },
    {
      img: Assets.path4,
      title: "The Role of AI in Healthcare",
      date: "Jun 25, 2025",
      author: "By Akari Mizunashi",
      badges: [
        { value: 1, label: "wellness" },
        { value: 2, label: "AI" },
        { value: 3, label: "Healthcare" },
      ],
    },
  ];

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
        <div className="w-full md:w-fit">
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
            you'll be healed{" "}
          </p>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.bottomCards}>
            {paths.map((path, index: number) => (
              <div
                key={index}
                className={`${styles.bottomCard} ${
                  index < active ? styles.bottomPrev : ""
                } ${index === active ? styles.bottomCurrent : ""} ${
                  index > active ? styles.bottomNext : ""
                }`}
              >
                <div className={styles.cardImage}>
                  <img src={path.img} alt="Pathology" />
                  <div className={styles.badges}>
                    {path.badges.map((badge, index: number) => (
                      <div key={index + badge.value} className={styles.badge}>
                        <p>{badge.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.cardAuthor}>
                  <p>{path.date}</p>
                  <div className={styles.cardDot} />
                  <p>{path.author}</p>
                </div>
                <h6>{path.title}</h6>
                <div className={styles.arrow}>
                  <ArrowIcon className={styles.arrowIcon} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.carouselControls}>
            <div className={styles.indicators}>
              {paths.map((_, index: number) => (
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
                onClick={() => handlePrev(paths.length)}
              >
                <ChevronIcon className={`${styles.controlIcon} rotate-180`} />
              </button>
              <button
                className={styles.carouselControl}
                onClick={() => handleNext(paths.length)}
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
