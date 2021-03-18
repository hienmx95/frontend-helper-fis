import React from 'react'

const Processing = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <path
        fill="#fbbf2b"
        d="M9 16a7 7 0 117-7 7 7 0 01-7 7zm0-1.4A5.6 5.6 0 103.4 9 5.6 5.6 0 009 14.6zm.7-5.887l1.778 1.771a.7.7 0 11-.994.994L8.51 9.49A.7.7 0 018.3 9V6.2a.7.7 0 111.4 0z"
        transform="translate(-2 -2)"
      ></path>
    </svg>
  );
}

export default Processing
