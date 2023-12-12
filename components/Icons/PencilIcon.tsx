import React from "react";

const PencilIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className={className}
    >
      <path
        d="M13.0333 4.5H7.5C5.84314 4.5 4.5 5.84315 4.5 7.5V17.5C4.5 19.1569 5.84315 20.5 7.5 20.5H17.5C19.1569 20.5 20.5 19.1569 20.5 17.5V11.9667"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <path
        d="M16.5 5.5L18.4393 3.56066C19.0251 2.97487 19.9749 2.97487 20.5607 3.56066L21.4393 4.43934C22.0251 5.02513 22.0251 5.97487 21.4393 6.56066L19.5 8.5"
        // stroke="#242E49"
        strokeWidth="2"
      />
      <path
        d="M10.9393 11.0607L16.5 5.5L19.5 8.5L13.9393 14.0607C13.658 14.342 13.2765 14.5 12.8787 14.5H10.5V12.1213C10.5 11.7235 10.658 11.342 10.9393 11.0607Z"
        // stroke="#242E49"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PencilIcon;

type Props = {
  className: string;
};
