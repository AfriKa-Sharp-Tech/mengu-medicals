import React from "react";

import styles from "./faqs.module.css";

const Faqs: React.FC = () => {
  return (
    <section id="faqs" className={styles.container}>
      <div className={styles.containerTop}>
        <h6>FAQ</h6>
        <h4>Need Support</h4>
      </div>
    </section>
  );
};

export default Faqs;
