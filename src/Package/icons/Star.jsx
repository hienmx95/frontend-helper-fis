import React from 'react';

const Star = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 15.111"
    >
      <g transform="translate(-3 -4)">
        <g data-name="Icon_star" transform="translate(3 4)">
          <path
            fill="#5c6a82"
            d="M7.089 13.2a1.778 1.778 0 011.821 0l2.97 1.775a.93.93 0 001.393-1l-.78-3.307a1.778 1.778 0 01.574-1.758l2.609-2.234a.92.92 0 00-.533-1.617l-3.451-.29A1.778 1.778 0 0110.206 3.7L8.86.561a.94.94 0 00-1.72 0L5.794 3.692a1.778 1.778 0 01-1.484 1.07l-3.452.29a.92.92 0 00-.534 1.616L2.933 8.9a1.778 1.778 0 01.574 1.758l-.78 3.307a.93.93 0 001.393 1z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Star;
