import React from 'react'

const BookmarkLight = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9.516 12"
    >
      <g fill="none">
        <path d="M0 .793A.793.793 0 01.793 0h7.93a.793.793 0 01.793.793v10.413a.793.793 0 01-1.233.66L5.2 9.809a.793.793 0 00-.88 0l-3.087 2.056A.793.793 0 010 11.206z"></path>
        <path
          fill="#5c6a82"
          d="M1.4 1.4v8.671l2.141-1.427a2.186 2.186 0 012.433 0l2.142 1.427V1.4H1.4M.793 0h7.93c.438 0 .793.355.793.793v10.413a.794.794 0 01-1.233.66L5.198 9.808a.792.792 0 00-.88 0l-3.085 2.056A.794.794 0 010 11.205V.794C0 .355.355 0 .793 0z"
        ></path>
      </g>
    </svg>
  );
}

export default BookmarkLight
