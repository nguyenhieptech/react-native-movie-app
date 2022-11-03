import React from 'react';
import Svg, { G, Circle, Path, Defs, ClipPath } from 'react-native-svg';

export function XDeleteTextInputIcon(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_245_2504)">
        <Circle cx={10} cy={10} r={10} fill="#0A0A0A" fillOpacity={0.5} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.025 14.086a.75.75 0 101.06-1.06L11.06 10l3.026-3.025a.75.75 0 00-1.06-1.061L10 8.939 6.974 5.914a.75.75 0 00-1.06 1.06L8.939 10l-3.025 3.025a.75.75 0 001.06 1.061L10 11.061l3.025 3.025z"
          fill="#FDFDFD"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_245_2504">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
