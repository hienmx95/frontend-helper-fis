import React from 'react'

const Move = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
    >
      <g fill="#5c6a82" transform="rotate(90 6 6)">
        <path
          d="M2.381 8.71a.748.748 0 00.414.263.8.8 0 00.408 0 .748.748 0 00.416-.264l2.157-2.067a.712.712 0 000-1.037l-.024-.023a.788.788 0 00-1.081 0l-.889.852V.75A.749.749 0 003.034 0h-.068a.749.749 0 00-.748.75v5.685l-.889-.852a.788.788 0 00-1.081 0l-.024.023a.712.712 0 000 1.037z"
          transform="translate(0 3)"
        ></path>
        <path
          d="M3.619.29A.748.748 0 003.2.027a.8.8 0 00-.408 0 .747.747 0 00-.411.263L.224 2.358a.712.712 0 000 1.037l.024.023a.788.788 0 001.081 0l.889-.852V8.25a.749.749 0 00.748.75h.068a.749.749 0 00.748-.75V2.565l.889.852a.788.788 0 001.081 0l.024-.023a.712.712 0 000-1.037z"
          data-name="Path"
          transform="translate(6)"
        ></path>
      </g>
    </svg>
  );
}

export default Move
