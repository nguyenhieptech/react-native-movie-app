import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function WarningIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.25 11C.25 5.063 5.063.25 11 .25S21.75 5.063 21.75 11 16.937 21.75 11 21.75.25 16.937.25 11zM11 1.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zm.558 11.253l.767-6.513a1.334 1.334 0 10-2.65 0l.767 6.513a.562.562 0 001.116 0zM11 17a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
    </Svg>
  );
}
