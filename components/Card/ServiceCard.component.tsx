import React from "react";

import styles from "./card.module.css";
import ChevronIcon from "../Icons/ChevronIcon";
import { useRouter } from "next/router";

const ServiceCard: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceBadge}>
          {data.icon}
          {/* <UserIcon className={styles.serviceIcon} /> */}
        </div>
        <div className={styles.serviceDetail}>
          <h6>{data.title}</h6>
          <p>{data.description}</p>
        </div>
      </div>
      <div
        className={styles.serviceIconWrap}
        onClick={() => router.push("/services")}
      >
        <ChevronIcon className={styles.serviceIcon} />
      </div>
    </div>
  );
};

export default ServiceCard;

interface Props {
  data: any;
}
