import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function SaveIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.25 5.5C.25 2.6 2.6.25 5.5.25h6.672a5.25 5.25 0 013.661 1.487l2.328 2.265a5.25 5.25 0 011.589 3.763V14.5c0 2.9-2.35 5.25-5.25 5.25h-9A5.25 5.25 0 01.25 14.5v-9zm5-3.742V3A3.75 3.75 0 009 6.75h5a.75.75 0 000-1.5H9A2.25 2.25 0 016.75 3V1.75h5.422a3.75 3.75 0 012.615 1.062l2.328 2.265a3.75 3.75 0 011.135 2.688V14.5a3.75 3.75 0 01-3.5 3.742V14A3.75 3.75 0 0011 10.25H9A3.75 3.75 0 005.25 14v4.242a3.75 3.75 0 01-3.5-3.742v-9a3.75 3.75 0 013.5-3.742zM6.75 14v4.25h6.5V14A2.25 2.25 0 0011 11.75H9A2.25 2.25 0 006.75 14z"
        fill="currentColor"
      />
    </Svg>
  );
}
