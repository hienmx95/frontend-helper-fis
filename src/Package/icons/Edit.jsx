import React from 'react'

const Edit = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <g transform="translate(-4.429 -4.308)">
        <g
          fill="#5c6a82"
          data-name="Icon_edit"
          transform="translate(4.429 4.308)"
        >
          <path
            d="M2.733.283a.966.966 0 00-1.367 0L0 1.65l4.1 4.1 1.367-1.367a.966.966 0 000-1.367z"
            transform="translate(10.25)"
          ></path>
          <path
            d="M12.984 4.1L8.883 0l-8.6 8.6A.966.966 0 000 9.284v2.733a.966.966 0 00.966.966H3.7a.967.967 0 00.683-.283z"
            data-name="Path"
            transform="translate(0 3.016)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default Edit
