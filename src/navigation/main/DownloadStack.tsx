import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DownloadScreen } from 'src/screens';

export type DownloadStackParamList = {
  Download: undefined;
};

const Stack = createNativeStackNavigator<DownloadStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Download"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Download" component={DownloadScreen} />
    </Stack.Navigator>
  );
}
