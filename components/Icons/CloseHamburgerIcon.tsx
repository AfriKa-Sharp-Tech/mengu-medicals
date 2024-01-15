import React from "react";

const CloseHamburderIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="white" />
      <path
        d="M8.00002 24L13.8787 18.1213C15.0503 16.9497 16.9498 16.9497 18.1213 18.1213L24 24"
        stroke="#044046"
        strokeWidth="2"
      />
      <path
        d="M23.9999 8L18.1213 13.8787C16.9497 15.0503 15.0502 15.0503 13.8786 13.8787L7.99992 7.99992"
        stroke="#044046"
        strokeWidth="2"
      />
    </svg>
  );
};

export default CloseHamburderIcon;

type Props = {
  className: string;
};
