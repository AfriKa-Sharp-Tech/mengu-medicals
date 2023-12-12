import React from "react";

const PhoneIcon: React.FC<Props> = ({ className }) => {
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
        d="M5.5 12L7.5 10L9.06066 8.43934C9.34196 8.15804 9.5 7.7765 9.5 7.37868V4.5C9.5 3.67157 8.82843 3 8 3H6C5.17157 3 4.5 3.67157 4.5 4.5V9.84879C4.5 10.5899 4.77433 11.3048 5.27012 11.8557L9 16L12.6062 20.0069C13.1751 20.639 13.9856 21 14.8361 21H20C20.8284 21 21.5 20.3284 21.5 19.5V17.5C21.5 16.6716 20.8284 16 20 16H18.1213C17.7235 16 17.342 16.158 17.0607 16.4393L15.5 18L13.5 20"
        // stroke="#242E49"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PhoneIcon;

type Props = {
  className: string;
};
