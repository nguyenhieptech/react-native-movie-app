import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'src/assets/icons';
import { theme } from 'src/theme';

type HeaderProps = {
  /** Title of the header. In the middle of header. */
  headerTitle: string;

  /** Custom header left React Element. Mostly icons. */
  headerLeft?: JSX.Element;

  /** Custom header right React Element. */
  headerRight?: JSX.Element;
};

export function Header(props: HeaderProps) {
  const { headerTitle = 'Title', headerLeft, headerRight } = props;

  return (
    <View className="mt-6 flex-row justify-between">
      {headerLeft ? (
        <View>{headerLeft}</View>
      ) : (
        <TouchableOpacity hitSlop={theme.hitSlopIcon}>
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </TouchableOpacity>
      )}
      <Text className="text-white">{headerTitle}</Text>
      {headerRight ? (
        <View>{headerRight}</View>
      ) : (
        <TouchableOpacity hitSlop={theme.hitSlopIcon}>
          <View className="mr-4" />
        </TouchableOpacity>
      )}
    </View>
  );
}
