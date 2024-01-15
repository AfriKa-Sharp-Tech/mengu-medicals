import React from "react";

const QuoteIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="56"
      viewBox="0 0 61 56"
      fill="none"
      className={className}
    >
      <path
        d="M33.63 33.453C33.63 20.532 43.542 9.027 55.047 0L59.826 5.664C52.746 12.567 47.79 18.762 47.79 24.603C47.79 29.559 51.33 34.161 60.18 38.586V46.728L43.719 55.578C36.639 47.967 33.63 40.533 33.63 33.453ZM0 33.453C0 20.532 9.912 9.027 21.417 0L26.196 5.664C19.116 12.567 14.16 18.762 14.16 24.603C14.16 29.559 17.7 34.161 26.55 38.586V46.728L10.089 55.578C3.009 47.967 0 40.533 0 33.453Z"
        fill="#0B646D"
      />
    </svg>
  );
};

export default QuoteIcon;

type Props = {
  className: string;
};
