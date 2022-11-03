import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function RadioButtonIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm0 2a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14z"
        fill="currentColor"
      />
    </Svg>
  );
}
