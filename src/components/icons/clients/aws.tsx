const Aws = ({ color = '#737373' }: { color?: string } = {}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="50"
      viewBox="0 0 152 92"
      fill="none"
    >
      <g clip-path="url(#clip0_541_370)">
        <path
          d="M42.7331 33.3704C42.5615 38.7688 45.2592 41.1594 45.326 42.6777C45.2942 42.9867 45.1889 43.2836 45.0189 43.5436C44.8489 43.8035 44.6192 44.0191 44.3489 44.1721L41.2984 46.3076C40.9036 46.5844 40.4383 46.7431 39.9567 46.7652C39.8542 46.7604 38.0048 47.2014 35.0759 40.6613C33.289 42.8921 31.0153 44.6844 28.4291 45.901C25.8428 47.1176 23.0125 47.7263 20.1548 47.6804C16.275 47.8926 5.76044 45.4782 6.30142 34.2832C5.9225 25.1595 14.4185 19.4917 23.2053 19.9708C24.8974 19.9756 28.353 20.059 34.4039 21.4652V17.7423C35.0449 11.4358 30.9006 6.54262 23.7248 7.27672C23.1529 7.2791 19.1015 7.15755 12.8003 9.68635C11.0463 10.492 10.8223 10.3585 10.2384 10.3585C8.4725 10.3585 9.19937 5.23889 9.53778 4.5906C10.7794 3.06522 18.0839 0.217029 25.2524 0.257547C30.0456 -0.166398 34.8131 1.31304 38.5244 4.3761C40.033 6.06375 41.1839 8.0397 41.9077 10.1846C42.6315 12.3295 42.9131 14.5989 42.7354 16.8557L42.7331 33.3704ZM22.1376 41.0903C29.8663 40.9783 33.1384 36.3306 33.8843 33.828C34.4706 31.4327 34.3729 29.9168 34.3729 27.2974C32.0683 26.7445 28.751 26.1415 24.945 26.1367C21.3345 25.865 14.7403 27.4786 14.9976 33.8256C14.7021 37.8274 17.6477 41.3096 22.1376 41.0903ZM62.8709 46.5841C60.9977 46.7557 60.1255 45.4257 59.849 44.1125L47.9808 4.86946C47.7496 4.20687 47.5971 3.52283 47.5232 2.82449C47.4795 2.53658 47.5518 2.24306 47.7243 2.00844C47.8967 1.77381 48.1553 1.61726 48.4431 1.57319C48.5003 1.56366 47.9355 1.57319 53.7457 1.57319C55.8381 1.36345 56.5197 3.0104 56.7366 4.0448L65.2493 37.6105L73.1519 4.0448C73.2782 3.27734 73.8526 1.40636 76.2024 1.60418H80.2919C80.8091 1.56128 82.9396 1.48501 83.3138 4.07578L91.2784 38.0705L100.065 4.07578C100.18 3.5562 100.713 1.36584 103.087 1.60418H107.787C107.989 1.5732 109.252 1.41112 109.038 3.64915C108.935 4.09008 109.85 1.10843 96.4666 44.1435C96.1925 45.4567 95.3179 46.7867 93.4447 46.6151H88.9905C86.3833 46.8891 86.0092 44.3127 85.9687 44.0529L78.066 11.369L70.254 44.0195C70.2159 44.2793 69.8417 46.8558 67.2321 46.5817H62.8709V46.5841ZM128.046 47.9259C126.645 47.9283 119.962 47.8544 114.376 44.9967C113.82 44.7611 113.346 44.3655 113.014 43.8601C112.683 43.3548 112.509 42.7624 112.515 42.1581V39.5959C112.515 37.5819 113.992 37.9513 114.619 38.1921C117.012 39.1597 118.547 39.8938 121.485 40.4801C130.219 42.2749 134.061 39.9319 135.003 39.4124C138.136 37.5509 138.384 33.2917 136.254 31.0823C133.756 28.9873 132.565 28.9086 123.592 26.0771C122.486 25.7697 113.177 22.8333 113.156 13.5975C113.011 6.86677 119.126 0.207494 129.724 0.262313C132.743 0.25993 140.789 1.24667 142.967 3.98522C143.289 4.48335 143.449 5.06967 143.425 5.66314V8.07278C143.425 9.13102 143.039 9.66014 142.264 9.66014C140.427 9.45516 137.166 6.99786 130.548 7.09796C128.906 7.01216 121.042 7.31485 121.395 13.0494C121.292 17.5683 127.736 19.2629 128.473 19.4584C137.162 22.073 140.067 22.5068 143.515 26.5085C147.6 31.8116 145.398 38.0205 144.552 39.7222C140.005 48.6576 128.246 47.9307 128.046 47.9259ZM137.626 72.9185C120.937 85.2455 96.7096 91.8071 76.0237 91.8071C48.112 91.9912 21.141 81.7269 0.412592 63.0321C-1.14362 61.6282 0.229087 59.7048 2.12133 60.775C25.1153 73.9294 51.1493 80.8412 77.6395 80.8243C97.4216 80.7182 116.988 76.7047 135.215 69.0144C138.022 67.8227 140.403 70.8735 137.626 72.9185ZM144.583 64.9841C142.448 62.2384 130.455 63.7018 125.086 64.3429C123.468 64.5265 123.194 63.1226 124.66 62.0858C134.209 55.3717 149.893 57.2952 151.694 59.5523C153.494 61.8094 151.206 77.5256 142.266 85.0334C140.894 86.1941 139.581 85.5816 140.191 84.0562C142.202 78.9914 146.718 67.7322 144.583 64.9841Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_541_370">
          <rect width="153" height="92" fill="white" transform="translate(-0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Aws
