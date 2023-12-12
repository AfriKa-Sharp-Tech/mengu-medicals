import React from "react";

const EmergencyIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
    >
      <path
        d="M18.5 18V11C18.5 9.34315 17.1569 8 15.5 8H11.5C9.84315 8 8.5 9.34315 8.5 11V18"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <rect
        x="6.5"
        y="18"
        width="14"
        height="4"
        rx="1.5"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <path
        d="M9.5 2L9.49998 4.99995M3.49994 3L6.49994 6M2.5 8.99998H5.49998"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <path
        d="M13.5 11L13.5 15"
        //  stroke="#242E49"
        strokeWidth="2"
      />
    </svg>
  );
};

export default EmergencyIcon;

type Props = {
  className: string;
};
