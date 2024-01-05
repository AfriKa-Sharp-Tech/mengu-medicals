import React from "react";

import styles from "./services.module.css";
import Button, { ButtonType } from "@/components/Button/Button.component";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import List from "@/components/List/List.component";
import { Assets } from "@/static/assets/assets";
import { useRouter } from "next/router";

const Service3: React.FC = () => {
  const list: { value: string; label: string }[] = [
    { value: "one", label: "Symptom checker" },
    { value: "two", label: "Health risk assessment" },
    // { value: "two", label: "Chronic condition monitoring" },
  ];
  const router = useRouter()
  return (
    <section id="service3" className={`${styles.container} bg-secondary-100 flex-col-reverse lg:flex-row`}>
      <div className={styles.container1}>
        <h4>Service 3</h4>
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
        <div className={styles.list}>
          {list.map((item, index: number) => (
            <List key={index + item.value} item={item} />
          ))}
        </div>
        <div className={styles.button}>
          <Button
            type={ButtonType.SEC}
            text="Contact Us"
            icon={<ChevronIcon className={styles.buttonIcon} />}
            onClick={() => router.push("/contact-us")}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.imageContainer}>
          <div className={styles.image5}>
            <img src={Assets.happy1} alt="Testimage" />
          </div>
          <div className={styles.image5}>
            <img src={Assets.comfort} alt="Testimage" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image3}>
            <img src={Assets.examine} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.contactUs} alt="Testimage" />
          </div>
          <div className={styles.image1}>
            <img src={Assets.temperature} alt="Testimage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service3;
