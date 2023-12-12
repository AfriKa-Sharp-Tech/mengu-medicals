import React from "react";

const SquareChevronIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        // stroke="#011F22"
        strokeWidth="2"
      />
      <path
        d="M8 14L9.87868 12.1213C11.0503 10.9497 12.9497 10.9497 14.1213 12.1213L16 14"
        stroke="#011F22"
        strokeWidth="2"
      />
    </svg>
  );
};

export default SquareChevronIcon;

type Props = {
  className: string;
};
