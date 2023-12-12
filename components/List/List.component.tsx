import React from "react";

import styles from "./list.module.css";
import CheckIcon from "../Icons/CheckIcon";

const List: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.list}>
      <CheckIcon className={styles.listIcon} />
      <p>{item.label}</p>
    </div>
  );
};

export default List;

interface Props {
  item: { value: string; label: string };
}
