import React from "react";

const CheckIcon: React.FC<Props> = ({ className }) => {
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
        d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM12.8284 14.5858L18.7071 8.70711L17.2929 7.29289L11.4142 13.1716C10.6332 13.9526 9.36684 13.9526 8.58579 13.1716L6.70711 11.2929L5.29289 12.7071L7.17157 14.5858C8.73367 16.1479 11.2663 16.1479 12.8284 14.5858Z"
      />
    </svg>
  );
};

export default CheckIcon;

type Props = {
  className: string;
};
