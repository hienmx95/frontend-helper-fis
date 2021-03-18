import React from 'react'

const Print = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 14.4"
    >
      <path fill="#5c6a82" d="M0 0h9.6v4H0z" transform="translate(3.2)"></path>
      <path
        fill="#5c6a82"
        d="M13.6 9.6H2.4V7.2h-.8A1.6 1.6 0 010 5.6v-4A1.6 1.6 0 011.6 0h12.8A1.6 1.6 0 0116 1.6v4a1.6 1.6 0 01-1.6 1.6h-.8v2.4zM4 2.4V8h8V2.4z"
        transform="translate(0 4.8)"
      ></path>
    </svg>
  );
}

export default Print
