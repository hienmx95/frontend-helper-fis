import React from 'react'

const Car = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 11.52"
    >
      <path
        fill="#5c6a82"
        d="M-12.16-556.78v-1.281h-7.68v1.281h-2.56v-5.76h-.64a.961.961 0 01-.96-.96.961.961 0 01.96-.96h1.28l.96-2.944a1.374 1.374 0 011.216-.9h7.168a1.309 1.309 0 011.217.9l.959 2.944h1.28a.96.96 0 01.96.96.96.96 0 01-.96.96h-.64v5.76zm-8.32-3.2h8.96v-.64h-2.56a.96.96 0 01-.96-.96.959.959 0 01.96-.959h2.5l-1.28-3.84h-6.208l-1.28 3.84h2.432a.96.96 0 01.96.959.961.961 0 01-.96.96h-2.56z"
        data-name="Icons / Car"
        transform="translate(24 568.3)"
      ></path>
    </svg>
  );
}

export default Car
