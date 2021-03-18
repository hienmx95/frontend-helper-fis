import React from 'react'

const Heart = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 16"
    >
      <path
        fill="#5c6a82"
        d="M1.379 8.274A4.841 4.841 0 010 4.889a4.963 4.963 0 019-2.812 4.963 4.963 0 019 2.812A4.845 4.845 0 0116.493 8.4L9 16z"
      ></path>
    </svg>
  );
}

export default Heart
