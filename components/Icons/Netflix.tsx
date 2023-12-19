import React from "react";

const NetFlix: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="129"
      height="128"
      viewBox="0 0 129 128"
      fill="none"
    >
      <rect x="1" y="0.5" width="127" height="127" rx="11.5" stroke="#78AEFF" />
      <path
        d="M32.6003 74.5175C31.2765 74.7423 29.9294 74.8097 28.5359 74.9892L24.2856 62.9502V75.5059C22.9619 75.6406 21.7542 75.8203 20.5 76V53H24.0303L28.861 66.05V53H32.6003V74.5175ZM39.9162 61.4229C41.3563 61.4229 43.5626 61.3555 44.8864 61.3555V64.9491C43.2373 64.9491 41.3098 64.9491 39.9162 65.0165V70.3623C42.0994 70.2276 44.2826 70.0478 46.4889 69.9804V73.4391L36.2001 74.2254V53H46.4889V56.5938H39.9162V61.4229ZM60.3078 56.5938H56.4525V73.1251C55.1983 73.1251 53.9441 73.1251 52.7366 73.1699V56.5938H48.8813V53H60.308L60.3078 56.5938ZM66.3463 61.1759H71.4327V64.7695H66.3463V72.9229H62.6997V53H73.0816V56.5938H66.3463V61.1759ZM79.1201 69.7783C81.2337 69.8231 83.3702 69.9806 85.4374 70.0927V73.6416C82.1162 73.4393 78.795 73.2374 75.4042 73.1699V53H79.1201V69.7783ZM88.5727 73.8887C89.7572 73.9562 91.0114 74.0236 92.2191 74.1581V53H88.5727V73.8887ZM108.5 53L103.785 63.9385L108.5 76C107.106 75.8203 105.713 75.5732 104.319 75.3486L101.649 68.7003L98.9315 74.8097C97.5841 74.5849 96.2836 74.5175 94.9367 74.3378L99.7211 63.8036L95.4011 53H99.3956L101.834 59.042L104.436 53H108.5Z"
        fill="#1CB3C2"
      />
    </svg>
  );
};

export default NetFlix;

type Props = {
  className: string;
};