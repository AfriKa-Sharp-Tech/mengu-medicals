import React from "react";

const MenguIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="372"
      height="96"
      viewBox="0 0 372 96"
      fill="none"
      className={className}
    >
      <path
        d="M0 0H372L349.895 26L308.211 73L298.105 82.5L292.421 86L286.105 89L278.526 91.5L272.211 93L264 94L259.579 94.5L252.632 95L233.053 96H199.579H0V0Z"
        fill="#F8FAFC"
      />
      <path
        d="M0 0H372L349.895 26L308.211 73L298.105 82.5L292.421 86L286.105 89L278.526 91.5L272.211 93L264 94L259.579 94.5L252.632 95L233.053 96H199.579H0V0Z"
        fill="url(#paint0_linear_214_341)"
        fill-opacity="0.1"
      />
      <path
        d="M0 0H372L349.895 26L308.211 73L298.105 82.5L292.421 86L286.105 89L278.526 91.5L272.211 93L264 94L259.579 94.5L252.632 95L233.053 96H199.579H0V0Z"
        fill="url(#paint1_linear_214_341)"
        fill-opacity="0.1"
      />
      <defs>
        <linearGradient
          id="paint0_linear_214_341"
          x1="176.526"
          y1="-1.5333e-07"
          x2="176.724"
          y2="15.0016"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_214_341"
          x1="186"
          y1="96"
          x2="186"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MenguIcon;

type Props = {
  className: string;
};
