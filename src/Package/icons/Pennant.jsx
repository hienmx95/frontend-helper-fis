import React from 'react'

const Pennant = ({
  width = 16,
  height = 16
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11.486 16"
    >
      <path
        fill="#5c6a82"
        d="M88.407 14.31l-9.822-4.563a.834.834 0 00-1.185.753v9.1a.863.863 0 00.01.133v5.1a.832.832 0 101.664 0v-4.702l9.326-4.313a.833.833 0 00.483-.756.823.823 0 00-.476-.752zm-9.33 3.99v-6.489l7 3.252z"
        transform="translate(-77.4 -9.67)"
      ></path>
    </svg>
  );
}

export default Pennant
