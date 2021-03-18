import React from 'react'

const Apps = ({
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
      <path
        fill="#5c6a82"
        d="M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z"
      ></path>
      <path
        fill="#5c6a82"
        d="M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z"
        data-name="Path"
        transform="translate(9)"
      ></path>
      <path
        fill="#5c6a82"
        d="M0 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2z"
        data-name="Path"
        transform="translate(0 9)"
      ></path>
      <path
        fill="#5c6a82"
        d="M2 0a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2z"
        data-name="Path"
        transform="translate(9 9)"
      ></path>
    </svg>
  );
}

export default Apps
