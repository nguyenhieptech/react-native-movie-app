import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function ScreenContainer({ children }: PropsWithChildren) {
  return <View className="flex-1 bg-black px-5">{children}</View>;
}
