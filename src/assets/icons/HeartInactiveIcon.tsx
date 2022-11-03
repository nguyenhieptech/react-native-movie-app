import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function HeartInactiveIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 19c.5 0 10-5 10-12 0-3.5-2.5-5.956-5.5-6-1.5-.021-3 .5-4.5 2.5C9.5 1.5 7.974 1 6.5 1 3.5 1 1 3.5 1 7c0 7 9.5 12 10 12z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
