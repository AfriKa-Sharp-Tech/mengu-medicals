import React from "react";

const ChevronIcon: React.FC<Props> = ({ className }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5859 14.8285L9.70718 19.7072L8.29297 18.2929L13.1716 13.4143C13.9527 12.6332 13.9527 11.3669 13.1716 10.5858L8.29297 5.70715L9.70718 4.29294L14.5859 9.17162C16.148 10.7337 16.148 13.2664 14.5859 14.8285Z"
      />
    </svg>
  );
};

export default ChevronIcon;

type Props = {
  className: string;
};
