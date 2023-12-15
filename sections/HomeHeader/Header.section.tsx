import React from "react";

import styles from "./header.module.css";

const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section id="header" className={styles.container1}>
      <div className={styles.content}>
        <h3>{title}</h3>
        {subtitle !== undefined && subtitle?.length  > 10 && (
          <p>
            Lörem ipsum slöjböter spefåvis inte proll stuprörspolitik, oaktat
            kontrasat nonade. att apiniras. Vanat bektig.
          </p>
        )}
      </div>
    </section>
  );
};

export default Header;

interface Props {
  title: string;
  subtitle?: string;
}
