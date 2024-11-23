import React from 'react';

const CircleProgressBar = ({
                               size = 26, // 원형 크기
                               progress = 50, // 진행률
                               strokeWidth = 4, // 바의 두께
                               color = "#4caf50", // 진행 바 색상
                               trackColor = "#e0e0e0" // 트랙 색상
                           }) => {
    const radius = (size - strokeWidth) / 2; // 반지름
    const circumference = 2 * Math.PI * radius; // 원 둘레
    const offset = circumference - (progress / 100) * circumference; // 진행 오프셋

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={trackColor}
                strokeWidth={strokeWidth}
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="18px"
                fill="#333"
                fontWeight="400"
                className='font-Bruno'
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

export default CircleProgressBar;
