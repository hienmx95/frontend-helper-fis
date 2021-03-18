import React from 'react';

const Delete = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12.444 16"
    >
      <path
        fill="#5c6a82"
        d="M8.889 0a.889.889 0 01.889.889h1.778a.889.889 0 010 1.778H.889a.889.889 0 010-1.778h1.778A.889.889 0 013.555 0z"
      ></path>
      <path
        fill="#5c6a82"
        d="M8.889 12.445H1.778A1.78 1.78 0 010 10.666V0h10.666v10.666a1.78 1.78 0 01-1.777 1.779zM7.555 1.778a.445.445 0 00-.444.445v8a.444.444 0 00.889 0v-8a.445.445 0 00-.445-.445zm-4.444 0a.445.445 0 00-.445.445v8a.444.444 0 00.889 0v-8a.445.445 0 00-.444-.445z"
        transform="translate(.889 3.555)"
      ></path>
    </svg>
  );
};

export default Delete;
