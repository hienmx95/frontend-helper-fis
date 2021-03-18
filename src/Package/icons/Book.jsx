import React from 'react'

const Book = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13.401 16.4"
    >
      <g data-name="Group 23" transform="translate(434.7 -1493.8)">
        <path
          fill="#5c6a82"
          d="M30.872 11.4H20.765a2.164 2.164 0 00-1.615.629 2.319 2.319 0 00-.65 1.552v11.533a2.2 2.2 0 002.265 2.286h10.107a.618.618 0 00.629-.629V12.029a.631.631 0 00-.629-.629zm-.629 14.763h-9.478a1.017 1.017 0 010-2.034h9.478zm0-3.292h-9.478a2.313 2.313 0 00-1.007.21v-9.395a1.145 1.145 0 01.273-.755 1.014 1.014 0 01.734-.273h9.478z"
          transform="translate(-453 1482.6)"
        ></path>
        <path
          stroke="#5c6a82"
          d="M33.929 28.058h5.347a.629.629 0 100-1.258h-5.347a.618.618 0 00-.629.629.631.631 0 00.629.629z"
          data-name="Path"
          transform="translate(-464.696 1470.429)"
        ></path>
        <path
          stroke="#5c6a82"
          d="M33.929 42.058h5.347a.629.629 0 000-1.258h-5.347a.618.618 0 00-.629.629.631.631 0 00.629.629z"
          data-name="Path"
          transform="translate(-464.696 1459.365)"
        ></path>
      </g>
    </svg>
  );
}

export default Book
