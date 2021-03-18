import React from 'react'

const Error = ({
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
        fill="#d32f2f"
        d="M7 14a7 7 0 117-7 7.008 7.008 0 01-7 7zm0-6.01l1.485 1.485a.7.7 0 10.99-.99L7.99 7l1.485-1.485a.7.7 0 10-.99-.99L7 6.01 5.515 4.525a.7.7 0 00-.99.99L6.01 7 4.525 8.485a.7.7 0 10.99.99L7 7.99z"
      ></path>
    </svg>
  );
}

export default Error
