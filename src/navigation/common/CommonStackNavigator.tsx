import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'src/screens/SplashScreen';

export type CommonStackNavigatorParamList = {
  Splash: undefined;
};

const Stack = createNativeStackNavigator<CommonStackNavigatorParamList>();

/**
 * Common Stack contains screens which don't have Bottom Tab.
 *
 * Chứa các màn hình không sử dụng hay không nằm trong Bottom Tab Navigator.
 */
export function CommonStackNavigator() {
  return (
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Group>
  );
}
