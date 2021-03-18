import React from 'react';

const CheckBox = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Checkboxes / Checked"
      viewBox="0 0 20 20"
    >
      <rect
        width="15"
        height="15"
        fill="#5c6a82"
        stroke="#5c6a82"
        strokeWidth="2"
        rx="2"
        transform="translate(2.5 2.5)"
      ></rect>
      <path
        fill="#fff"
        d="M2.134 2.866A1.25 1.25 0 00.366 4.634l2.5 2.5a1.25 1.25 0 001.768 0l5-5A1.25 1.25 0 007.866.366L3.75 4.482z"
        data-name="Icons / Checked"
        transform="translate(5 6.25)"
      ></path>
      <path fill="none" d="M0 0h20v20H0z" data-name="Rectangle"></path>
    </svg>
  );
};

export default CheckBox;
