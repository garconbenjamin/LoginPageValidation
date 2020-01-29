import React from "react";
const CheckAnime = () => (
  <div className="check-anime">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 133 133"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="check-group"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <polyline
          id="check"
          stroke="#FFFFFF"
          strokeWidth="4"
          points="41 70 56 85 92 49"
        ></polyline>
      </g>
    </svg>
  </div>
);
const CheckAnimeIcon = () => (
  <div className="check-icon">
    <CheckAnime />
  </div>
);
export default CheckAnimeIcon;
