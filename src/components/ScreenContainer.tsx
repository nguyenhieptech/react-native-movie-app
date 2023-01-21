import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

type ScreenContainerProps = PropsWithChildren<{
  /** Whether it should have background or not. */
  hasBackground?: boolean;
}>;

export function ScreenContainer(props: ScreenContainerProps) {
  const { children, hasBackground } = props;

  return (
    <View className="flex-1 bg-black px-5">
      {hasBackground ? (
        <FastImage
          className="absolute inset-0"
          source={require('src/assets/img/background_375_812.png')}
        />
      ) : null}
      {children}
    </View>
  );
}
