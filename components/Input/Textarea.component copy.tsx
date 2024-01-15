import React from "react";

import styles from "./input.module.css";

const Textarea: React.FC<Props> = ({
  icon,
  formdata,
  setFormdata,
  value,
  type = "text",
  placeholder,
}) => {
  return (
    <div className={styles.inputContainer2}>
      {icon}
      <textarea className={styles.input} placeholder={placeholder} rows={5} />
    </div>
  );
};

export default Textarea;

interface Props {
  placeholder: string;
  icon?: JSX.Element;
  formdata?: any;
  setFormdata?: any;
  value?: string;
  type: string;
}
