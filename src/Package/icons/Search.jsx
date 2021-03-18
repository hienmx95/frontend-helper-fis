import React from 'react'

const Search = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15.999 16"
    >
      <g transform="translate(-232 -454)">
        <path
          fill="#5c6a82"
          d="M15.115 16a.881.881 0 01-.626-.259L9.91 11.162a6.2 6.2 0 111.251-1.252l4.579 4.579A.885.885 0 0115.115 16zM6.2 1.771A4.427 4.427 0 1010.624 6.2 4.432 4.432 0 006.2 1.771z"
          data-name="icon_search"
          transform="translate(232 454)"
        ></path>
      </g>
    </svg>
  );
}

export default Search
