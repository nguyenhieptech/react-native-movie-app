import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function VerticalDotsIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2c0-1.1-.9-2-2-2S0 .9 0 2s.9 2 2 2 2-.9 2-2zm0 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM2 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
        fill="currentColor"
      />
    </Svg>
  );
}
