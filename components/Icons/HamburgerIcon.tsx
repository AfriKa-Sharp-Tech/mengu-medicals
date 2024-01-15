import React from "react";

const HamburderIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 2C32 3.10457 31.1046 4 30 4H2C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0H30C31.1046 0 32 0.895431 32 2Z"
        fill="#F8FAFC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 12C32 13.1046 31.1046 14 30 14H2C0.895431 14 0 13.1046 0 12C0 10.8954 0.895431 10 2 10H30C31.1046 10 32 10.8954 32 12Z"
        fill="#F8FAFC"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 22C32 23.1046 31.1046 24 30 24H2C0.895431 24 0 23.1046 0 22C0 20.8954 0.895431 20 2 20H30C31.1046 20 32 20.8954 32 22Z"
        fill="#F8FAFC"
      />
    </svg>
  );
};

export default HamburderIcon;

type Props = {
  className: string;
};
