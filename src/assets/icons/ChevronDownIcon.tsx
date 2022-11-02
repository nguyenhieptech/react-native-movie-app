import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ChevronDownIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 1L9 9 1 1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}
