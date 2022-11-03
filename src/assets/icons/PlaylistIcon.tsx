import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function PlaylistIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.831.33a.75.75 0 01.671 0l9 4.5a.75.75 0 010 1.34l-9 4.5a.75.75 0 01-.67 0l-9-4.5a.75.75 0 010-1.34l9-4.5zM2.844 5.5l7.323 3.661L17.49 5.5l-7.323-3.661L2.844 5.5zM.51 14.636a.75.75 0 011.02-.292l8.636 4.798 8.635-4.798a.75.75 0 01.729 1.312l-9 5a.75.75 0 01-.729 0l-9-5a.75.75 0 01-.291-1.02zm1.02-5.292a.75.75 0 00-.729 1.312l9 5a.75.75 0 00.729 0l9-5a.75.75 0 10-.729-1.312l-8.635 4.798L1.53 9.344z"
        fill="currentColor"
        fillOpacity={0.8}
      />
    </Svg>
  );
}
