import React from "react";

const ArrowIcon: React.FC<Props> = ({ className }) => {
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
        d="M18.5788 7.1284L5.70718 20L5.00008 19.2929L17.8717 6.4213L18.4844 5.80858L17.6473 5.58472C17.4403 5.52936 17.2232 5.5 17.0001 5.5L10.5001 5.5V4.5H17.0001C18.9331 4.5 20.5001 6.067 20.5001 8V14.5H19.5001V8C19.5001 7.77684 19.4707 7.55976 19.4154 7.35278L19.1915 6.51568L18.5788 7.1284Z"
        // fill="#242E49"
        // stroke="white"
      />
    </svg>
  );
};

export default ArrowIcon;

type Props = {
  className: string;
};
