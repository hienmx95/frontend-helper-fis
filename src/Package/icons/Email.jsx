import React from 'react'

const Email = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 8.4"
    >
      <path
        fill="#5c6a82"
        d="M10.8 8.4H1.2A1.2 1.2 0 010 7.2v-6A1.2 1.2 0 011.2 0h9.6A1.2 1.2 0 0112 1.2v6a1.2 1.2 0 01-1.2 1.2zM1.2 1.907V6.6a.6.6 0 00.6.6h8.4a.6.6 0 00.6-.6V1.907l-4.8 3zM2.332 1.2L6 3.493 9.668 1.2z"
        data-name="Icon_mail"
        transform="translate(-2 -5) translate(2 5)"
      ></path>
    </svg>
  )
}

export default Email
