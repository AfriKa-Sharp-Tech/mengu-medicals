import React from "react";

const FaceBookIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      className={className}
    >
      <path
        d="M29.3334 16.5807C29.3334 9.17184 23.3645 3.1665 16.0001 3.1665C8.63564 3.1665 2.66675 9.17184 2.66675 16.5807C2.66675 23.2776 7.54142 28.827 13.9165 29.8332V20.459H10.5316V16.5798H13.9165V13.6252C13.9165 10.2634 15.9067 8.40562 18.953 8.40562C20.4107 8.40562 21.9379 8.66784 21.9379 8.66784V11.9692H20.2552C18.5992 11.9692 18.0836 13.0038 18.0836 14.0652V16.5807H21.7814L21.1903 20.4581H18.0836V29.8332C24.4587 28.827 29.3334 23.2776 29.3334 16.5807Z"
      />
    </svg>
  );
};

export default FaceBookIcon;

type Props = {
  className: string;
};
