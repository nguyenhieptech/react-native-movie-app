import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  AboutAuthorScreen,
  ContactScreen,
  PreviewAssetsScreen,
  SettingsDetailScreen,
  SettingsScreen,
  UpdateProfileScreen,
} from 'src/screens';
import { SettingsStackParamList } from '../types';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AboutAuthor" component={AboutAuthorScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="PreviewAssets" component={PreviewAssetsScreen} />
      <Stack.Screen name="SettingsDetail" component={SettingsDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </Stack.Navigator>
  );
}
