import React from "react";

import styles from "./progress.module.css";

const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.progressHeader}>
        <p>{progress.label}</p>
        <p>{progress.value}%</p>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressValue}
          style={{ width: `${progress.value}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;

interface Props {
  progress: { label: string; value: number };
}
