import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DownloadScreen } from 'src/screens';
import { DownloadStackParamList } from '../types';

const Stack = createNativeStackNavigator<DownloadStackParamList>();

export function DownloadStack() {
  return (
    <Stack.Navigator
      initialRouteName="Download"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Download" component={DownloadScreen} />
    </Stack.Navigator>
  );
}
