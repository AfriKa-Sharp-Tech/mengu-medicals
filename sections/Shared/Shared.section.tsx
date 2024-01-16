import React, { useState } from "react";

import styles from "./shared.module.css";
import NetFlix from "@/components/Icons/Netflix";
import CVS from "@/components/Icons/CVS";
import YouTube from "@/components/Icons/YouTube";
import StarWars from "@/components/Icons/StarWars";
import Google from "@/components/Icons/Google";
import { Assets } from "@/static/assets/assets";

const Shared: React.FC<Props> = ({ flip = false }) => {
  const description = `We offerhealthcare professionals access to cutting-edge AI-driven
  health assessments and data analytics.We offerhealthcare
  professionals access to cutting-edge AI-driven health assessments
  and data analytics. We offerhealthcare
  professionals access to cutting-edge AI-driven health assessments
  and data analytics.We offerhealthcare professionals access to
  cutting-edge AI-driven health assessments and data analytics.`;
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
          <h5>Our followers</h5>
          <h6>Trusted by many</h6>
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
            <h5>Professionals Surgeron</h5>
            <div className={styles.bottomContents}>
              <h6>Professionals</h6>
              <p>
                We offerhealthcare professionals access to cutting-edge
                AI-driven health assessments and data analytics.lthcare
                professionals access to cutting-edge AI-driven health
                assessments
              </p>
            </div>
            <div className={styles.bottomContents}>
              <h6>Professionals</h6>
              <p>
                We offerhealthcare professionals access to cutting-edge
                AI-driven health assessments and data analytics.
              </p>
            </div>
            <div className={styles.bottomContents}>
              <h6>Professionals</h6>
              <p>
                We offerhealthcare professionals access to cutting-edge
                AI-driven health assessments and data analytics.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            {description.substring(0, !fullDesc ? 1500 : 150)}
            {!fullDesc ? "" : "..."}{" "}
            <span onClick={() => setFullDesc(!fullDesc)}>
              Read {fullDesc ? "more" : "less"}
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
