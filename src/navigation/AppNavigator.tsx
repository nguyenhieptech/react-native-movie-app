import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonStackNavigator, CommonStackNavigatorParamList } from './common';
import { MainBottomTabsNavigator, MainTabsNavigatorParamList } from './main';

export type AppStackParamList = {
  MainTabs: undefined;
} & MainTabsNavigatorParamList &
  CommonStackNavigatorParamList;

export const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="MainTabs"
          component={MainBottomTabsNavigator}
          options={{ headerShown: false }}
        />
        {CommonStackNavigator()}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
