import React from 'react'

const Success = ({
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
        fill="#43a047"
        d="M7 14a7 7 0 117-7 7.008 7.008 0 01-7 7zM4.03 6.3a.7.7 0 00-.5 1.195l1.983 1.977a.7.7 0 00.362.193.714.714 0 00.133.013.7.7 0 00.255-.048.685.685 0 00.24-.158l3.957-3.957a.7.7 0 00-.99-.99L6.01 7.99 4.525 6.5a.7.7 0 00-.495-.2z"
      ></path>
    </svg>
  );
}

export default Success
