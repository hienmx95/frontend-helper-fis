import React from 'react'

const Card = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 11.2"
    >
      <path
        d="M14.4 11.2H1.6A1.6 1.6 0 010 9.6v-8A1.6 1.6 0 011.6 0h12.8A1.6 1.6 0 0116 1.6v8a1.6 1.6 0 01-1.6 1.6zm-12-9.6a.8.8 0 00-.8.8v6.4a.8.8 0 00.8.8h11.2a.8.8 0 00.8-.8V2.4a.8.8 0 00-.8-.8z"
        fill="#5c6a82"
      ></path>
      <path
        fill="#5c6a82"
        d="M0 0h16v1.6H0z"
        transform="translate(0 3.2)"
      ></path>
      <path
        fill="#5c6a82"
        d="M0 0h4.8v.8H0z"
        data-name="Path"
        transform="translate(3.2 7.2)"
      ></path>
    </svg>
  );
}

export default Card
