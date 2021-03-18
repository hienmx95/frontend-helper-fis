import React from 'react';

const Copy = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <g fill="#5c6a82" data-name="Group 9278">
        <path
          d="M9.625 10.5H.875A.874.874 0 010 9.625V.875A.875.875 0 01.875 0h8.75a.875.875 0 01.875.875v8.75a.874.874 0 01-.875.875z"
          data-name="Path 16410"
        ></path>
        <path
          d="M13.625 14.5H4v-1.75h8.75V4h1.75v9.625a.874.874 0 01-.875.875z"
          data-name="Path 16411"
          transform="translate(-.5 -.5)"
        ></path>
      </g>
    </svg>
  );
};

export default Copy;
