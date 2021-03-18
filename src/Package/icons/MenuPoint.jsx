import React from 'react';

const MenuPoint = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9 15"
    >
      <g fill="#d0d4db" transform="rotate(90 4.5 4.5)">
        <g data-name="Icon_menu_point_h">
          <path d="M3 1.5A1.5 1.5 0 111.5 0 1.5 1.5 0 013 1.5z"></path>
          <path
            d="M3 1.5A1.5 1.5 0 111.5 0 1.5 1.5 0 013 1.5z"
            data-name="Path"
            transform="translate(6)"
          ></path>
          <path
            d="M1.5 3A1.5 1.5 0 100 1.5 1.5 1.5 0 001.5 3z"
            data-name="Path"
            transform="translate(12)"
          ></path>
        </g>
        <g data-name="Icon_menu_point_h" transform="translate(0 6)">
          <path
            d="M3 1.5A1.5 1.5 0 111.5 0 1.5 1.5 0 013 1.5z"
            data-name="Path"
          ></path>
          <path
            d="M3 1.5A1.5 1.5 0 111.5 0 1.5 1.5 0 013 1.5z"
            data-name="Path"
            transform="translate(6)"
          ></path>
          <path
            d="M1.5 3A1.5 1.5 0 100 1.5 1.5 1.5 0 001.5 3z"
            data-name="Path"
            transform="translate(12)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default MenuPoint;
