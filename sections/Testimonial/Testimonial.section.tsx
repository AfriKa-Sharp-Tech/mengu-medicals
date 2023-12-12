import React, { useState } from "react";

import styles from "./Testimonial.module.css";
import { Assets } from "@/static/assets/assets";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";

const Testimonial: React.FC = () => {
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
    <section id="testimonial" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>They trusted Us</h6>
        <h4>Testimonial</h4>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.bottomCarousel}>
          <div className={styles.carouselContents}>
            <div className={styles.carouselContents1}>
              {Array(5)
                .fill(0)
                .map((_, index: number) => (
                  <div
                    className={`${styles.carouselContent} ${
                      index < active ? styles.prevContent : ""
                    } ${index === active ? styles.currentContent : ""} ${
                      index > active ? styles.nextContent : ""
                    }`}
                    key={index}
                  >
                    <h5>Mr/Mrs Max Dohe</h5>
                    <p>
                      Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik,
                      oaktat kontrasat nonade. att apiniras. Vanat bektig.
                    </p>
                  </div>
                ))}
            </div>
            <div className={styles.carouselControls}>
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
            </div>
          </div>
          <div className={styles.carouselImages}>
            {Array(5)
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
        <div className={styles.bottomBottom}>
          <div className={styles.bottomImage}>
            <img src={Assets.workmom} alt="Work mom" />
          </div>
          <div className={styles.bottomContent}>
            <h6>Request a check up</h6>
            <h5>
              With Mengu Medical, Have a Personalized Follow Up Of Your Child
              Heath Now!{" "}
            </h5>
            <div className={styles.request}>
              <PhoneIcon className={styles.requestIcon} />
              <input
                type="text"
                className={styles.requestInput}
                placeholder="+41 09090909"
              />
              <button className={styles.requestButton}>
                Submit the request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
