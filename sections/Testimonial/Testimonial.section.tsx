import React, { useState } from "react";

import styles from "./Testimonial.module.css";
import { Assets } from "@/static/assets/assets";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import Button, { ButtonType } from "@/components/Button/Button.component";
import QuoteIcon from "@/components/Icons/QuoteIcon";
import i18n from "@/redux/i18n";

const Testimonial: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const testimonials = [
    {
      img: Assets.path1,
      description: i18n.t("intestinalObstruction"),
      author: i18n.t("mrMaxDoan"),
    },
    {
      img: Assets.path2,
      description: i18n.t("menguBecameDaniels"),
      author: i18n.t("mmeGrunth"),
    },
    {
      img: Assets.path3,
      description: i18n.t("soccerAccidentAlmost"),
      author: i18n.t("mrsDorrothe"),
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
    <section id="testimonial" className={styles.container}>
      <div className={styles.bottomBottom}>
        <div className={styles.bottomImage}>
          <img src={Assets.workmom} alt="Work mom" />
        </div>
        <div className={styles.bottomContent}>
          <h6>{i18n.t("requestACheckUp")}</h6>
          <h5 className="uppercase">{i18n.t("withMenguMedical")}</h5>
          <div className={styles.request}>
            <PhoneIcon className={styles.requestIcon} />
            <input
              type="text"
              className={styles.requestInput}
              placeholder="+41 09090909"
            />
            <button className={styles.requestButton}>
              {i18n.t("submitTheRequest")}
            </button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button text="Submit" type={ButtonType.SEC} />
          </div>
        </div>
      </div>
      <div className={styles.containerTop}>
        <h6>{i18n.t("theyTrustedUs")}</h6>
        <h4>{i18n.t("testimonials")}</h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomCarousel}>
          <div className={styles.carouselContents}>
            <div className={styles.carouselContents1}>
              {testimonials
                .map((testimonial, index: number) => (
                  <div
                    className={`${styles.carouselContent} ${
                      index < active ? styles.prevContent : ""
                    } ${index === active ? styles.currentContent : ""} ${
                      index > active ? styles.nextContent : ""
                    }`}
                    key={index}
                  >
                    <span>
                      <QuoteIcon className={styles.quoteIcon} />
                    </span>
                    <h5>{testimonial.author}</h5>
                    <p>
                      {testimonial.description}
                    </p>
                  </div>
                ))}
            </div>
            <div className={styles.carouselControls}>
              <div className="flex flex-row gap-2">
                <button
                  className={styles.carouselControl}
                  onClick={() => handlePrev(testimonials.length)}
                >
                  <ChevronIcon className={`${styles.controlIcon} rotate-180`} />
                </button>
                <button
                  className={styles.carouselControl}
                  onClick={() => handleNext(testimonials.length)}
                >
                  <ChevronIcon className={styles.controlIcon} />
                </button>
              </div>
              <div className={styles.indicators}>
                {Array(testimonials.length)
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
            </div>
          </div>
          <div className={styles.carouselImages}>
            {Array(testimonials.length)
              .fill(0)
              .map((_, index: number) => (
                <div
                  className={`${styles.carouselImage}  ${
                    index < active ? styles.prevImage : ""
                  } ${index === active ? styles.currentImage : ""} ${
                    index > active ? styles.nextImage : ""
                  }`}
                  key={index}
                >
                  <img src={Assets.family} alt="" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
