import React from 'react'

const Filter = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 8 8"
    >
      <path
        fill="#5c6a82"
        d="M12.269 5.049a.4.4 0 01-.087.44L9.4 8.274a.462.462 0 00-.1.226v3.9a.4.4 0 01-.689.285l-1.2-1.2A.4.4 0 017.3 11.2V8.5a.459.459 0 00-.1-.226L4.418 5.489A.4.4 0 014.7 4.8h7.2a.4.4 0 01.369.249z"
        transform="translate(-4.3 -4.8)"
      ></path>
    </svg>
  );
}

export default Filter
