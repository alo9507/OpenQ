import React from "react";

const Badge = () => {
  return (
    <svg width="102.04499999999999" height="20">
      <linearGradient id="smooth" x2="0" y2="100%">
        <stop offset="0" stopColor="#bbb" stopOpacity=".1" />
        <stop offset="1" stopOpacity=".1" />
      </linearGradient>

      <clipPath id="round">
        <rect width="102.04499999999999" height="20" rx="3" fill="#fff" />
      </clipPath>

      <g clipPath="url(#round)">
        <rect width="85.2618" height="20" fill="#555" />
        <rect x="85.2618" width="16.7832" height="20" fill="#5bb878" />
        <rect width="102.04499999999999" height="20" fill="url(#smooth)" />
      </g>

      <g
        fill="#fff"
        textAnchor="middle"
        fontFamily="DejaVu Sans,Verdana,Geneva,sans-serif"
        fontSize="110"
      >
        <text
          x="436.30899999999997"
          y2="150"
          fill="#010101"
          fillOpacity=".3"
          transform="scale(0.1)"
          textLength="752.6179999999999"
          lengthAdjust="spacing"
        >
          code helpers
        </text>
        <text
          x="436.30899999999997"
          y="140"
          transform="scale(0.1)"
          textLength="752.6179999999999"
          lengthAdjust="spacing"
        >
          code helpers
        </text>
        <text
          x="926.5339999999999"
          y="150"
          fill="#010101"
          fillOpacity=".3"
          transform="scale(0.1)"
          textLength="67.83200000000001"
          lengthAdjust="spacing"
        >
          1
        </text>
        <text
          x="926.5339999999999"
          y="140"
          transform="scale(0.1)"
          textLength="67.83200000000001"
          lengthAdjust="spacing"
        >
          1
        </text>
      </g>
    </svg>
  );
};

export default Badge;
