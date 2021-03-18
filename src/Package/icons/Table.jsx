import React from 'react';

const Table = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
    >
      <g transform="rotate(90 9 9)">
        <g fill="#5c6a82" data-name="Group 9216">
          <path
            d="M16.875 0H1.125A1.063 1.063 0 000 1.125v2.25A1.063 1.063 0 001.125 4.5h15.75A1.063 1.063 0 0018 3.375v-2.25A1.063 1.063 0 0016.875 0z"
            data-name="Path 16395"
          ></path>
          <path
            d="M3.375 6h-2.25A1.063 1.063 0 000 7.125v9a1.063 1.063 0 001.125 1.125h2.25A1.063 1.063 0 004.5 16.125v-9A1.063 1.063 0 003.375 6z"
            data-name="Path 16396"
            transform="translate(0 .75)"
          ></path>
          <path
            d="M16.125 6h-9A1.063 1.063 0 006 7.125v9a1.063 1.063 0 001.125 1.125h9a1.063 1.063 0 001.125-1.125v-9A1.063 1.063 0 0016.125 6z"
            data-name="Path 16397"
            transform="translate(.75 .75)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Table;
