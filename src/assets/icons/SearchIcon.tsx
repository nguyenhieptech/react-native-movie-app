import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function SearchIcon(props: any) {
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
        d="M1.75 10.5a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM10 .75C4.615.75.25 5.115.25 10.5s4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l3.626 3.626a.75.75 0 101.06-1.06l-3.626-3.626A9.712 9.712 0 0019.75 10.5c0-5.385-4.365-9.75-9.75-9.75z"
        fill="currentColor"
      />
    </Svg>
  );
}
