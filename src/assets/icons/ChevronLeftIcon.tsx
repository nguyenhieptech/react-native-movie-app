import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ChevronLeftIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 17L2 9l8-8"
        stroke="#FDFDFD"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
