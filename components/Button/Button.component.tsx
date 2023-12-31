import React from "react";

import styles from "./button.module.css";

const Button: React.FC<Props> = ({
  text,
  icon,
  type = ButtonType.PRI,
  onClick,
}) => {
  let _typeVar: string = "";
  if (type === ButtonType.PRI) {
    _typeVar = "bg-white border-secondary-400 text-secondary-400";
  }

  if (type === ButtonType.SEC) {
    _typeVar = "bg-secondary-400 border-secondary-400 text-white";
  }
  return (
    <button onClick={onClick} className={`${styles.button} ${_typeVar}`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;

interface Props {
  text: string;
  type?: ButtonType;
  icon?: JSX.Element;
  onClick?: (any?: any) => void;
}

export enum ButtonType {
  PRI,
  SEC,
}
