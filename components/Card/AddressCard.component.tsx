import React from "react";

import styles from "./card.module.css";
import ChevronIcon from "../Icons/ChevronIcon";

const AddressCard: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${styles.addressCard}`}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceBadge}>
          {data.icon}
        </div>
        <div className={styles.serviceDetail}>
          <h6 className="!text-base lg:!text-[26px]">{data.title}</h6>
          <p className="!text-secondary-700">{data.location}</p>
        </div>
        <div className={styles.contactDetail}>
            <p>{data.contact1}</p>
            <p>{data.contact2}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;

interface Props {
  data: any;
}