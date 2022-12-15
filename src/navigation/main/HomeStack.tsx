import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeHistoryScreen, HomeNewMovieScreen, HomeScreen } from 'src/screens';
import { HomeStackParamList } from '../types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeHistory" component={HomeHistoryScreen} />
      <Stack.Screen name="HomeNewMovie" component={HomeNewMovieScreen} />
    </Stack.Navigator>
  );
}
