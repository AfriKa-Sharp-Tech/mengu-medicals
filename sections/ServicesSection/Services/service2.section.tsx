import React from "react";

import styles from "./services.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import { Assets } from "@/static/assets/assets";

const Service2: React.FC = () => {

  return (
    <section id="service2" className={`${styles.container} bg-white`}>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <div className={styles.image4}>
            <img src={Assets.feature1} alt="Testimage" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image3}>
            <img src={Assets.feature1} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.feature2} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.feature2} alt="Testimage" />
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <h4>Service 2</h4>
        <div>
          <p>
            Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat
            kontrasat nonade. att apiniras. Vanat bektig.oaktat kontrasat
            nonade. att apiniras. Vanat bektig.oaktat kontrasat nonade. att
            apiniras. Vanat bektig. Lörem ipsum slöjböter spefåvis inte proll
            stuprörspolitik, oaktat kontrasat nonade. att apiniras. Vanat
            bektig.oaktat kontrasat nonade. att apiniras. Vanat bektig.oaktat
            kontrasat nonade. att apiniras. Vanat bektig.
          </p>
          <p>
            Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat
            kontrasat nonade. att apiniras. Vanat bektig.oaktat kontrasat
            nonade. att apiniras. Lörem ipsum slöjböter spefåvis inte proll
            stuprörspolitik, oaktat kontrasat nonade. att apiniras.
          </p>
        </div>
        <div className={styles.button}>
          <Button
            type={ButtonType.SEC}
            text="Contact Us"
            icon={<ChevronIcon className={styles.buttonIcon} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service2;
