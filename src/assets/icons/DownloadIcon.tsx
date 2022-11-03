import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function DownloadIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.833.25a.75.75 0 01.75.75v12.19l4.72-4.72a.75.75 0 011.06 1.06l-5.999 6-.53.53-.531-.53-6-6a.75.75 0 011.06-1.06l4.72 4.72V1a.75.75 0 01.75-.75zm-8 18a.75.75 0 000 1.5h16a.75.75 0 000-1.5h-16z"
        fill="currentColor"
        fillOpacity={0.8}
      />
    </Svg>
  );
}
