import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DetailMovieScreen, PlaylistScreen } from 'src/screens';
import { CreatePlaylistScreen } from 'src/screens/playlist/CreatePlaylistScreen';
import { PlaylistStackParamList } from '../types';

const Stack = createNativeStackNavigator<PlaylistStackParamList>();

export function PlaylistStack() {
  return (
    <Stack.Navigator
      initialRouteName="Playlist"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Playlist" component={PlaylistScreen} />
      <Stack.Screen name="DetailMovie" component={DetailMovieScreen} />
      <Stack.Screen name="CreatePlaylist" component={CreatePlaylistScreen} />
    </Stack.Navigator>
  );
}
