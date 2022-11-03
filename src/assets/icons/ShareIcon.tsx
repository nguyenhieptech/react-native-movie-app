import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function ShareIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.15 9.75L11.928 17v-4.3a.2.2 0 00-.201-.2c-4.334 0-7.773.06-10.728 4C1 7.621 6.84 5.555 11.73 5.501c.11-.001.199-.09.199-.201V1l8.22 7.25a1 1 0 010 1.5z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
