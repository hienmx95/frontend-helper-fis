import React from 'react'

const Border = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 17.6 17.6"
    >
      <g
        fill="#5c6a82"
        stroke="#5c6a82"
        strokeWidth="1.6"
        transform="translate(-299.2 -384.2)"
      >
        <path d="M302 385h6v8h-8v-6a2 2 0 012-2z"></path>
        <path d="M308 385h6a2 2 0 012 2v6h-8v-8z" data-name="Rectangle"></path>
        <path d="M300 393h8v8h-6a2 2 0 01-2-2v-6z" data-name="Rectangle"></path>
        <path d="M308 393h8v6a2 2 0 01-2 2h-6v-8z" data-name="Rectangle"></path>
      </g>
    </svg>
  );
}

export default Border
