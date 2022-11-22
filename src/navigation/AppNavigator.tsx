import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonScreensStackNavigator } from './common';
import { MainBottomTabsNavigator } from './main';
import { AppStackParamList } from './types';

export const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainBottomTabs">
        <Stack.Screen
          name="MainBottomTabs"
          component={MainBottomTabsNavigator}
          options={{ headerShown: false }}
        />
        {CommonScreensStackNavigator()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
