import React from "react";

const PharmaIcon: React.FC<Props> = ({ className }) => {
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
        d="M4 6.5C4 7.70948 4.85888 8.71836 6 8.94999V18C6 20.2091 7.79086 22 10 22H14C16.2091 22 18 20.2091 18 18V8.94999C19.1411 8.71836 20 7.70948 20 6.5V5.5C20 4.11929 18.8807 3 17.5 3H6.5C5.11929 3 4 4.11929 4 5.5V6.5ZM7 7H6.5C6.22386 7 6 6.77614 6 6.5V5.5C6 5.22386 6.22386 5 6.5 5H7V7ZM13 7H15V5H13V7ZM11 7V5H9V7H11ZM17.5 7H17V5H17.5C17.7761 5 18 5.22386 18 5.5V6.5C18 6.77614 17.7761 7 17.5 7ZM11 13V11H13V13H15V15H13V17H11V15H9V13H11Z"
        // fill="#1CB3C2"
      />
    </svg>
  );
};

export default PharmaIcon;

type Props = {
  className: string;
};
