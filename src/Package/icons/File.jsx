import React from 'react'

const File = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12.8 16"
    >
      <path
        fill="#5c6a82"
        d="M11.2 16H1.6A1.6 1.6 0 010 14.4V1.6A1.6 1.6 0 011.6 0h8l3.2 3.2v11.2a1.6 1.6 0 01-1.6 1.6zM2.4 1.6a.8.8 0 00-.8.8v11.2a.8.8 0 00.8.8h8a.8.8 0 00.8-.8V4.8H8V1.6zm7.2 0v1.6h1.6z"
      ></path>
    </svg>
  );
}

export default File
