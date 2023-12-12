import React from "react";

const UserIcon: React.FC<Props> = ({ className }) => {
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
        d="M3 20V17C3 15.3431 4.34315 14 6 14H18C19.6569 14 21 15.3431 21 17V20"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <rect
        x="8"
        y="3"
        width="8"
        height="8"
        rx="3"
        // stroke="#242E49"
        strokeWidth="2"
      />
    </svg>
  );
};

export default UserIcon;

type Props = {
  className: string;
};
