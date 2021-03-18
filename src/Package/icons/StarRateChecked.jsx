import React from 'react';

const StarRateChecked = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 22.667"
    >
      <path
        fill="#fab428"
        d="M10.633 19.8a2.667 2.667 0 012.732 0l4.455 2.662a1.4 1.4 0 002.089-1.5L18.74 16a2.667 2.667 0 01.861-2.638l3.913-3.35a1.38 1.38 0 00-.8-2.425l-5.177-.434a2.667 2.667 0 01-2.228-1.603L13.29.842a1.409 1.409 0 00-2.58 0l-2.018 4.7a2.667 2.667 0 01-2.227 1.6l-5.178.434A1.38 1.38 0 00.487 10L4.4 13.353a2.667 2.667 0 01.86 2.637l-1.17 4.96a1.4 1.4 0 002.09 1.5z"
      ></path>
    </svg>
  );
};

export default StarRateChecked;
