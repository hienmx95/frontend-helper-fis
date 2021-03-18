import React from 'react'

const Flower = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <g fill="#5c6a82" transform="translate(-2 -2)">
        <path d="M18 10a2.377 2.377 0 00-2.24-2.4 2.449 2.449 0 00-.08-3.28 2.367 2.367 0 00-3.28-.08 2.406 2.406 0 00-4.8 0 2.449 2.449 0 00-3.28.08 2.449 2.449 0 00-.08 3.28 2.406 2.406 0 000 4.8 2.449 2.449 0 00.08 3.28 2.367 2.367 0 003.28.08 2.406 2.406 0 004.8 0 2.449 2.449 0 003.28-.08 2.367 2.367 0 00.08-3.28A2.377 2.377 0 0018 10zm-8 4a4 4 0 114-4 3.961 3.961 0 01-4 4z"></path>
        <circle
          cx="0.8"
          cy="0.8"
          r="0.8"
          transform="translate(10.8 8.4)"
        ></circle>
        <circle
          cx="0.8"
          cy="0.8"
          r="0.8"
          data-name="Ellipse"
          transform="translate(7.6 8.4)"
        ></circle>
        <path
          d="M11.59 14.59a1.828 1.828 0 01-1.52-.8.6.6 0 010-.72.387.387 0 01.56 0 1.122 1.122 0 001.84 0 .387.387 0 01.56 0 .6.6 0 010 .72 1.605 1.605 0 01-1.44.8z"
          data-name="Path"
          transform="translate(-1.59 -2.19)"
        ></path>
      </g>
    </svg>
  );
}

export default Flower
