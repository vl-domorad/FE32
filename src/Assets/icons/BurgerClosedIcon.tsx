import React from "react";

export const BurgerClosedIcon = ({ width = "24", height = "24", fill = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 7H3C2.448 7 2 6.552 2 6C2 5.448 2.448 5 3 5H21C21.553 5 22 5.448 22 6C22 6.552 21.553 7 21 7ZM21 13H3C2.448 13 2 12.552 2 12C2 11.448 2.448 11 3 11H21C21.553 11 22 11.448 22 12C22 12.552 21.553 13 21 13ZM3 19H21C21.553 19 22 18.553 22 18C22 17.447 21.553 17 21 17H3C2.448 17 2 17.447 2 18C2 18.553 2.448 19 3 19Z"
        fill={fill}
      />
    </svg>
  );
};
