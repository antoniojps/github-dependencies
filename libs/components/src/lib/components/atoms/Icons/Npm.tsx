import React from 'react';
import { getWidth, IconProps } from './';

export const Npm = ({ height = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getWidth(24, 24, height)}
      height={height}
      viewBox="0 0 24 24"
    >
      <title>Node package manager logo</title>
      <g fill="none">
        <path fill="#C00" d="M0 0h24v24H0z"></path>
        <path fill="#FFF" d="M11.918 2.578h-9.34V21.42h9.34V7.33h4.751v14.09h4.752V2.578z"></path>
      </g>
    </svg>
  );
};
