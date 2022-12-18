import 'react-native-gesture-handler';
import { PropsWithChildren } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function GestureHandlerProvider({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView className="flex-1">
      {children}
    </GestureHandlerRootView>
  );
}
