const Facebook = ({ color = '#FFF' }: { color?: string } = {}) => {
  return (
    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_540_721)">
        <path
          d="M21.002 13.05C21.002 8.604 17.42 5 13.002 5C8.582 5.001 5 8.604 5 13.051C5 17.068 7.926 20.398 11.75 21.002V15.377H9.72V13.051H11.752V11.276C11.752 9.259 12.947 8.145 14.774 8.145C15.65 8.145 16.565 8.302 16.565 8.302V10.282H15.556C14.563 10.282 14.253 10.903 14.253 11.54V13.05H16.471L16.117 15.376H14.252V21.001C18.076 20.397 21.002 17.067 21.002 13.05Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_540_721">
          <rect width="16" height="16" fill="white" transform="translate(5.5 5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Facebook
