import React from 'react'

const Wait = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13.333 13.333"
    >
      <path
        fill="#a2aab7"
        d="M3.7 7.407A3.7 3.7 0 100 3.7a3.7 3.7 0 003.7 3.707z"
        transform="translate(2.963 2.963)"
      ></path>
      <path
        fill="#a2aab7"
        d="M6.667 13.333a6.667 6.667 0 116.667-6.667 6.674 6.674 0 01-6.667 6.667zm0-11.852a5.185 5.185 0 105.185 5.185 5.191 5.191 0 00-5.185-5.185z"
      ></path>
    </svg>
  );
}

export default Wait
