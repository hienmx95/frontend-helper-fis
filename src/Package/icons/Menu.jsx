import React from 'react'

const Menu = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 10"
    >
      <g fill="#5c6a82" transform="translate(-1161 -59.3)">
        <rect
          width="12"
          height="2"
          rx="1"
          transform="translate(1161 59.3)"
        ></rect>
        <rect
          width="12"
          height="2"
          data-name="Rectangle"
          rx="1"
          transform="translate(1161 67.3)"
        ></rect>
        <rect
          width="12"
          height="2"
          data-name="Rectangle"
          rx="1"
          transform="translate(1161 63.3)"
        ></rect>
      </g>
    </svg>
  );
}

export default Menu
