import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function AddToPlaylistIcon(props: any) {
  return (
    <Svg
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.77 0a.77.77 0 000 1.54h15.102a.77.77 0 000-1.54H.77zm10.523 5.647c0 .425-.36.77-.806.77H.807C.36 6.417 0 6.072 0 5.647c0-.426.361-.77.807-.77h9.68c.445 0 .806.344.806.77zm3.08.513a.77.77 0 01.77.77v3.337h3.337a.77.77 0 110 1.54h-3.337v3.336a.77.77 0 11-1.54 0v-3.336h-3.336a.77.77 0 010-1.54h3.336V6.93a.77.77 0 01.77-.77zM.803 10.267c-.443 0-.803.344-.803.77 0 .425.36.77.803.77h5.58c.444 0 .804-.345.804-.77 0-.426-.36-.77-.804-.77H.803z"
        fill="currentColor"
      />
    </Svg>
  );
}
