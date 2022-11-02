import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function RightArrowIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 8.47l.53.53-.53.53-8 8a.75.75 0 11-1.06-1.06l6.72-6.72H1a.75.75 0 010-1.5h16.19l-6.72-6.72A.75.75 0 0111.53.47l8 8z"
        fill="currentColor"
      />
    </Svg>
  );
}
