import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function XIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.73 1.33A.75.75 0 0014.67.27L8 6.94 1.33.27A.75.75 0 00.27 1.33L6.938 8l-6.67 6.67a.75.75 0 001.061 1.06L8 9.06l6.67 6.67a.75.75 0 101.06-1.06L9.06 8l6.67-6.67z"
        fill="currentColor"
      />
    </Svg>
  );
}
