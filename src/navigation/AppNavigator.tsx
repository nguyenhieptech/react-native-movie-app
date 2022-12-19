import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from 'src/screens/common/SplashScreen';
import { MainBottomTabsNavigator } from './main';
import { navigationRef } from './navigationRef';
import { AppStackParamList } from './types';

export const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
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

/** Screens that don't need Bottom Tabs */
function CommonScreensStackNavigator() {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Group>
  );
}
