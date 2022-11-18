import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PlaylistScreen } from 'src/screens';

export type PlaylistStackParamList = {
  Playlist: undefined;
};

const Stack = createNativeStackNavigator<PlaylistStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Playlist"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Playlist" component={PlaylistScreen} />
    </Stack.Navigator>
  );
}
