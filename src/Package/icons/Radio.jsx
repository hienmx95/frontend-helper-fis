import React from 'react';

const Radio = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Radio / Checked"
      viewBox="0 0 20 20"
    >
      <path fill="none" d="M0 0h20v20H0z"></path>
      <circle
        cx="7.5"
        cy="7.5"
        r="7.5"
        fill="#fff"
        stroke="#5c6a82"
        strokeWidth="2"
        transform="translate(2.5 2.5)"
      ></circle>
      <circle
        cx="3.75"
        cy="3.75"
        r="3.75"
        className="cls-3"
        data-name="Ellipse"
        transform="translate(6.25 6.25)"
      ></circle>
    </svg>
  );
};

export default Radio;
