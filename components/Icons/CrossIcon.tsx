import React from "react";

const CrossIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="97"
      viewBox="0 0 96 97"
      fill="none"
      className={className}
    >
      <path
        d="M16 48.1033H36C42.6274 48.1033 48 53.4759 48 60.1033V80.1033"
        strokeWidth="8"
      />
      <path
        d="M80 48.1033L60 48.1033C53.3726 48.1033 48 42.7307 48 36.1033L48 16.1033"
        strokeWidth="8"
      />
    </svg>
  );
};

export default CrossIcon;

type Props = {
  className: string;
};
