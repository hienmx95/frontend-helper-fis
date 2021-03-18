import React from 'react';

const Time = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g
        data-name="Datetime picker / _part / Icons / Time"
        transform="translate(-455 -2163)"
      >
        <path
          fill="#67748a"
          d="M11 20a9 9 0 119-9 9 9 0 01-9 9zm0-1.8A7.2 7.2 0 103.8 11a7.2 7.2 0 007.2 7.2zm.9-7.569l2.286 2.277a.9.9 0 11-1.278 1.278L10.37 11.63a.9.9 0 01-.27-.63V7.4a.9.9 0 111.8 0z"
          data-name="Icons / Clocks"
          transform="translate(456 2164)"
        ></path>
        <path
          fill="none"
          d="M0 0h24v24H0z"
          data-name="Icons / Container / 16"
          transform="translate(455 2163)"
        ></path>
      </g>
    </svg>
  );
};

export default Time;
