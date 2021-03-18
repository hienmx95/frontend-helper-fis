import React from 'react'

const Desktop = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16.2 14.6"
    >
      <path
        fill="#5c6a82"
        stroke="#5c6a82"
        d="M10.8 14.2H9.2v1.6h1.6zm1.6 0v1.6H14a.8.8 0 010 1.6H6a.8.8 0 110-1.6h1.6v-1.6h-4A1.6 1.6 0 012 12.6v-8A1.6 1.6 0 013.6 3h12.8A1.6 1.6 0 0118 4.6v8a1.6 1.6 0 01-1.6 1.6zM3.6 4.6v8h12.8v-8z"
        transform="translate(-1.9 -2.9)"
      ></path>
    </svg>
  );
}

export default Desktop
