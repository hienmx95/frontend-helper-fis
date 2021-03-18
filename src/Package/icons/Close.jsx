import React from 'react';

const Close = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 10"
    >
      <path
        fill="#5c6a82"
        d="M.279.279a.954.954 0 000 1.349L3.651 5 .279 8.372a.954.954 0 101.349 1.349L5 6.349l3.372 3.372a.954.954 0 001.349-1.349L6.349 5l3.372-3.372A.954.954 0 008.372.279L5 3.651 1.628.279a.954.954 0 00-1.349 0z"
      ></path>
    </svg>
  );
};

export default Close;
