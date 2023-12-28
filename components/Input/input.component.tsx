import React from "react";

import styles from "./input.module.css";

const Input: React.FC<Props> = ({
  icon,
  formdata,
  setFormdata,
  value,
  type = "text",
  placeholder,
}) => {
  return (
    <div className={styles.inputContainer}>
      {icon}
      <input type={type} className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;

interface Props {
  placeholder: string;
  icon?: JSX.Element;
  formdata?: any;
  setFormdata?: any;
  value?: string;
  type: string;
}
