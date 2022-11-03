import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function SliderIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 4.5a3.75 3.75 0 017.425-.75H21a.75.75 0 010 1.5h-3.325a3.751 3.751 0 01-7.425-.75zM14 2.25a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM1 3.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H1zm0 13.5h2.325a3.751 3.751 0 007.425-.75 3.75 3.75 0 00-7.425-.75H1a.75.75 0 000 1.5zm6 1.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm7-3a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z"
        fill="currentColor"
      />
    </Svg>
  );
}
