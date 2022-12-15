import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

export function FormErrorMessage({ children }: PropsWithChildren) {
  return (
    <Text className="mt-2 text-sm text-mistake2 opacity-70">{children}</Text>
  );
}
