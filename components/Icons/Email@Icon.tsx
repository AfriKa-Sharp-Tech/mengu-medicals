import React from "react";

const EmailIcon: React.FC<Props> = ({ className }) => {
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
        x="8"
        y="8"
        width="8"
        height="8"
        rx="3"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <path
        d="M16 12V14.5C16 15.3284 16.6716 16 17.5 16H19.5C20.3284 16 21 15.3284 21 14.5V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17"
        // stroke="#242E49"
        strokeWidth="2"
      />
    </svg>
  );
};

export default EmailIcon;

type Props = {
  className: string;
};
