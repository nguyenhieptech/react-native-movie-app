import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'src/assets/icons';

type HeaderProps = {
  /** Title of the header. In the middle of header. */
  headerTitle: string;

  /** Custom header left ReactNode. Mostly icons. */
  headerLeft?: ReactNode;
};

export function Header({ headerTitle = 'Title', headerLeft }: HeaderProps) {
  return (
    <View className="mt-6 flex-row justify-between">
      <TouchableOpacity hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        {headerLeft ? (
          headerLeft
        ) : (
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        )}
      </TouchableOpacity>
      <Text className="text-white">{headerTitle}</Text>
      <View className="mr-4" />
    </View>
  );
}
