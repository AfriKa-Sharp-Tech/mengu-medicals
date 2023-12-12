import React from "react";

const ProfessionalIcon: React.FC<Props> = ({ className }) => {
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
        d="M2 4.5C2 3.11929 3.11929 2 4.5 2H6V4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4H10V2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H9V18C9 19.1046 9.89543 20 11 20H15C16.1046 20 17 19.1046 17 18V11.95C15.8589 11.7184 15 10.7095 15 9.5V8.5C15 7.11929 16.1193 6 17.5 6H18.5C19.8807 6 21 7.11929 21 8.5V9.5C21 10.7095 20.1411 11.7184 19 11.95V18C19 20.2091 17.2091 22 15 22H11C8.79086 22 7 20.2091 7 18V14H4.5C3.11929 14 2 12.8807 2 11.5V4.5ZM17 8.5C17 8.22386 17.2239 8 17.5 8H18.5C18.7761 8 19 8.22386 19 8.5V9.5C19 9.77614 18.7761 10 18.5 10H17.5C17.2239 10 17 9.77614 17 9.5V8.5Z"
      />
    </svg>
  );
};

export default ProfessionalIcon;

type Props = {
  className: string;
};
