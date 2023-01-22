import React, { PropsWithChildren } from 'react';
import { GestureHandlerProvider } from './GestureHandlerProvider';

/** Wrap all providers or React contexts inside this AppProvider. */
export function AppProvider({ children }: PropsWithChildren) {
  return <GestureHandlerProvider>{children}</GestureHandlerProvider>;
}
