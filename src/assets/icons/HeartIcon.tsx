import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function HeartIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 18c.5 0 10-5 10-12 0-3.5-2.5-5.956-5.5-6C13-.02 11.5.5 10 2.5 8.5.5 6.974 0 5.5 0 2.5 0 0 2.5 0 6c0 7 9.5 12 10 12z"
        fill="currentColor"
      />
    </Svg>
  );
}
