import React from "react";

const HelpIcon: React.FC<Props> = ({ className }) => {
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
        d="M7 9V7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V9.5C17 10.8807 15.8807 12 14.5 12V12C13.1193 12 12 13.1193 12 14.5V17"
        // stroke="white"
        strokeWidth="2"
      />
      <rect x="11" y="19" width="2" height="2" rx="0.5" fill="white" />
    </svg>
  );
};

export default HelpIcon;

type Props = {
  className: string;
};
