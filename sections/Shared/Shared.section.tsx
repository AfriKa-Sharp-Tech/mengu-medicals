import React, { useState } from "react";

import styles from "./shared.module.css";
import NetFlix from "@/components/Icons/Netflix";
import CVS from "@/components/Icons/CVS";
import YouTube from "@/components/Icons/YouTube";
import StarWars from "@/components/Icons/StarWars";
import Google from "@/components/Icons/Google";
import { Assets } from "@/static/assets/assets";
import i18n from "@/redux/i18n";

const Shared: React.FC<Props> = ({ flip = false }) => {
  const description1 = i18n.t("nestledWithinGeneva");
  const description2 = i18n.t("hereWhispersOf");
  const [fullDesc, setFullDesc] = useState<boolean>(false);

  return (
    <section
      id="shared"
      className={`${styles.container} ${
        flip ? "flex-col-reverse xl:!gap-[90px]" : "flex-col"
      }`}
    >
      <div className={styles.containerTop}>
        <div className={styles.leftTop}>
          <h5>{i18n.t('ourFollowers')}</h5>
          <h6>{i18n.t('trustedByMany')}</h6>
        </div>
        <div className={styles.rightTop}>
          <div className={styles.rightFollowers1}>
            <CVS className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <StarWars className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers}>
            <StarWars className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
          </div>
          <div className={styles.rightFollowers1}>
            <NetFlix className={styles.rightIcon} />
            <Google className={styles.rightIcon} />
            <CVS className={styles.rightIcon} />
            <YouTube className={styles.rightIcon} />
            <NetFlix className={styles.rightIcon} />
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.containerBottom}>
          <img src={Assets.staff} alt="Staff" />
          <div className={styles.bottomContent}>
            <h5>{i18n.t('professionalSurgeon')}</h5>
            <div className={styles.bottomContents}>
              <h6>{i18n.t('expertiseWithAGentle')}</h6>
              <p>
              {i18n.t('drMenguWields')}
              </p>
            </div>
            <div className={styles.bottomContents}>
              <h6>{i18n.t('clearCommunication')}</h6>
              <p>
              {i18n.t('ourExpertiseWith')}
              </p>
            </div>
            <div className={styles.bottomContents}>
              <h6>{i18n.t('personalizedCare')}</h6>
              <p>
              {i18n.t('atMenguMedical')}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{description1}</p>
          <p className={!fullDesc ? "mt-8" : "mt-0"}>
            {description2.substring(0, !fullDesc ? 1500 : 0)}
            {!fullDesc ? "" : "..."}{" "}
            <span onClick={() => setFullDesc(!fullDesc)}>
              {fullDesc ? i18n.t('readMore') : i18n.t('readLess')}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shared;

interface Props {
  flip?: boolean;
}
