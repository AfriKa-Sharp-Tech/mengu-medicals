import React from "react";

const PatientPlusIcon: React.FC<Props> = ({ className }) => {
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
        d="M11.923 2C8.16807 2 5.11134 4.98938 5.00288 8.71806L3.12792 11.843C2.29428 13.2324 3.29509 15 4.91538 15C4.96206 15 4.9999 15.0378 4.9999 15.0845V16.5C4.9999 17.8807 6.11919 19 7.4999 19H8.4999C8.77605 19 8.9999 19.2239 8.9999 19.5V22H16.9999V18.6054C19.4631 17.2049 20.9999 14.5832 20.9999 11.7281V10C20.9999 5.58172 17.4182 2 12.9999 2H11.923ZM11.9999 9V7H13.9999V9H15.9999V11H13.9999V13H11.9999V11H9.99988V9H11.9999Z"
        // fill="red"
      />
    </svg>
  );
};

export default PatientPlusIcon;

type Props = {
  className: string;
};
