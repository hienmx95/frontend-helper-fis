import React from 'react'

const Attention = ({
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
        d="M8 16a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-5.6a.8.8 0 10.8.8.8.8 0 00-.8-.8zM8 4a.8.8 0 00-.8.8V8a.8.8 0 101.6 0V4.8A.8.8 0 008 4z"
      ></path>
    </svg>
  )
}

export default Attention
