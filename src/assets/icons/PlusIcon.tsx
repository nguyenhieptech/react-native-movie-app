import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function PlusIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 1a.75.75 0 00-1.5 0v5.25H1a.75.75 0 000 1.5h5.25V13a.75.75 0 001.5 0V7.75H13a.75.75 0 000-1.5H7.75V1z"
        fill="currentColor"
        fillOpacity={0.9}
      />
    </Svg>
  );
}
