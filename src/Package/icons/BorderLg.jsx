import React from 'react'

const BorderLg = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
    >
      <g transform="translate(-1183 -60)">
        <rect
          width="12"
          height="2"
          fill="#5c6a82"
          rx="1"
          transform="rotate(90 565 625)"
        ></rect>
        <g
          fill="none"
          stroke="#5c6a82"
          strokeWidth="2"
          data-name="Rectangle"
          transform="translate(1183 60)"
        >
          <rect width="12" height="12" stroke="none" rx="2"></rect>
          <rect width="10" height="10" x="1" y="1" rx="1"></rect>
        </g>
        <rect
          width="12"
          height="2"
          fill="#5c6a82"
          data-name="Rectangle"
          rx="1"
          transform="translate(1183 65)"
        ></rect>
      </g>
    </svg>
  );
}

export default BorderLg
