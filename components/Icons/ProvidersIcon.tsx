import React from "react";

const ProvidersIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 5L7 5L7 3L17 3V5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6C6.79086 6 5 7.79086 5 10V17C5 19.2091 6.79086 21 9 21H15C17.2091 21 19 19.2091 19 17V10C19 7.79086 17.2091 6 15 6H9ZM11 12V10H13V12H15V14H13V16H11V14H9V12H11Z"
      />
    </svg>
  );
};

export default ProvidersIcon;

type Props = {
  className: string;
};
